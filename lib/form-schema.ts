import * as z from "zod";

export const profileSchema = z.object({
  
  name: z.string({required_error: "Name is required"}).min(3, { message: "Name must be at least 3 characters" }),
  userName: z.string({required_error: "Username is required"}).min(3, { message: "Username must be at least 3 characters" }),
  number: z.string({required_error: "Number is required"}).min(3, { message: "Number must be at least 3 characters" }),
  password: z.string({required_error: "Password is required"}).min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string({required_error: "Confirm password is required"}).min(6, { message: "Password must be at least 6 characters" }),
  address: z.string({required_error: "Address is required"}).min(3, { message: "Address must be at least 3 characters" }),
  email: z.string({required_error: "Email is required"}).email({ message: "Enter a valid email address" }),
  date_of_birth: z.date({required_error: "Date of birth is required"}),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
