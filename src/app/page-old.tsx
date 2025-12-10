"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { RepoCard } from "@/components/RepoCard";
import { searchRepositories, GitHubRepo } from "@/lib/github";
import { toast } from "sonner";
import { Sparkles, Brain, Zap, Shield } from "lucide-react";

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);

    try {
      const data = await searchRepositories(query);
      setRepos(data.items);
      setTotalCount(data.total_count);
    } catch (error) {
      if (error instanceof Error && error.message === "RATE_LIMIT") {
        toast.error("GitHub needs a break. Try again in a minute.", {
          description: "Rate limit exceeded. API limits reset every minute.",
          duration: 5000,
        });
      } else {
        toast.error("Failed to search repositories", {
          description: "Please check your connection and try again.",
        });
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-500/10 via-fuchsia-500/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pulse-glow" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
              <Brain className="w-4 h-4" />
              <span>Powered by WebGPU & Local AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Discover GitHub with</span>
              <br />
              <span className="gradient-text">In-Browser AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
              Search repositories and get instant AI-powered analysis — 
              <span className="text-violet-400"> entirely in your browser</span>. 
              No API keys, no server costs, no data leaves your device.
            </p>

            {/* Search */}
            <div className="pt-8">
              <SearchBar onSearch={handleSearch} isLoading={isLoading} />
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              {[
                { icon: Shield, text: "100% Private" },
                { icon: Zap, text: "Instant Analysis" },
                { icon: Brain, text: "Llama 3.1 8B" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-400 text-sm"
                >
                  <Icon className="w-4 h-4 text-violet-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {hasSearched && (
            <>
              {/* Results header */}
              <div className="mb-6">
                {isLoading ? (
                  <div className="h-6 w-48 skeleton rounded" />
                ) : (
                  <p className="text-zinc-400">
                    Found <span className="text-white font-medium">{totalCount.toLocaleString()}</span> repositories
                  </p>
                )}
              </div>

              {/* Results grid */}
              {isLoading ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-64 rounded-xl skeleton"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              ) : repos.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800/50 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400">No repositories found. Try a different search term.</p>
                </div>
              )}
            </>
          )}

          {/* Empty state */}
          {!hasSearched && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/20 mb-6">
                <Sparkles className="w-10 h-10 text-violet-400" />
              </div>
              <p className="text-zinc-500 max-w-md mx-auto">
                Start by searching for repositories above. Then click <strong className="text-violet-400">"Analyze Locally"</strong> to get AI-powered insights using your browser's GPU.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
