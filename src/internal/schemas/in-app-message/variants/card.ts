import { z } from 'zod';

export const CardSchema = z.object({
  type: z.literal('re.notifica.inappmessage.Card'),
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
  primaryAction: z.object(
    {
      label: z
        .string({ message: "Primary action property 'label' is required and should be a string" })
        .max(32, "Primary action property 'label' cannot contain more than 32 characters")
        .nonempty("Primary action property 'label' cannot be empty"),
      destructive: z
        .boolean({ message: "Primary action property 'destructive' should be a boolean" })
        .optional(),
    },
    { message: "A Card must contain a primary action. Property 'primaryAction' is required" },
  ),
  secondaryAction: z
    .object({
      label: z
        .string({ message: "Secondary action property 'label' is required and should be a string" })
        .max(32, "Secondary action property 'label' cannot contain more than 32 characters")
        .nonempty("Secondary action property 'label' cannot be empty"),
      destructive: z
        .boolean({ message: "Secondary action property 'destructive' should be a boolean" })
        .optional(),
    })
    .optional(),
});
