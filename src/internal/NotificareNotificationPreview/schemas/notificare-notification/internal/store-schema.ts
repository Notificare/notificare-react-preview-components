import { z } from 'zod';
import { actionSchema } from './action-schema';
import { attachmentSchema } from './attachment-schema';

export const storeSchema = z.object({
  _id: z.string({ message: "Property '_id' should be a string" }),
  time: z.string({ message: "Property 'time' should be a string" }),
  type: z.literal('re.notifica.notification.Store'),
  title: z.string({ message: "Property 'title' should be a string" }).optional(),
  subtitle: z.string({ message: "Property 'subtitle' should be a string" }).optional(),
  message: z
    .string({ message: "Property 'message' should be a string" })
    .nonempty("Property 'message' is mandatory"),
  content: z
    .array(
      z.object({
        type: z.string({ message: 'Content object type should be a string' }),
        data: z.union([
          z.string().nonempty('Content object data is mandatory'),
          z.object({
            identifier: z.string({
              message: "Content object data property 'identifier' should be a string",
            }),
            campaignToken: z
              .string({
                message: "Content object data property 'campaignToken' should be a string",
              })
              .optional(),
            affiliateToken: z
              .string({
                message: "Content object data property 'affiliateToken' should be a string",
              })
              .optional(),
            providerToken: z
              .string({
                message: "Content object data property 'providerToken' should be a string",
              })
              .optional(),
          }),
        ]),
      }),
    )
    .superRefine((contentArray, ctx) => {
      contentArray.forEach((content, index) => {
        const validTypes = [
          're.notifica.content.GooglePlayDetails',
          're.notifica.content.GooglePlayDeveloper',
          're.notifica.content.GooglePlayCollection',
          're.notifica.content.GooglePlaySearch',
          're.notifica.content.AppGalleryDetails',
          're.notifica.content.AppGallerySearch',
          're.notifica.content.AppStore',
        ];

        if (!validTypes.includes(content.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Content object type should be one of: 're.notifica.content.GooglePlayDetails', 're.notifica.content.GooglePlayDeveloper', 're.notifica.content.GooglePlayCollection', 're.notifica.content.GooglePlaySearch', 're.notifica.content.AppGalleryDetails', 're.notifica.content.AppGallerySearch', 're.notifica.content.AppStore'",
            path: ['content', index, 'type'],
          });
        }

        // App store content object data validation
        if (content.type === 're.notifica.content.AppStore' && typeof content.data !== 'object') {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "AppStore content object data must be an object with 'identifier' (mandatory), 'campaignToken', 'affiliateToken', or 'providerToken'",
            path: ['content', index, 'data'],
          });
        }

        // Google & AppGallery content object data validation
        if (content.type !== 're.notifica.content.AppStore' && typeof content.data !== 'string') {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'GooglePlay and AppGallery content object data must be a string',
            path: ['content', index, 'data'],
          });
        }
      });
    }),
  actions: z.array(actionSchema).optional(),
  attachments: z.array(attachmentSchema).optional(),
});
