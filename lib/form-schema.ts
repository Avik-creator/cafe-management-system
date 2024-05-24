import * as z from "zod";

export const profileSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters" }),
    userName: z
      .string({ required_error: "Username is required" })
      .min(3, { message: "Username must be at least 3 characters" }),
    number: z
      .string({ required_error: "Number is required" })
      .min(3, { message: "Number must be at least 3 characters" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    address: z
      .string({ required_error: "Address is required" })
      .min(3, { message: "Address must be at least 3 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Enter a valid email address" }),
    date_of_birth: z.date({ required_error: "Date of birth is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password must be same",
    path: ["confirmPassword"],
  });

export const ReportScheme = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(3, { message: "Description must be at least 3 characters" }),
  date_of_submit: z.date({ required_error: "Date of submit is required" }),
  status: z.string({ required_error: "Status is required" }),
});

export const ComputerFormSchema = z.object({
  is_occupied: z.boolean({ required_error: "Is Occupied is Required" }),
  modelno: z.string({ required_error: "Model Number is Required" }),
  os: z.string({ required_error: "OS is Required" }),
  current_session: z.number({ required_error: "Current Session is Required" }),
  status: z.number({ required_error: "Computer Working Status is Required" }),
});
// "username": "BFtRbbg6Wv642abind5TFheDdwewKrHQ0w@RZxx6q1GP@ck5WlCpr--EnOXMByZgBX",
// "password": "string",
// "first_name": "string",
// "last_name": "string",
// "email": "string",
// "phone": "string",
// "address": "string",
// "dob": "2024-05-24"
export const UserFormSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
  first_name: z.string({ required_error: "First Name is required" }),
  last_name: z.string({ required_error: "Last Name is required" }),
  email: z.string({ required_error: "Email is required" }),
  phone: z.string({ required_error: "Phone is required" }),
  address: z.string({ required_error: "Address is required" }),
  dob: z.date({ required_error: "Date of birth is required" }),
});

export const SigninFormSchema = z.object({
  email: z
    .string({ required_error: "Email is Required to Signin" })
    .email({ message: "Enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const SignupFormSchema = z
  .object({
    email: z
      .string({ required_error: "Email is Required to Signup" })
      .email({ message: "Enter a valid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    FirstName: z.string({ required_error: "First Name is required" }),
    LastName: z.string({ required_error: "Last Name is required" }),
    userName: z.string({ required_error: "Username is required" }),
    dob: z.date({ required_error: "Date of birth is required" }),
    address: z.string({ required_error: "Address is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password must be same",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof SignupFormSchema>;

export type UserSigninFormValues = z.infer<typeof SigninFormSchema>;

export type UserFormValues = z.infer<typeof UserFormSchema>;

export type ComputerFormValues = z.infer<typeof ComputerFormSchema>;

export type ReportFormValues = z.infer<typeof ReportScheme>;

export type ProfileFormValues = z.infer<typeof profileSchema>;
