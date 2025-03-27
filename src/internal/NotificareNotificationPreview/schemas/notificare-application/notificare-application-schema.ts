import { z } from 'zod';

export const notificareApplicationSchema = z.object({
  appName: z.string().nonempty('App name is mandatory'),
  appIcon: z.string().url('The app icon should be a valid URL'),
  appDomain: z.string().nonempty('App domain is mandatory'),
});

export type NotificareApplicationSchema = z.infer<typeof notificareApplicationSchema>;
