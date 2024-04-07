import { z } from "zod";

export const AdminUserFormSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    username: z.string().trim().min(1, "Username is required"),

    email: z
      .string()
      .trim()
      .email("Enter a valid email address")
      .endsWith("@compelling.works", "Invalid email address"),
    password: z
      .string()
      .trim()
      .min(6, "Password must be more than 6 characters long"),
    confirmPassword: z.string(),
    image: z
      .custom<FileList>(
        (val) => val instanceof FileList,
        "Admin user image is required"
      )
      .refine((files) => files.length > 0, "An image is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type AdminUserCreateSchemaType = z.output<typeof AdminUserFormSchema>;


export const TeamMemberFormSchema = z.object({
  name: z.string().trim().min(1, "member name is required"),
  role: z.string().trim().min(1, "member role is required"),
  category: z.string().trim().min(1, "member category is required"),
  message1: z.string().trim().optional(),
  message2: z.string().trim().optional(),

  bio: z.string().trim().min(1, "member bio information is required"),
  education: z
    .string()
    .trim()
    .min(1, "member education information is required"),
  experience: z
    .string()
    .trim()
    .min(1, "member working experience information is required"),
  image: z
    .custom<FileList>(
      (val) => val instanceof FileList,
      "Admin user image is required"
    )
    .refine((files) => files.length > 0, "An image is required"),
});

export type TeamMemberFormSchemaType = z.output<typeof TeamMemberFormSchema>;

export const ProjectFormSchema = z.object({
  name: z.string().trim().min(1, "Project name is required"),
  category: z.string().trim().min(1, "Project category is required"),
  country: z.string().trim().min(1, "Country is required"),
  implementors: z.string().trim().min(1, "Project implementors are required"),
  commissioningParty: z
    .string()
    .trim()
    .min(1, "Project commissioning party are required"),
  description: z.string().trim().min(1, "Project description is required"),
  image: z
    .custom<FileList>(
      (val) => val instanceof FileList,
      "Project image is required"
    )
    .refine((files) => files.length > 0, "An image is required"),
  startDate: z.string().trim().min(1, "Project start date is required"),
  endDate: z.string().trim().min(1, "Project end date is required"),
});

export type ProjectFormSchemaType = z.output<typeof ProjectFormSchema>;

export const ContactFormSchema = z.object({
  name: z.string().trim().min(1, "Your name is required"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .min(1, "Your email address is required"),
  message: z.string().trim().min(1, "Your message is required"),
  type: z.string().trim(),
});

export type ContactFormSchemaType = z.output<typeof ContactFormSchema>;


export const DonorFormSchema = z.object({
  name: z.string().trim().min(1, "Donor name is required"),
  logo: z
    .custom<FileList>(
      (val) => val instanceof FileList,
      "Donor logo is required"
    )
    .refine((files) => files.length > 0, "An image is required"),
  website_url: z.string().trim().min(1, "Donor website url is required"),
});

export type DonorFormSchemaType = z.output<typeof DonorFormSchema>;

export const JobFormSchema = z.object({
  title: z.string().trim().min(1, "Job title is required"),
  description: z.string().trim().min(1, "Job description is required"),
  endDate: z.string().trim().min(1, "Job application deadline required"),
  pdf: z
    .custom<FileList>(
      (val) => val instanceof FileList,
      "Job advert pdf is required"
    )
    .refine((files) => files.length > 0, "A pdf is required"),
});

export type JobFormSchemaType = z.output<typeof JobFormSchema>;

export const OfficeFormSchema = z.object({
  city: z.string().trim().min(1, "city title is required"),
  country: z.string().trim().min(1, "country is required"),
  telephone: z.string().trim().min(1, "office line is required"),
  postOfficeBox: z.string().trim().min(1, "Job application deadline required"),
  plotNumber: z.string().trim().min(1, "plot number deadline required"),
  area: z.string().trim().min(1, "area required"),
});

export type OfficeFormSchemaType = z.output<typeof OfficeFormSchema>;
