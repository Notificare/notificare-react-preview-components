import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const storeNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.Store'),
    content: z.array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('re.notifica.content.AppStore'),
          data: z.object(
            {
              identifier: z.string({
                message:
                  "Content object data property 'identifier' is mandatory and should be a string",
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
            },
            {
              message:
                "AppStore content object data is required and must be an object with 'identifier' (mandatory), 'campaignToken', 'affiliateToken', or 'providerToken'",
            },
          ),
        }),

        z.object({
          type: z.enum([
            're.notifica.content.GooglePlayDetails',
            're.notifica.content.GooglePlayDeveloper',
            're.notifica.content.GooglePlayCollection',
            're.notifica.content.GooglePlaySearch',
            're.notifica.content.AppGalleryDetails',
            're.notifica.content.AppGallerySearch',
          ]),
          data: z
            .string({
              message:
                'GooglePlay and AppGallery content object data is required and must be a string',
            })
            .nonempty('GooglePlay and AppGallery content object data cannot be empty'),
        }),
      ]),
      { message: "The notification must be content-rich. Property 'content' is required" },
    ),
  })
  .merge(baseNotificationSchema);
