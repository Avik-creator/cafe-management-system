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
import {
  addComputers,
  deleteComputers,
  updateComputer,
} from "@/server/DashboardList/computers";
import { AlertModal } from "@/components/modal/alert-modal";

interface ProductFormProps {
  initialData: any | null;
  computerId: string;
}

export const ComputerForm: React.FC<ProductFormProps> = ({
  initialData,
  computerId,
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

  const form = useForm<ComputerFormValues>({
    resolver: zodResolver(ComputerFormSchema),
    defaultValues: {
      modelno: initialData?.Model_No,
      is_occupied: initialData?.is_occupied,
      os:
        initialData?.os == "Windows"
          ? "Windows"
          : initialData?.os == "Linux"
            ? "Linux"
            : "MACOSx",
      status: initialData?.status == "WORKING" ? 1 : 2,
      current_session: initialData?.session == null ? 0 : initialData?.session,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    const { current_session, ...submissionData } = data;
    if (initialData && params.computerId !== "new") {
      const responseStatus = await updateComputer(computerId, data);

      if (responseStatus == 200) {
        toast({
          variant: "success",
          title: "Computer Updated",
          description: "Computer has been updated successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Computer Not Updated",
          description: "Computer has not been updated successfully.",
        });
      }
    } else {
      const response = await addComputers(submissionData);

      if (response == 201) {
        toast({
          variant: "success",
          title: "Computer Added",
          description: "Computer has been added successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Computer Not Added",
          description: "Computer has not been added successfully.",
        });
      }
    }
  };

  const onDelete = async () => {
    // try {
    //   setLoading(true);
    //   router.refresh();
    // } catch (error: any) {
    // } finally {
    //   setLoading(false);
    //   setOpen(false);
    // }
    try {
      setLoading(true);
      const response = await deleteComputers(computerId);
      if (response == 204) {
        toast({
          variant: "success",
          title: "Computer Deleted",
          description: "Computer has been deleted successfully.",
        });
        router.push("/dashboard/computers");
      } else {
        toast({
          variant: "destructive",
          title: "Computer Not Deleted",
          description: "Computer has not been deleted successfully.",
        });
      }
    } catch (error) {
      console.error("Error deleting computer:", error);
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Computer Not Deleted",
        description: "Computer has not been deleted successfully.",
      });
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
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
              name="modelno"
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
              name="is_occupied"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>isOccupied</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "true" ? true : false)
                      }
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Occupied Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="current_session"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Session</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      defaultValue={field.value}
                      disabled={loading}
                      placeholder="Current Session"
                      {...field}
                    />
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
                    <Select onValueChange={field.onChange} value={field.value}>
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
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Computer Working Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ComputerWorkingStatus.map((computer) => (
                          <SelectItem
                            value={String(computer.id)}
                            key={computer.id}
                          >
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
