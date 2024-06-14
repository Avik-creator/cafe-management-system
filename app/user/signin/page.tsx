"use client";

import UserSigninForm from "@/components/forms/General User Form/user-login-form";

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

export default function SignIn() {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col justify-center items-center h-full mt-10 mb-10">
        <div className="w-full m-auto bg-inherit lg:max-w-lg">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Enter your username and password to login
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserSigninForm />
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="mt-2 text-sm text-center text-white">
                {" "}
                Don&apos;t have an account?{" "}
                <Link
                  href={"/user/signup"}
                  className=" text-blue-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
              <p className="mt-2 text-sm text-center text-white">
                {" "}
                Not a user?{" "}
                <Link
                  href={"/"}
                  className=" text-blue-600 hover:underline"
                >
                  Login as admin
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
