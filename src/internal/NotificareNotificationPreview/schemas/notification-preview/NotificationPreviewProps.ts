import { z } from 'zod';
import { notificareApplicationSchema } from '../notificare-application/notificare-application-schema';
import { notificareNotificationSchema } from '../notificare-notification/notificare-notification-schema';

// Creating the base schema
const baseSchema = z.object({
  platform: z.enum(['android', 'ios', 'web']),
  showControls: z.boolean().default(false).optional(),
  notification: notificareNotificationSchema,
  application: notificareApplicationSchema,
});

export const notificationPreviewPropsSchema = baseSchema
  .extend({
    mobileVariant: z.enum(['lockscreen', 'lockscreen-expanded', 'app-ui']).optional(),
    desktopOS: z.enum(['macOS']).optional(),
    webDevice: z.enum(['desktop', 'iphone', 'android']).optional(),
  })
  .refine(
    (data) => {
      // If platform is not "web", mobileVariant is required
      return !(data.platform !== 'web' && !data.mobileVariant);
    },
    {
      message: "mobileVariant is required when platform is 'android' or 'ios'",
      path: ['mobileVariant'],
    },
  )
  .refine(
    (data) => {
      // If platform is "web", webDevice is required
      return !(data.platform === 'web' && !data.webDevice);
    },
    {
      message: "webDevice is required when platform is 'web'",
      path: ['webDevice'],
    },
  )
  .refine(
    (data) => {
      // If platform is "web" and webDevice is "iphone" or "android", mobileVariant is required
      return !(
        data.platform === 'web' &&
        (data.webDevice === 'iphone' || data.webDevice === 'android') &&
        !data.mobileVariant
      );
    },
    {
      message: "mobileVariant is required when webDevice is 'iphone' or 'android'",
      path: ['mobileVariant'],
    },
  )
  .refine(
    (data) => {
      // If platform is "web" and webDevice is "desktop", desktopOS is required
      return !(data.platform === 'web' && data.webDevice === 'desktop' && !data.desktopOS);
    },
    {
      message: "desktopOS is required when webDevice is 'desktop'",
      path: ['desktopOS'],
    },
  )
  .refine(
    (data) => {
      // If platform is "web" and webDevice is "iphone" or "android", desktopOS should not be provided
      return !(
        data.platform === 'web' &&
        (data.webDevice === 'iphone' || data.webDevice === 'android') &&
        data.desktopOS
      );
    },
    {
      message: "desktopOS should not be provided when webDevice is 'iphone' or 'android'",
      path: ['desktopOS'],
    },
  )
  .refine(
    (data) => {
      // If platform is "web" and webDevice is "desktop", mobileVariant should not be provided
      return !(data.platform === 'web' && data.webDevice === 'desktop' && data.mobileVariant);
    },
    {
      message: "mobileVariant should not be provided when webDevice is 'desktop'",
      path: ['mobileVariant'],
    },
  );

export type NotificationPreviewProps = z.infer<typeof notificationPreviewPropsSchema>;
