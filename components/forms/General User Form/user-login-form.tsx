"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { type UserSigninFormValues, SigninFormSchema } from "@/lib/form-schema";
import { getUserAuth } from "@/server/Auth/authAPI";
import { useToast } from "@/components/ui/use-toast";

export default function UserSigninForm() {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);

  const form = useForm<UserSigninFormValues>({
    resolver: zodResolver(SigninFormSchema),
  });

  const onSubmit = async (data: UserSigninFormValues) => {
    setLoading(true)
    const signinData = await getUserAuth(data.username, data.password);
    
    if (signinData! && signinData.status === 200 && typeof signinData.user_id == "number") {
      toast({
        title: "Logged in successfully",
        variant: "success",
      });
      router.push("/user/profile");
    } else {
      setLoading(false)
      toast({
        title: "Login Failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your username..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your Password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="ml-auto w-full" type="submit">
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
}
