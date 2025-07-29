import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { NotificationPreviewWrapper } from '~/internal/components/push/preview-wrapper/NotificationPreviewWrapper';
import { NotificationValidationError } from '~/internal/components/push/validation-error/NotificationValidationError';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { OptionsProvider } from '~/internal/context/options';
import { useLocalizationLoader } from '~/internal/hooks';
import { NotificationSchema } from '~/internal/schemas/notificare-notification';
import { NotificarePushTranslationKey } from '~/locales';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import {
  NotificareNotification,
  NotificareNotificationPreviewVariant,
  NotificareNotificationPreviewLocale,
} from '~/models';

import '~/preset.css';

/**
 * Component that displays a notification preview for different platforms.
 *
 * @param {NotificareNotification} notification - The notification to be displayed in the preview.
 * @param {string} applicationId - The unique identifier of a Notificare application (optional).
 * @param {boolean} [showControls] - Whether the controls should be shown (optional). It's true by default.
 * @param {NotificareNotificationPreviewVariant} variant - The variant of the notification preview (optional). It's 'android-lockscreen' by default.
 * @param {string} [serviceKey] - A service key provided by a Notificare admin.
 * @param {string} [googleMapsApiKey] - A Google Maps API key (optional).
 * @param {string} [locale] - The language/region code for the UI (optional). It's 'en-US' by default.
 * @param {string} [translations] - A set of custom translations to override the default ones (optional).
 */
export function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
  serviceKey,
  googleMapsApiKey,
  locale = 'en-US',
  translations,
}: NotificareNotificationPreviewProps) {
  const localization = useLocalizationLoader({ locale, translations, type: 'push' });

  const notificationResult = useMemo(() => {
    return NotificationSchema.safeParse(notification);
  }, [notification]);

  return (
    <div className="notificare">
      {localization.status === 'success' && (
        <IntlProvider
          locale={localization.data.locale}
          defaultLocale="en-US"
          messages={localization.data.translations}
        >
          <OptionsProvider serviceKey={serviceKey} googleMapsApiKey={googleMapsApiKey}>
            {notificationResult.success ? (
              <NotificationPreviewWrapper
                notification={notificationResult.data}
                applicationId={applicationId}
                showControls={showControls}
                variant={variant}
              />
            ) : (
              <NotificationValidationError errors={notificationResult.error.errors} />
            )}
          </OptionsProvider>
        </IntlProvider>
      )}

      {localization.status === 'error' && (
        <IntlProvider locale="en-US" messages={PUSH_TRANSLATIONS}>
          <UnavailablePreview message={localization.error.message} />
        </IntlProvider>
      )}
    </div>
  );
}

export interface NotificareNotificationPreviewProps {
  notification: NotificareNotification;
  applicationId?: string;
  showControls?: boolean;
  variant?: NotificareNotificationPreviewVariant;
  serviceKey: string;
  googleMapsApiKey?: string;
  locale?: NotificareNotificationPreviewLocale;
  translations?: Partial<Record<NotificarePushTranslationKey, string>>;
}
