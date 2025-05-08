import { z } from 'zod';

export const notificareApplicationSchema = z.object({
  name: z
    .string({ message: "Property 'name' should be a string" })
    .nonempty("Property 'name' is mandatory"),
  icon: z
    .string({ message: "Property 'icon' should be a string" })
    .url("Property 'icon' should be a valid URL"),
  domain: z
    .string({ message: "Property 'domain' should be a string" })
    .nonempty("Property 'domain' is mandatory"),
});

export type NotificareApplicationSchema = z.infer<typeof notificareApplicationSchema>;
