import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const passbookNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.Passbook'),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.PKPass', {
          message: "Content object should be of type 're.notifica.content.PKPass'",
        }),
        data: z
          .string({ message: 'Content object data is required and should be a string' })
          .url('Content object data should be a valid URL'),
      }),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(baseNotificationSchema);
