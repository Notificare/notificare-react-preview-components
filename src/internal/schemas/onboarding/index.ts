import { z } from 'zod';

export const OnboardingApplicationInfoSchema = z.object({
  name: z.string({ message: "Application property 'name' should be a string" }).optional(),
  websitePushConfig: z.object({
    icon: z
      .string({ message: "Application Website Push config property 'icon' should be a string" })
      .optional(),
    launchConfig: z
      .object({
        applicationName: z
          .string({
            message: "Application Launch config property 'applicationName' should be a string",
          })
          .optional(),
        autoOnboardingOptions: z
          .object({
            message: z.string({
              message:
                "Auto (dialog) onboarding options property 'message' is required and should be a string",
            }),
            cancelButton: z.string({
              message:
                "Auto (dialog) onboarding options property 'cancelButton' is required and should be a string",
            }),
            acceptButton: z.string({
              message:
                "Auto (dialog) onboarding options property 'acceptButton' is required and should be a string",
            }),
          })
          .optional(),
        floatingButtonOptions: z
          .object({
            alignment: z.object({
              horizontal: z.enum(['start', 'end'], {
                errorMap: () => ({
                  message: "Floating button horizontal alignment should be 'start' or 'end'",
                }),
              }),
              vertical: z.enum(['top', 'bottom'], {
                errorMap: () => ({
                  message: "Floating button vertical alignment should be 'top' or 'bottom'",
                }),
              }),
            }),
            permissionTexts: z.object({
              default: z.string({
                message:
                  "Floating button permission texts property 'default' is required and should be a string",
              }),
              granted: z.string({
                message:
                  "Floating button permission texts property 'granted' is required and should be a string",
              }),
              denied: z.string({
                message:
                  "Floating button permission texts property 'denied' is required and should be a string",
              }),
            }),
          })
          .optional(),
      })
      .refine((data) => data.autoOnboardingOptions || data.floatingButtonOptions, {
        message:
          "Either 'floatingButtonOptions' or 'autoOnboardingOptions' must be present in the launch config options",
      }),
  }),
});
