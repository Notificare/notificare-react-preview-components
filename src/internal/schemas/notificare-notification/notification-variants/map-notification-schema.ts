import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const mapNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.Map'),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.Marker', {
          message: "Content objects should be of type 're.notifica.content.Marker'",
        }),
        data: z.object({
          title: z.string({
            message: "Content object data property 'title' is required and should be a string",
          }),
          description: z.string({
            message: "Content object data property 'description' is required should be a string",
          }),
          latitude: z
            .number({
              message: "Content object data property 'latitude' is required and should be a number",
            })
            .min(-90, "Content object data property 'latitude' should be a minimum of -90")
            .max(90, "Content object data property 'latitude' should be a maximum of 90"),
          longitude: z
            .number({
              message:
                "Content object data property 'longitude' is required and should be a number",
            })
            .min(-180, "Content object data property 'longitude' must be at least -180")
            .max(180, "Content object data property 'longitude' must be at most 180"),
        }),
      }),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(baseNotificationSchema);
