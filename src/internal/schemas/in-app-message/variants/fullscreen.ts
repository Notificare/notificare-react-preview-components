import { z } from 'zod';

export const FullscreenSchema = z.object({
  type: z.literal('re.notifica.inappmessage.Fullscreen'),
  title: z
    .string({ message: "Property 'title' should be a string" })
    .max(256, "Property 'title' cannot contain more than 256 characters")
    .optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .max(256, "Property 'message' cannot contain more than 256 characters")
    .optional(),
  image: z
    .string({ message: "Property 'image' is required and should be a string" })
    .url("Property 'image' should be a valid URL"),
});
