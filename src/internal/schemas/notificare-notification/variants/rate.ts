import { z } from 'zod';
import { BaseSchema } from '../base';

export const RateSchema = z
  .object({
    type: z.literal('re.notifica.notification.Rate'),
  })
  .merge(BaseSchema);
