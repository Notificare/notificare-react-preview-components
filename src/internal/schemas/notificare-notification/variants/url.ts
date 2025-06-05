import { z } from 'zod';
import { BaseSchema } from '../base';

export const UrlSchema = z
  .object({
    type: z.literal('re.notifica.notification.URL'),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.URL', {
          message: "Content object should be of type 're.notifica.content.URL'",
        }),
        data: z
          .string({ message: 'Content object data is required and should be a string' })
          .url('Content object data should be a valid URL'),
      }),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(BaseSchema);
