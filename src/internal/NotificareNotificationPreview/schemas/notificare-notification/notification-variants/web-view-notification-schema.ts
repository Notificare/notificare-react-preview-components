import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const webViewNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.WebView'),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.HTML', {
          message: "Content object should be of type 're.notifica.content.HTML'",
        }),
        data: z.string({
          message: 'Content data is required and should be a string containing the HTML markup',
        }),
      }),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(baseNotificationSchema);
