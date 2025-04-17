import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const videoSchema = z.object({
  type: z.literal('re.notifica.notification.Video'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  content: z
    .array(
      z.object({
        type: z.string({ message: 'Content object type should be a string' }),
        data: z.string().nonempty('Content object data is mandatory'),
      }),
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
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
