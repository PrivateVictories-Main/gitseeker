"use client";

import { useWebLLMContext } from "@/contexts/WebLLMContext";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function StatusPill() {
  const { status, progress, initializeModel } = useWebLLMContext();

  const getStatusConfig = () => {
    switch (status) {
      case "idle":
        return {
          icon: "⚪️",
          text: "AI Idle",
          className: "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80 cursor-pointer",
          showProgress: false,
        };
      case "checking":
        return {
          icon: "🔄",
          text: "Checking...",
          className: "bg-amber-900/50 text-amber-200",
          showProgress: false,
        };
      case "downloading":
        return {
          icon: "⬇️",
          text: `Downloading ${Math.round(progress * 100)}%`,
          className: "bg-blue-900/50 text-blue-200",
          showProgress: true,
        };
      case "ready":
        return {
          icon: "🟢",
          text: "AI Ready",
          className: "bg-emerald-900/50 text-emerald-200",
          showProgress: false,
        };
      case "error":
        return {
          icon: "🔴",
          text: "AI Error",
          className: "bg-red-900/50 text-red-200",
          showProgress: false,
        };
      case "unsupported":
        return {
          icon: "⚠️",
          text: "WebGPU Unsupported",
          className: "bg-orange-900/50 text-orange-200",
          showProgress: false,
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/10",
        config.className
      )}
      onClick={status === "idle" ? initializeModel : undefined}
      role={status === "idle" ? "button" : undefined}
      tabIndex={status === "idle" ? 0 : undefined}
    >
      <span className="text-base">{config.icon}</span>
      <span className="whitespace-nowrap">{config.text}</span>
      {config.showProgress && (
        <div className="w-16 ml-1">
          <Progress value={progress * 100} className="h-1.5 bg-blue-950" />
        </div>
      )}
    </div>
  );
}



