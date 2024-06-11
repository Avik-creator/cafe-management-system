"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./splashScreen";
import { usePathname } from "next/navigation";

const SplashScreenProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <SplashScreen finishLoading={setIsLoading} /> : children;
};

export default SplashScreenProvider;
