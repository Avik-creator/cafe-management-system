"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import SplashScreenProvider from "../splashScreenProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SplashScreenProvider>{children}</SplashScreenProvider>
      </ThemeProvider>
    </>
  );
}
