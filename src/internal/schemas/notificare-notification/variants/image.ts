import { z } from 'zod';
import { BaseSchema } from '../base';

export const ImageSchema = z
  .object({
    type: z.literal('re.notifica.notification.Image'),
    content: z.array(
      z.object({
        type: z.enum(
          ['re.notifica.content.PNG', 're.notifica.content.JPEG', 're.notifica.content.GIF'],
          {
            message:
              "Content objects should be of type 're.notifica.content.PNG', 're.notifica.content.JPEG' or 're.notifica.content.GIF'",
          },
        ),
        data: z
          .string({ message: 'Content objects data should be strings' })
          .url('Content objects data should be valid URLs'),
      }),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(BaseSchema);
