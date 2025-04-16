import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const imageSchema = z.object({
  _id: z.string({ message: "Property '_id' should be a string" }),
  time: z.string({ message: "Property 'time' should be a string" }),
  type: z.literal('re.notifica.notification.Image'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
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
  ),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
