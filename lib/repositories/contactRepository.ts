import { randomUUID } from "crypto";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  preferredContactMethod: "EMAIL" | "PHONE" | "TEXT";
  message: string;
  status: "NEW" | "RESPONDED";
  createdAt: string;
}

const submissions: ContactSubmission[] = [];

export function createContactSubmission(
  input: Omit<ContactSubmission, "id" | "status" | "createdAt">,
): ContactSubmission {
  const submission: ContactSubmission = {
    id: randomUUID(),
    ...input,
    status: "NEW",
    createdAt: new Date().toISOString(),
  };
  submissions.push(submission);
  return submission;
}
