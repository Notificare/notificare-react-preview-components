import { z } from 'zod';
import { BaseSchema } from '../base';

export const UrlResolverSchema = z
  .object({
    type: z.literal('re.notifica.notification.URLResolver'),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.URL', {
          message: "Content object should be of type 're.notifica.content.URL'",
        }),
        data: z.string({ message: 'Content object data is required and should be a string' }),
      }),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(BaseSchema);
