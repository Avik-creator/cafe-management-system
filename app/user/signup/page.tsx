"use client";

import UserSignUpForm from "@/components/forms/General User Form/user-signup-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function SignUp() {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col justify-center items-center h-full mt-10 mb-10">
        <div className="w-full bg-inherit lg:max-w-lg">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
              <CardDescription className="text-center">
                Register Your Account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserSignUpForm />
            </CardContent>
            <CardFooter className="sm:mb-10">
              <p className="text-xs text-center text-white">
                {" "}
                Don&apos;t have an account?{" "}
                <Link
                  href={"/user/signin"}
                  className=" text-blue-600 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
