import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const inAppBrowserSchema = z.object({
  _id: z.string({ message: "Property '_id' should be a string" }),
  time: z.string({ message: "Property 'time' should be a string" }),
  type: z.literal('re.notifica.notification.InAppBrowser'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  content: z.array(
    z.object({
      type: z.literal('re.notifica.content.URL', {
        message: "Content object should be of type 're.notifica.content.URL'",
      }),
      data: z
        .string({ message: 'Content object data should be a string' })
        .url('Content object data should be a valid URL'),
    }),
  ),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
