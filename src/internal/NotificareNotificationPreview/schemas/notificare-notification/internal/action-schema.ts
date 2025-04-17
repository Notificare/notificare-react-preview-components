import { z } from 'zod';

export const actionSchema = z.object({
  type: z.string({ message: "Action property 'type' should be a string" }),
  label: z.string({ message: "Action property 'label' should be a string" }),
  target: z.string({ message: "Action property 'target' should be a string" }).optional(),
  camera: z.boolean({ message: "Action property 'camera' should be a boolean" }).optional(),
  keyboard: z.boolean({ message: "Action property 'keyboard' should be a boolean" }).optional(),
});
