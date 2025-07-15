import { z } from 'zod';

export const BannerSchema = z.object({
  type: z.literal('re.notifica.inappmessage.Banner'),
  title: z
    .string({ message: "Property 'title' is required and should be a string" })
    .max(256, "Property 'title' cannot contain more than 256 characters")
    .nonempty("Property 'title' cannot be empty"),
  message: z
    .string({ message: "Property 'message' is required and should be a string" })
    .max(256, "Property 'message' cannot contain more than 256 characters")
    .nonempty("Property 'message' cannot be empty"),
  image: z
    .string({ message: "Property 'image' should be a string" })
    .url("Property 'image' should be a valid URL")
    .optional(),
});
