"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const suggestions = [
    "machine learning",
    "react components",
    "rust cli tools",
    "nextjs starter",
    "python automation",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="relative group">
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 group-focus-within:opacity-50 transition-opacity duration-300" />
        
        <div className="relative flex items-center gap-2 p-2 bg-zinc-900/90 border border-zinc-800 rounded-xl backdrop-blur-sm focus-within:border-violet-500/50 transition-colors">
          <Search className="w-5 h-5 text-zinc-500 ml-3" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GitHub for AI tools, libraries, frameworks..."
            className="flex-1 border-0 bg-transparent text-white placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
          <Button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 px-6 rounded-lg"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Search
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Suggestion pills */}
      <div className="flex flex-wrap justify-center gap-2">
        <span className="text-xs text-zinc-500">Try:</span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setQuery(suggestion);
              onSearch(suggestion);
            }}
            className="px-3 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-400 hover:bg-violet-500/20 hover:text-violet-300 border border-zinc-700/50 hover:border-violet-500/30 transition-all"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}



