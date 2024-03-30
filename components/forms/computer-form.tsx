"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  isOccupied: z.string(),
  model_no: z.string(),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  initialData: any | null;
  categories: any;
}

export const ComputerForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
}) => {
  const params = useParams();

  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title =
    initialData && params.computerId !== "new"
      ? "Edit Computer"
      : "Create Computer";
  const description =
    initialData && params.computerId !== "new"
      ? "Edit a Computer."
      : "Add a new Computer";
  const toastMessage =
    initialData && params.computerId !== "new"
      ? "Computer updated."
      : "Computer created.";
  const action =
    initialData && params.computerId !== "new" ? "Save changes" : "Create";

  const defaultValues =
    initialData && params.computerId !== "new"
      ? initialData
      : {
          isOccupied: false,
          model_no: "",
        };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-Computer/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-Computer`, data);
        // console.log("Computer", res);
      }
      router.refresh();
      // router.push(`/dashboard/products`);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
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
      router.refresh();
      // router.push(`/${params.storeId}/products`);
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
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="model_no"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Computer Model Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isOccupied"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>isOccupied</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
