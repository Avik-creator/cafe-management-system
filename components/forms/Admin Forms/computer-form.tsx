"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ComputerFormSchema, type ComputerFormValues } from "@/lib/form-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

import { useToast } from "@/components/ui/use-toast";
import { ComputerWorkingStatus, OSList } from "@/constants/data";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
    initialData && params.computerId !== "new" ? initialData : null;

  const form = useForm<ComputerFormValues>({
    resolver: zodResolver(ComputerFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: ComputerFormValues) => {
    try {
      setLoading(true);
      console.log("Computer Submitted Values: ", data);
      if (initialData) {
        // await axios.post(`/api/products/edit-Computer/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-Computer`, data);
        // console.log("Computer", res);
      }
      router.refresh();
      // router.push(`/dashboard/products`);

      toast({
        variant: "success",
        title: "Computer Created",
        description: "Computer has been created successfully.",
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
          className="md:flex md:flex-col lg:w-2/3 gap-8"
        >
          <div className="flex flex-col lg:ml-40 gap-8 w-full">
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

            <FormField
              control={form.control}
              name="ip_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IP Address</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="os"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Operating System</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Computer Operating System" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {OSList.map((computer) => (
                          <SelectItem value={computer.OS} key={computer.id}>
                            {computer.OS}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Working Status of Computer</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Computer Working Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ComputerWorkingStatus.map((computer) => (
                          <SelectItem value={computer.status} key={computer.id}>
                            {computer.status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
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
