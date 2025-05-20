import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const rateNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.Rate'),
  })
  .merge(baseNotificationSchema);
