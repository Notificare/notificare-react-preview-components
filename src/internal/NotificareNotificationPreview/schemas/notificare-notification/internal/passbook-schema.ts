import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const passbookSchema = z.object({
  _id: z.string(),
  time: z.string(),
  type: z.literal('re.notifica.notification.Passbook'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  content: z.array(
    z.object({
      type: z.literal('re.notifica.content.PKPass', {
        message: "Content object should be of type 're.notifica.content.PKPass'",
      }),
      data: z
        .string({ message: 'Content object data should be a string' })
        .url('Content object data should be a valid URL'),
    }),
  ),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
