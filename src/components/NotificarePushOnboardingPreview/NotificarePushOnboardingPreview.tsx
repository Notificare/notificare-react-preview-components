import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { PushOnboardingPreview } from '~/internal/components/push-onboarding/preview/PushOnboardingPreview';
import { PushOnboardingValidationError } from '~/internal/components/push-onboarding/validation-error/PushOnboardingValidationError';
import { UnavailablePreview } from '~/internal/components/shared';
import { useLocalizationLoader } from '~/internal/hooks';
import { PushOnboardingApplicationInfoSchema } from '~/internal/schemas/push-onboarding';
import { NotificarePushOnboardingTranslationKey } from '~/locales';
import { PUSH_ONBOARDING_TRANSLATIONS } from '~/locales/push-onboarding/en';
import { NotificarePushOnboardingApplicationInfo } from '~/models/push-onboarding/notificare-push-onboarding-application-info';
import { NotificarePushOnboardingPermissionStatus } from '~/models/push-onboarding/notificare-push-onboarding-permission-status';

import '~/preset.css';

/**
 * Component that displays a push onboarding preview depending on the launch configurations of an app.
 *
 * @param {string} [applicationId] - The unique identifier of a Notificare application (optional).
 * @param {string} [permissionStatus] - The remote notification permission status (optional). It's 'default' by default.
 * @param {string} applicationInfo - Partial information from a Notificare application.
 * @param {string} [serviceKey] - A service key provided by a Notificare admin (optional).
 * @param {string} [locale] - The language/region code for the UI (optional). It's 'en-US' by default.
 * @param {string} [translations] - A set of custom translations to override the default ones (optional).
 */
export function NotificarePushOnboardingPreview({
  applicationId,
  permissionStatus = 'default',
  applicationInfo,
  serviceKey,
  locale = 'en-US',
  translations,
}: NotificarePushOnboardingPreviewProps) {
  const localization = useLocalizationLoader({
    locale,
    customTranslations: translations,
    type: 'onboarding',
  });

  const onboardingApplicationInfoResult = useMemo(
    () => PushOnboardingApplicationInfoSchema.safeParse(applicationInfo),
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
              <PushOnboardingPreview
                applicationId={applicationId}
                permissionStatus={permissionStatus}
                applicationInfo={applicationInfo}
                serviceKey={serviceKey}
              />
            </div>
          ) : (
            <PushOnboardingValidationError errors={onboardingApplicationInfoResult.error.errors} />
          )}
        </IntlProvider>
      )}

      {localization.status === 'error' && (
        <IntlProvider locale="en-US" messages={PUSH_ONBOARDING_TRANSLATIONS}>
          <UnavailablePreview message={localization.error.message} />
        </IntlProvider>
      )}
    </div>
  );
}

export interface NotificarePushOnboardingPreviewProps {
  applicationId?: string;
  permissionStatus?: NotificarePushOnboardingPermissionStatus;
  applicationInfo: NotificarePushOnboardingApplicationInfo;
  serviceKey?: string;
  locale?: string;
  translations?: Partial<Record<NotificarePushOnboardingTranslationKey, string>>;
}
