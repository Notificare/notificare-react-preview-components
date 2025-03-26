import { z } from 'zod';

export const attachmentSchema = z.object({
  mimeType: z.string({ message: 'Attachment mime type should be a string' }),
  uri: z
    .string({ message: "Attachment 'uri' property should be a string" })
    .url("Attachment 'uri' property should be a valid URL"),
});
