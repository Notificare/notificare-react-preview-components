import { z } from 'zod';

// Actions schema
const actionSchema = z.object({
  _id: z.string(),
  type: z.string(),
  label: z.string().optional(),
  target: z.string().optional(),
  camera: z.boolean().optional(),
  keyboard: z.boolean().optional(),
});

// Attachments schema
const attachmentSchema = z.object({
  mimeType: z.string(),
  uri: z.string().url(),
});

// Main schema for every type
export const basePushMessageSchema = z.discriminatedUnion('type', [
  // Text Alert
  z.object({
    type: z.literal('re.notifica.notification.Alert'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Webview
  z.object({
    type: z.literal('re.notifica.notification.WebView'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.HTML'),
        data: z.string(),
      }),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // URL
  z.object({
    type: z.literal('re.notifica.notification.URL'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.URL'),
        data: z.string().url(),
      }),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // In App Browser
  z.object({
    type: z.literal('re.notifica.notification.InAppBrowser'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.URL'),
        data: z.string().url(),
      }),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Image
  z.object({
    type: z.literal('re.notifica.notification.Image'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.object({
        type: z.enum([
          're.notifica.content.PNG',
          're.notifica.content.JPEG',
          're.notifica.content.GIF',
        ]),
        data: z.string().url(),
      }),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Map
  z.object({
    type: z.literal('re.notifica.notification.Map'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.Marker'),
        data: z.object({
          title: z.string(),
          description: z.string(),
          latitude: z.number().min(-90).max(90), // Valid limits for latitude
          longitude: z.number().min(-180).max(180), // Valid limits for longitude
        }),
      }),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Rate
  z.object({
    type: z.literal('re.notifica.notification.Rate'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z
      .array(
        z.object({
          type: z.string(),
          data: z.unknown(),
        }),
      )
      .optional(),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Passbook
  z.object({
    type: z.literal('re.notifica.notification.Passbook'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.object({
        type: z.literal('re.notifica.content.PKPass'),
        data: z.string().url(),
      }),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Video
  z.object({
    type: z.literal('re.notifica.notification.Video'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.union([
        z.object({
          type: z.enum(['re.notifica.content.YouTube', 're.notifica.content.Vimeo']),
          data: z.string().nonempty(),
        }),
        z.object({
          type: z.literal('re.notifica.content.HTML5Video'),
          data: z.string().url().nonempty(),
        }),
      ]),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),

  // Store
  z.object({
    type: z.literal('re.notifica.notification.Store'),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    message: z.string(),
    content: z.array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.enum([
            're.notifica.content.GooglePlayDetails',
            're.notifica.content.GooglePlayDeveloper',
            're.notifica.content.GooglePlayCollection',
            're.notifica.content.GooglePlaySearch',
            're.notifica.content.AppGalleryDetails',
            're.notifica.content.AppGallerySearch',
          ]),
          data: z.string().nonempty(),
        }),
        z.object({
          type: z.literal('re.notifica.content.AppStore'),
          data: z.object({
            identifier: z.string(),
            campaignToken: z.string().optional(),
            affiliateToken: z.string().optional(),
            providerToken: z.string().optional(),
          }),
        }),
      ]),
    ),
    actions: z.array(actionSchema).optional(),
    attachments: z.array(attachmentSchema).optional(),
  }),
]);

export type BasePushMessage = z.infer<typeof basePushMessageSchema>;
