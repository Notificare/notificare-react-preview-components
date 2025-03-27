import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const rateSchema = z.object({
  type: z.literal('re.notifica.notification.Rate'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  content: z
    .array(
      z.object({
        type: z.string({ message: 'Content object type should be a string' }),
        data: z.unknown(),
      }),
    )
    .optional(),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
