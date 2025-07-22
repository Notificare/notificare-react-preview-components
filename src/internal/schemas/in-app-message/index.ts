import { z } from 'zod';
import { BannerSchema } from '~/internal/schemas/in-app-message/variants/banner';
import { CardSchema } from '~/internal/schemas/in-app-message/variants/card';
import { FullscreenSchema } from '~/internal/schemas/in-app-message/variants/fullscreen';

export const InAppMessageSchema = z.discriminatedUnion('type', [
  BannerSchema,
  CardSchema,
  FullscreenSchema,
]);

export type VerifiedInAppMessage = z.infer<typeof InAppMessageSchema>;
