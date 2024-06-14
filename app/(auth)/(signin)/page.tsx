"use client";

import Link from "next/link";
import UserAuthForm from "@/components/forms/Admin Forms/admin-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/contants";

const World = dynamic(
  () => import("../../../components/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function LoginPage() {
  return (
    <ScrollArea>
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 hidden top-4 md:right-8 md:top-8"
          )}
        >
          Sign Up
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black) dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
            <div className="h-[60%] w-full">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            CCMS
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Welcome to our Cyber Cafe Management System (CCMS). Our system
                provides a comprehensive platform to manage all the aspects of a
                cyber cafe, including user sessions, billing, and inventory
                management. Enjoy a seamless digital experience with us.
              </p>
              <footer className="text-sm">CCMS</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-4 lg:p-8 h-full flex items-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign In to your Account.
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your username and password to continue.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-2 text-sm text-center text-white">
                {" "}
                Not Admin?{" "}
                <Link
                  href={"/user/signin"}
                  className=" text-blue-600 hover:underline"
                >
                  Login as user
                </Link>
              </p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
