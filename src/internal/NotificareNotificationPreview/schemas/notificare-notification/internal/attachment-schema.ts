import { z } from 'zod';

export const attachmentSchema = z.object({
  mimeType: z.string({ message: "Attachment property 'mimeType' should be a string" }),
  uri: z
    .string({ message: "Attachment property 'uri' should be a string" })
    .url("Attachment 'uri' property should be a valid URL"),
});
