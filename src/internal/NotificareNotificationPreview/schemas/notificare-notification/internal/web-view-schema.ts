import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const webViewSchema = z.object({
  type: z.literal('re.notifica.notification.WebView'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty('Message is mandatory'),
  content: z.array(
    z.object({
      type: z.literal('re.notifica.content.HTML', {
        message: "Content object should be of type 're.notifica.content.HTML'",
      }),
      data: z.string({ message: 'Content data should be a string containing the HTML markup' }),
    }),
  ),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
