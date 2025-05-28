import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const videoNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.Video'),
    content: z
      .array(
        z.object({
          type: z.string({ message: 'Content object type is required and should be a string' }),
          data: z
            .string({ message: 'Content object data is required and should be a string' })
            .nonempty('Content object data cannot be empty'),
        }),
        { message: "The notification must be content-rich. Property 'content' is required" },
      )
      .superRefine((contentArray, ctx) => {
        contentArray.forEach((content, index) => {
          const validTypes = [
            're.notifica.content.YouTube',
            're.notifica.content.Vimeo',
            're.notifica.content.HTML5Video',
          ];

          if (!validTypes.includes(content.type)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message:
                "Content object should be of type 're.notifica.content.YouTube', 're.notifica.content.Vimeo' or 're.notifica.content.HTML5Video'",
              path: ['content', index, 'type'],
            });
          }

          // HTML5Video content object data validation
          if (content.type === 're.notifica.content.HTML5Video') {
            try {
              new URL(content.data);
            } catch {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'For a HTML5Video, content object data should be a valid URL',
                path: ['content', index, 'data'],
              });
            }
          }
        });
      }),
  })
  .merge(baseNotificationSchema);
