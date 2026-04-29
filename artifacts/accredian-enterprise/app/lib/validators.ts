import { z } from "zod";

export const CreateLeadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid work email is required").max(200),
  company: z.string().trim().min(1, "Company is required").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  teamSize: z.string().trim().max(40).optional().or(z.literal("")),
  trainingArea: z.string().trim().min(1, "Training area is required").max(120),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type CreateLeadInput = z.infer<typeof CreateLeadSchema>;
