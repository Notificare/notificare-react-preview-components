import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const mapSchema = z.object({
  _id: z.string(),
  time: z.string(),
  type: z.literal('re.notifica.notification.Map'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  content: z.array(
    z.object({
      type: z.literal('re.notifica.content.Marker', {
        message: "Content objects should be of type 're.notifica.content.Marker'",
      }),
      data: z.object({
        title: z.string({ message: "Content object data property 'title' should be a string" }),
        description: z.string({
          message: "Content object data property 'description' should be a string",
        }),
        latitude: z
          .number({ message: "Content object data property 'latitude' should be a number" })
          .min(-90, "Content object data property 'latitude' should be a minimum of -90")
          .max(90, "Content object data property 'latitude' should be a maximum of 90"),
        longitude: z
          .number({ message: "Content object data property 'longitude' should be a number" })
          .min(-180, "Content object data property 'longitude' must be at least -180")
          .max(180, "Content object data property 'longitude' must be at most 180"),
      }),
    }),
  ),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
