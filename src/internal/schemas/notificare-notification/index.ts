import { z } from 'zod';
import { NoneSchema } from '~/internal/schemas/notificare-notification/variants/none';
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
  ImageSchema,
  InAppBrowserSchema,
  MapSchema,
  NoneSchema,
  PassbookSchema,
  RateSchema,
  StoreSchema,
  UrlSchema,
  VideoSchema,
  WebViewSchema,
]);

export type VerifiedNotification = z.infer<typeof NotificationSchema>;

export type NotificationType = VerifiedNotification['type'];
