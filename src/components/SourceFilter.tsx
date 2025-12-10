"use client";

import { SourceType, getSourceConfig } from "@/lib/sources";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface SourceFilterProps {
  selectedSources: SourceType[];
  onSourceToggle: (source: SourceType) => void;
}

const allSources: SourceType[] = ["github", "huggingface", "gitlab", "npm", "pypi"];

export function SourceFilter({ selectedSources, onSourceToggle }: SourceFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <span className="text-xs text-zinc-500 self-center mr-2">Sources:</span>
      {allSources.map((source) => {
        const config = getSourceConfig(source);
        const isSelected = selectedSources.includes(source);
        
        return (
          <button
            key={source}
            onClick={() => onSourceToggle(source)}
            className={`
              relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
              ${isSelected 
                ? `${config.bgColor} ${config.borderColor} border-2 text-white shadow-lg` 
                : 'glass border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }
              hover:scale-105 active:scale-95
            `}
          >
            <div className="flex items-center gap-2">
              <span>{config.icon}</span>
              <span>{config.name}</span>
              {isSelected && (
                <Check className="w-4 h-4 animate-in zoom-in duration-200" />
              )}
            </div>
            {isSelected && (
              <div className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-20 rounded-xl blur-xl -z-10`} />
            )}
          </button>
        );
      })}
    </div>
  );
}


