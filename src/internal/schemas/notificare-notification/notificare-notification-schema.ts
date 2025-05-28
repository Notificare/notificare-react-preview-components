import { z } from 'zod';
import { alertNotificationSchema } from './notification-variants/alert-notification-schema';
import { imageNotificationSchema } from './notification-variants/image-notification-schema';
import { inAppBrowserNotificationSchema } from './notification-variants/in-app-browser-notification-schema';
import { mapNotificationSchema } from './notification-variants/map-notification-schema';
import { passbookNotificationSchema } from './notification-variants/passbook-notification-schema';
import { rateNotificationSchema } from './notification-variants/rate-notification-schema';
import { storeNotificationSchema } from './notification-variants/store-notification-schema';
import { urlNotificationSchema } from './notification-variants/url-notification-schema';
import { videoNotificationSchema } from './notification-variants/video-notification-schema';
import { webViewNotificationSchema } from './notification-variants/web-view-notification-schema';

export const notificareNotificationSchema = z.discriminatedUnion('type', [
  alertNotificationSchema,
  webViewNotificationSchema,
  urlNotificationSchema,
  inAppBrowserNotificationSchema,
  imageNotificationSchema,
  mapNotificationSchema,
  rateNotificationSchema,
  passbookNotificationSchema,
  videoNotificationSchema,
  storeNotificationSchema,
]);

// TODO: This isn't the actual notification schema. This is more of a "verified notification".
export type NotificareNotificationSchema = z.infer<typeof notificareNotificationSchema>;
