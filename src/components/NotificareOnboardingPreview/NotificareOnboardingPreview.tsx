import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { OnboardingPreview } from '~/internal/components/onboarding/preview/OnboardingPreview';
import { OnboardingValidationError } from '~/internal/components/onboarding/validation-error/OnboardingValidationError';
import { UnavailablePreview } from '~/internal/components/shared';
import { useLocalizationLoader } from '~/internal/hooks';
import { OnboardingApplicationInfoSchema } from '~/internal/schemas/onboarding';
import { NotificareOnboardingTranslationKey } from '~/locales';
import { ONBOARDING_TRANSLATIONS } from '~/locales/onboarding/en';
import { NotificareOnboardingApplicationInfo } from '~/models/onboarding/notificare-onboarding-application-info';
import { NotificareOnboardingPermissionStatus } from '~/models/onboarding/notificare-onboarding-permission-status';

import '~/preset.css';

/**
 * Component that displays an onboarding preview depending on the launch configurations of an app.
 *
 * @param {string} [applicationId] - The unique identifier of a Notificare application (optional).
 * @param {string} [permissionStatus] - The remote notification permission status (optional). It's 'default' by default.
 * @param {string} applicationInfo - Partial information from a Notificare application.
 * @param {string} [serviceKey] - A service key provided by a Notificare admin (optional).
 * @param {string} [locale] - The language/region code for the UI (optional). It's 'en-US' by default.
 * @param {string} [translations] - A set of custom translations to override the default ones (optional).
 */
export function NotificareOnboardingPreview({
  applicationId,
  permissionStatus = 'default',
  applicationInfo,
  serviceKey,
  locale = 'en-US',
  translations,
}: NotificareOnboardingPreviewProps) {
  const localization = useLocalizationLoader({
    locale,
    customTranslations: translations,
    type: 'onboarding',
  });

  const onboardingApplicationInfoResult = useMemo(
    () => OnboardingApplicationInfoSchema.safeParse(applicationInfo),
    [applicationInfo],
  );

  return (
    <div className="notificare">
      {localization.status === 'success' && (
        <IntlProvider
          locale={localization.data.locale}
          defaultLocale="en-US"
          messages={localization.data.translations}
        >
          {onboardingApplicationInfoResult.success ? (
            <div className="notificare__push__preview">
              <OnboardingPreview
                applicationId={applicationId}
                permissionStatus={permissionStatus}
                applicationInfo={applicationInfo}
                serviceKey={serviceKey}
              />
            </div>
          ) : (
            <OnboardingValidationError errors={onboardingApplicationInfoResult.error.errors} />
          )}
        </IntlProvider>
      )}

      {localization.status === 'error' && (
        <IntlProvider locale="en-US" messages={ONBOARDING_TRANSLATIONS}>
          <UnavailablePreview message={localization.error.message} />
        </IntlProvider>
      )}
    </div>
  );
}

export interface NotificareOnboardingPreviewProps {
  applicationId?: string;
  permissionStatus?: NotificareOnboardingPermissionStatus;
  applicationInfo: NotificareOnboardingApplicationInfo;
  serviceKey?: string;
  locale?: string;
  translations?: Partial<Record<NotificareOnboardingTranslationKey, string>>;
}
