import { z } from 'zod';

export const notificareApplicationSchema = z.object({
  appName: z.string({ message: 'appName should be a string' }).nonempty('appName is mandatory'),
  appIcon: z
    .string({ message: 'appIcon should be a URL string' })
    .url('appIcon should be a valid URL'),
  appDomain: z
    .string({ message: 'appDomain should be a string' })
    .nonempty('appDomain is mandatory'),
});

export type NotificareApplicationSchema = z.infer<typeof notificareApplicationSchema>;
