"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWebLLMContext } from "@/contexts/WebLLMContext";
import { GitHubRepo, getReadme, formatNumber, getLanguageColor, timeAgo } from "@/lib/github";
import { Star, GitFork, ExternalLink, Zap, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface RepoCardProps {
  repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  const { status, chat, abort, isGenerating } = useWebLLMContext();
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleAnalyze = async () => {
    if (status !== "ready") {
      toast.error("AI model is not ready. Click the status pill to initialize it first.");
      return;
    }

    setIsAnalyzing(true);
    setShowAnalysis(true);
    setAnalysis("");

    try {
      // Fetch the README
      const readme = await getReadme(repo.owner.login, repo.name, repo.default_branch);

      if (!readme) {
        setAnalysis("❌ Could not find a README for this repository.");
        setIsAnalyzing(false);
        return;
      }

      // Truncate README if too long (keeping ~4000 chars for context)
      const truncatedReadme = readme.length > 4000 
        ? readme.substring(0, 4000) + "\n\n[README truncated...]" 
        : readme;

      // Stream the analysis
      await chat(
        [
          {
            role: "system",
            content: "You are a helpful assistant that analyzes GitHub repositories. Summarize the provided README in exactly 3 concise bullet points for a developer. Focus on: 1) What the project does, 2) Key features or capabilities, 3) How to get started. Be concise and direct.",
          },
          {
            role: "user",
            content: `Please analyze this README from the repository "${repo.full_name}":\n\n${truncatedReadme}`,
          },
        ],
        (token) => {
          setAnalysis((prev) => (prev || "") + token);
        }
      );
    } catch (error) {
      if (error instanceof Error && error.message === "Aborted") {
        setAnalysis((prev) => prev + "\n\n[Analysis stopped]");
      } else {
        toast.error("Failed to analyze repository");
        console.error(error);
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAbort = () => {
    abort();
    setIsAnalyzing(false);
  };

  return (
    <Card className="group relative overflow-hidden bg-zinc-900/50 border-zinc-800/50 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              className="w-10 h-10 rounded-lg border border-zinc-700/50"
            />
            <div className="min-w-0">
              <h3 className="font-semibold text-white truncate group-hover:text-violet-300 transition-colors">
                {repo.name}
              </h3>
              <p className="text-sm text-zinc-500 truncate">{repo.owner.login}</p>
            </div>
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-2 min-h-[2.5rem]">
          {repo.description || "No description available"}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 4).map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="bg-violet-500/10 text-violet-300 border-violet-500/20 text-xs"
              >
                {topic}
              </Badge>
            ))}
            {repo.topics.length > 4 && (
              <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 text-xs">
                +{repo.topics.length - 4}
              </Badge>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{formatNumber(repo.stargazers_count)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <GitFork className="w-4 h-4" />
            <span>{formatNumber(repo.forks_count)}</span>
          </div>
          {repo.language && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span>{repo.language}</span>
            </div>
          )}
          <span className="text-zinc-500 text-xs ml-auto">
            {timeAgo(repo.updated_at)}
          </span>
        </div>

        {/* Analyze Button */}
        {!showAnalysis ? (
          <Button
            onClick={handleAnalyze}
            disabled={status !== "ready"}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Zap className="w-4 h-4 mr-2" />
            {status === "ready" ? "Analyze Locally" : "AI Not Ready"}
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
                AI Analysis
              </span>
              <div className="flex items-center gap-2">
                {isAnalyzing && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleAbort}
                    className="h-6 px-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    Stop
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setShowAnalysis(false);
                    setAnalysis(null);
                  }}
                  className="h-6 w-6 p-0 text-zinc-500 hover:text-white"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-black/50 border border-zinc-800/50 min-h-[80px]">
              {analysis ? (
                <p className={`text-sm text-zinc-300 whitespace-pre-wrap ${isAnalyzing ? 'cursor-blink' : ''}`}>
                  {analysis}
                </p>
              ) : (
                <div className="flex items-center gap-2 text-zinc-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Fetching README...</span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}



