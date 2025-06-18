import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { NotificationPreviewWrapper } from '~/internal/components/push/preview-wrapper/NotificationPreviewWrapper';
import { NotificationValidationError } from '~/internal/components/push/validation-error/NotificationValidationError';
import { OptionsProvider } from '~/internal/context/options';
import { NotificationSchema } from '~/internal/schemas/notificare-notification';
import { MESSAGES_EN } from '~/locales/push/en';
import { MESSAGES_PT } from '~/locales/push/pt';
import { NotificareNotification, NotificareNotificationPreviewVariant } from '~/models';

import '~/preset.css';
import { NotificareNotificationPreviewLanguage } from '~/models/push/notificare-notification-preview-language';

const MESSAGES: Record<string, Record<string, string>> = {
  en: MESSAGES_EN,
  pt: MESSAGES_PT,
};

/**
 * Component that displays a notification preview for different platforms.
 *
 * @param {NotificareNotification} notification - The notification to be displayed in the preview.
 * @param {string} applicationId - The unique identifier of a Notificare application (optional).
 * @param {boolean} [showControls] - Whether the controls should be shown (optional). It's true by default.
 * @param {NotificareNotificationPreviewVariant} variant - The variant of the notification preview (optional). It's 'android-lockscreen' by default.
 * @param {string} [serviceKey] - A service key provided by a Notificare admin.
 * @param {string} [googleMapsAPIKey] - A Google Maps API key (optional).
 * @param {string} [language] - The UI language (optional). It's 'en' by default.
 */
export function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
  serviceKey,
  googleMapsAPIKey,
  language = 'en',
}: NotificareNotificationPreviewProps) {
  const notificationResult = useMemo(() => {
    return NotificationSchema.safeParse(notification);
  }, [notification]);

  return (
    <div className="notificare">
      <IntlProvider locale={language} defaultLocale="en" messages={MESSAGES[language]}>
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
  language?: NotificareNotificationPreviewLanguage;
}
