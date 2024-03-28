"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";
import { ReportScheme, type ReportFormValues } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parseISO } from "date-fns";
import { CalendarIcon, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { ReportList } from "@/constants/data";

interface ProfileFormType {
	initialData: any | null;
}

export const ReportForm: React.FC<ProfileFormType> = ({ initialData }) => {
	const params = useParams();
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const title = "Edit The Report";
	const description = "Edit the Report.";
	const action = "Save changes";

	const defaultValues = {
		title: initialData.title,
		description: initialData.description,
		date_of_submit: parseISO(initialData.date_of_submit),
		status: initialData.status,
	};

	const form = useForm<ReportFormValues>({
		resolver: zodResolver(ReportScheme),
		defaultValues: defaultValues,
		mode: "onChange",
	});

	const {
		control,
		formState: { errors },
	} = form;

	const onSubmit = async (data: ReportFormValues) => {
		console.log(data);
	};

	const onDelete = async () => {
		try {
			setLoading(true);
			//   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
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
						onClick={() => setOpen(true)}>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-full">
					<div
						className={cn(
							"md:flex md:flex-col w-full md:w-3/4 lg:w-2/3 gap-8"
						)}>
						<div className="flex flex-col ml-60 gap-8 w-full">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input
												disabled={loading}
												placeholder="Lorem Ipsum"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Input
												disabled={loading}
												placeholder="123 Lorem Street"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="date_of_submit"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Date of Submitted</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"pl-3 text-left font-normal",
															!field.value && "text-muted-foreground"
														)}>
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

							<FormField
								control={form.control}
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Status</FormLabel>
										<FormControl>
											<Select
                                        
												onValueChange={field.onChange}
												defaultValue={field.value}
                                                >
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a Report Progression" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{ReportList.map((report) => (
														<SelectItem value={report.status} key={report.id}>
															{report.status}
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
					</div>
					<div className="w-full flex justify-center">
						<Button
							disabled={loading}
							className="flex flex-row item-center justify-center"
							type="submit">
							{action}
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
};
