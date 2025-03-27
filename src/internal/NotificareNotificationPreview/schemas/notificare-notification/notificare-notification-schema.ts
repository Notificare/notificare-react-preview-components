import { z } from 'zod';
import { alertSchema } from './internal/alert-schema';
import { imageSchema } from './internal/image-schema';
import { inAppBrowserSchema } from './internal/in-app-browser-schema';
import { mapSchema } from './internal/map-schema';
import { passbookSchema } from './internal/passbook-schema';
import { rateSchema } from './internal/rate-schema';
import { storeSchema } from './internal/store-schema';
import { urlSchema } from './internal/url-schema';
import { videoSchema } from './internal/video-schema';
import { webViewSchema } from './internal/web-view-schema';

export const notificareNotificationSchema = z.discriminatedUnion('type', [
  alertSchema,
  webViewSchema,
  urlSchema,
  inAppBrowserSchema,
  imageSchema,
  mapSchema,
  rateSchema,
  passbookSchema,
  videoSchema,
  storeSchema,
]);

export type NotificareNotificationSchema = z.infer<typeof notificareNotificationSchema>;
