import { z } from 'zod';

export const actionSchema = z.object({
  _id: z.string({ message: 'Action ID should be a string' }),
  type: z.string({ message: 'Action type should be a string' }),
  label: z.string({ message: 'Action label should be a string' }).optional(),
  target: z.string({ message: 'Action target should be a string' }).optional(),
  camera: z.boolean({ message: "Action 'camera' property should be a boolean" }).optional(),
  keyboard: z.boolean({ message: "Action 'keyboard' property should be a boolean" }).optional(),
});
