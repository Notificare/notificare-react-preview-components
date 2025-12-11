import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { ZodIssue } from 'zod';
import { UnavailablePreview } from '~/internal/components/shared';
import { ONBOARDING_TRANSLATIONS } from '~/locales/onboarding/en';

export function OnboardingValidationError({ errors }: OnboardingValidationErrorProps) {
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
        id: 'preview.error.invalidOnboardingApplicationInfo',
        defaultMessage: ONBOARDING_TRANSLATIONS['preview.error.invalidOnboardingApplicationInfo'],
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
  console.error(`Onboarding preview errors:\n\n${messages.join('\n')}`);
}
