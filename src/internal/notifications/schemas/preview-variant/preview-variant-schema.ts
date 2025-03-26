import { z } from 'zod';

// variant name structure -> <platform>-<
export const previewVariantSchema = z.enum([
  'android-lockscreen',
  'android-lockscreen_expanded',
  'android-app_ui',
  'ios-lockscreen',
  'ios-lockscreen_expanded',
  'ios-app_ui',
  'web-desktop',
  'web-ios_app_ui',
  'web-android_app_ui',
]);

export type PreviewVariant = z.infer<typeof previewVariantSchema>;
