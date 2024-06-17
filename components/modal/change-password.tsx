"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ChangePasswordFormValues,
  ChangePasswordFormSchema,
} from "@/lib/form-schema";

import { changePassword } from "@/server/Auth/authAPI";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

export function ChangePassword() {
  const { toast } = useToast();

  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(ChangePasswordFormSchema),
  });

  const onChangePasswordSubmit = async (data: ChangePasswordFormValues) => {
    if (
      data.confirm_password === data.new_password &&
      data.old_password.length &&
      data.new_password &&
      data.confirm_password
    ) {
      const { confirm_password, ...restData } = data;

      try {
        const response = await changePassword(restData);
        if (response) {
          toast({
            title: "Password Changed Successfully",
            variant: "success",
            description: response,
          });
        } else {
          toast({
            title: "Failed to Change Password",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Change Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Provide your old password and then set a new password for your
            account
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onChangePasswordSubmit)}
            className="space-y-2 w-full relative"
          >
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="old_password"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-5 items-center gap-4">
                    <FormLabel className="col-span-2 text-right">
                      Enter Old Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="col-span-3"
                        type="password"
                        placeholder="Enter your old Password"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="col-span-5" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-5 items-center gap-4">
                    <FormLabel className="col-span-2 text-right">
                      Set New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="col-span-3"
                        type="password"
                        placeholder="Enter your Password..."
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="col-span-5" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-5 items-center gap-4">
                    <FormLabel className="col-span-2 text-right">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="col-span-3"
                        type="password"
                        placeholder="Enter your Confirm Password..."
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="col-span-5" />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="flex flex-row justify-between">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="mr-auto">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
