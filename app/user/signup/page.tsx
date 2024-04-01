"use client";

import UserSignUpForm from "@/components/forms/General User Form/user-signup-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SignUp() {
  return (
    <ScrollArea className="h-full">
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-full m-auto bg-inherit lg:max-w-lg">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
              <CardDescription className="text-center">
                Register Your Account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <UserSignUpForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
