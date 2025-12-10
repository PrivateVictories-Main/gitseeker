"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useWebLLM, UseWebLLMReturn } from "@/hooks/useWebLLM";

const WebLLMContext = createContext<UseWebLLMReturn | null>(null);

export function WebLLMProvider({ children }: { children: ReactNode }) {
  const webLLM = useWebLLM();

  return (
    <WebLLMContext.Provider value={webLLM}>
      {children}
    </WebLLMContext.Provider>
  );
}

export function useWebLLMContext(): UseWebLLMReturn {
  const context = useContext(WebLLMContext);
  if (!context) {
    throw new Error("useWebLLMContext must be used within a WebLLMProvider");
  }
  return context;
}



