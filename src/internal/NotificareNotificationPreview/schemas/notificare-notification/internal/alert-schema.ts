import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const alertSchema = z.object({
  _id: z.string({ message: "Property '_id' should be a string" }),
  time: z.string({ message: "Property 'time' should be a string" }),
  type: z.literal('re.notifica.notification.Alert'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
