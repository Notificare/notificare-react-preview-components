import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useLocalisationLoader } from '~/components/NotificareNotificationPreview/hooks/localisation-loader';
import { NotificationPreviewWrapper } from '~/internal/components/push/preview-wrapper/NotificationPreviewWrapper';
import { NotificationValidationError } from '~/internal/components/push/validation-error/NotificationValidationError';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { OptionsProvider } from '~/internal/context/options';
import { NotificationSchema } from '~/internal/schemas/notificare-notification';
import { MESSAGES, NotificarePushTranslationKey } from '~/locales/push/en';
import { NotificareNotification, NotificareNotificationPreviewVariant } from '~/models';
import { NotificareNotificationPreviewLocale } from '~/models/push/notificare-notification-preview-language';

import '~/preset.css';

/**
 * Component that displays a notification preview for different platforms.
 *
 * @param {NotificareNotification} notification - The notification to be displayed in the preview.
 * @param {string} applicationId - The unique identifier of a Notificare application (optional).
 * @param {boolean} [showControls] - Whether the controls should be shown (optional). It's true by default.
 * @param {NotificareNotificationPreviewVariant} variant - The variant of the notification preview (optional). It's 'android-lockscreen' by default.
 * @param {string} [serviceKey] - A service key provided by a Notificare admin.
 * @param {string} [googleMapsAPIKey] - A Google Maps API key (optional).
 * @param {string} [locale] - The language/region code for the UI (optional). It's 'en-GB' by default.
 * @param {string} [messages] - Set of custom messages to replace the translations used (optional).
 */
export function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
  serviceKey,
  googleMapsAPIKey,
  locale = 'en-GB',
  messages,
}: NotificareNotificationPreviewProps) {
  const localisation = useLocalisationLoader({ locale, messages });

  const notificationResult = useMemo(() => {
    return NotificationSchema.safeParse(notification);
  }, [notification]);

  return (
    <div className="notificare">
      {localisation.status === 'success' && (
        <IntlProvider
          locale={localisation.data.locale}
          defaultLocale="en-GB"
          messages={localisation.data.messages}
        >
          <OptionsProvider serviceKey={serviceKey} googleMapsAPIKey={googleMapsAPIKey}>
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

      {localisation.status === 'error' && (
        <IntlProvider locale="en-GB" messages={MESSAGES}>
          <UnavailablePreview message={localisation.error.message} />
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
  googleMapsAPIKey?: string;
  locale?: NotificareNotificationPreviewLocale;
  messages?: Partial<Record<NotificarePushTranslationKey, string>>;
}
