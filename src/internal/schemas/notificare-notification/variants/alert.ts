import { z } from 'zod';
import { BaseSchema } from '../base';

export const AlertSchema = z
  .object({
    type: z.literal('re.notifica.notification.Alert'),
  })
  .merge(BaseSchema);
