import { useEffect } from "react";

import { GoogleGeminiEffect } from "./google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import React from "react";

const SplashScreen = ({ finishLoading }: { finishLoading: Function }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip">
      <GoogleGeminiEffect />
    </div>
  );
};

export default SplashScreen;
