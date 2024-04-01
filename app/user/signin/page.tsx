"use client";

import UserSigninForm from "@/components/forms/General User Form/user-login-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SignIn() {
  return (
    <ScrollArea className="w-full h-full overflow-y-auto">
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-full m-auto bg-inherit lg:max-w-lg">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <UserSigninForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
