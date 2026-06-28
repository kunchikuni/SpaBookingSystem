import { randomUUID } from "crypto";

export interface NewsletterSubscriber {
  id: string;
  email: string;
  isActive: boolean;
  subscribedAt: string;
}

const subscribers: NewsletterSubscriber[] = [];

export function subscribeToNewsletter(email: string): NewsletterSubscriber {
  const existing = subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    existing.isActive = true;
    return existing;
  }
  const subscriber: NewsletterSubscriber = {
    id: randomUUID(),
    email,
    isActive: true,
    subscribedAt: new Date().toISOString(),
  };
  subscribers.push(subscriber);
  return subscriber;
}
