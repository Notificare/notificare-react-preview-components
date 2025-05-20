import { z } from 'zod';

export const baseNotificationSchema = z.object({
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' is required and should be a string" })
    .nonempty("Property 'message' cannot be empty"),
  actions: z
    .array(
      z.object({
        type: z.string({ message: "Action property 'type' is required and should be a string" }),
        label: z.string({ message: "Action property 'label' is required and should be a string" }),
        target: z.string({ message: "Action property 'target' should be a string" }).optional(),
        camera: z.boolean({ message: "Action property 'camera' should be a boolean" }).optional(),
        keyboard: z
          .boolean({ message: "Action property 'keyboard' should be a boolean" })
          .optional(),
      }),
    )
    .optional(),
  attachments: z
    .array(
      z.object({
        mimeType: z.string({
          message: "Attachment property 'mimeType' is required and should be a string",
        }),
        uri: z
          .string({ message: "Attachment property 'uri' is required and should be a string" })
          .url("Attachment property 'uri' should be a valid URL"),
      }),
    )
    .optional(),
});
