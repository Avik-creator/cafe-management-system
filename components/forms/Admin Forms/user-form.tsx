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
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserFormSchema, type UserFormValues } from "@/lib/form-schema";
import { useToast } from "../../ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { format } from "date-fns";
import { Calendar } from "../../ui/calendar";
import { cn } from "@/lib/utils";

interface UserFormProps {
  initialData: any | null;
  categories: any;
}

export const UserForm: React.FC<UserFormProps> = ({
  initialData,
  categories,
}) => {
  const params = useParams();

  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title =
    initialData && params.userId !== "new" ? "Edit User" : "Create User";
  const description =
    initialData && params.userId !== "new" ? "Edit a User." : "Add a new User";
  const toastMessage =
    initialData && params.userId !== "new" ? "User updated." : "User created.";
  const action =
    initialData && params.userId !== "new" ? "Save changes" : "Create";

  const defaultValues =
    initialData && params.userId !== "new" ? initialData : null;

  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValues) => {
    console.log(data);
    try {
      setLoading(true);
      if (initialData) {
      } else {
      }
      // router.refresh();
      // router.push(`/dashboard/user`);
      toast({
        variant: "success",
        title: "Success",
        description: "User Added Successfully.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/products`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:flex md:flex-col lg:w-2/3 gap-8"
        >
          <div className="flex flex-col lg:ml-40 gap-8 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="User name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={true}
                      placeholder="User Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name of the User</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="UserName 1"
                      type="text"
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
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address of the User</FormLabel>

                  <FormControl>
                    <Input
                      type="text"
                      placeholder="User Address"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number of the User</FormLabel>

                  <FormControl>
                    <Input
                      type="number"
                      placeholder="+91 1234567890"
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
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              disabled={loading}
              className="flex flex-row item-center justify-center mt-5 mb-20"
              type="submit"
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
