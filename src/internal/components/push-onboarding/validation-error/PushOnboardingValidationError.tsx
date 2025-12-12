import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { ZodIssue } from 'zod';
import { UnavailablePreview } from '~/internal/components/shared';
import { PUSH_ONBOARDING_TRANSLATIONS } from '~/locales/push-onboarding/en';

export function PushOnboardingValidationError({ errors }: OnboardingValidationErrorProps) {
  const intl = useIntl();

  useEffect(
    function handleValidationErrors() {
      logErrors(errors);
    },
    [errors],
  );

  return (
    <UnavailablePreview
      message={intl.formatMessage({
        id: 'preview.error.invalidPushOnboardingApplicationInfo',
        defaultMessage:
          PUSH_ONBOARDING_TRANSLATIONS['preview.error.invalidPushOnboardingApplicationInfo'],
      })}
      showConsoleWarning={true}
    />
  );
}

export interface OnboardingValidationErrorProps {
  errors: ZodIssue[];
}

function logErrors(errors: ZodIssue[]) {
  const messages = errors.map(({ message }) => message);
  console.error(`Push onboarding preview errors:\n\n${messages.join('\n')}`);
}
