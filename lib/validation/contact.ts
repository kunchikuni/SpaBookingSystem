import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  preferredContactMethod: z.enum(["EMAIL", "PHONE", "TEXT"]).default("EMAIL"),
  message: z.string().min(1).max(2000),
});

export type ContactSubmissionPayload = z.infer<typeof contactSubmissionSchema>;
