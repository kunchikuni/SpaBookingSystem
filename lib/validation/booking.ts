import { z } from "zod";

export const createBookingSchema = z.object({
  serviceId: z.string().min(1),
  therapistId: z.string().min(1),
  addOnIds: z.array(z.string()).default([]),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD"),
  time: z.string().min(1),
  customer: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(7),
  }),
  specialRequests: z.string().max(1000).optional(),
  smsReminders: z.boolean().optional(),
  emailUpdates: z.boolean().optional(),
});

export type CreateBookingPayload = z.infer<typeof createBookingSchema>;
