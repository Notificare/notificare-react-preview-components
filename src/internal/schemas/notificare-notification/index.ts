import { z } from 'zod';
import { AlertSchema } from './variants/alert';
import { ImageSchema } from './variants/image';
import { InAppBrowserSchema } from './variants/in-app-browser';
import { MapSchema } from './variants/map';
import { PassbookSchema } from './variants/passbook';
import { RateSchema } from './variants/rate';
import { StoreSchema } from './variants/store';
import { UrlSchema } from './variants/url';
import { VideoSchema } from './variants/video';
import { WebViewSchema } from './variants/web-view';

export const NotificationSchema = z.discriminatedUnion('type', [
  AlertSchema,
  WebViewSchema,
  UrlSchema,
  InAppBrowserSchema,
  ImageSchema,
  MapSchema,
  RateSchema,
  PassbookSchema,
  VideoSchema,
  StoreSchema,
]);

// TODO: This isn't the actual notification schema. This is more of a "verified notification".
export type NotificareNotificationSchema = z.infer<typeof NotificationSchema>;

export type NotificareNotificationType = NotificareNotificationSchema['type'];
