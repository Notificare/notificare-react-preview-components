import { z } from 'zod';

export const notificareApplicationSchema = z.object({
  appName: z
    .string({ message: "Property 'appName' should be a string" })
    .nonempty("Property 'appName' is mandatory"),
  appIcon: z
    .string({ message: "Property 'appIcon' should be a string" })
    .url("Property 'appIcon' should be a valid URL"),
  appDomain: z
    .string({ message: "Property 'appDomain' should be a string" })
    .nonempty("Property 'appDomain' is mandatory"),
});

export type NotificareApplicationSchema = z.infer<typeof notificareApplicationSchema>;
