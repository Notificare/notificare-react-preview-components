import { z } from 'zod';
import { baseNotificationSchema } from './base-notification-schema';

export const alertNotificationSchema = z
  .object({
    type: z.literal('re.notifica.notification.Alert'),
  })
  .merge(baseNotificationSchema);
