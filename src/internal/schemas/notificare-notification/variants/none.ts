import { z } from 'zod';
import { BaseSchema } from '../base';

export const NoneSchema = z
  .object({
    type: z.literal('re.notifica.notification.None'),
  })
  .merge(BaseSchema);
