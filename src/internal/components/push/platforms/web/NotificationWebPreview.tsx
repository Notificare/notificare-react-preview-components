import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import {
  NotificationPreviewStateWebDesktop,
  NotificationPreviewStateWebMobile,
} from '~/internal/components/push/notification-preview-state';
import { AndroidPhoneBackground } from '~/internal/components/shared/AndroidPhoneBackground/AndroidPhoneBackground';
import { IOSPhoneBackground } from '~/internal/components/shared/IOSPhoneBackground/IOSPhoneBackground';
import { VerifiedNotification, NotificationType } from '~/internal/schemas/notificare-notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { WebMobileAppUINotification } from './app-ui/mobile/WebMobileAppUINotification';
import { WebMacOSNotification } from './lockscreen/WebMacOSNotification';

export function NotificationWebPreview({
  notification,
  previewState,
  onError,
}: NotificationWebPreviewProps) {
  const intl = useIntl();

  useEffect(
    function handleInvalidPreviewError() {
      switch (previewState.formFactor) {
        case 'phone':
          switch (previewState.displayMode) {
            case 'lockscreen':
            case 'lockscreen-expanded':
              onError(
                intl.formatMessage({
                  id: 'preview.error.notSupportedPreviewVariant',
                  defaultMessage: PUSH_TRANSLATIONS['preview.error.notSupportedPreviewVariant'],
                }),
              );
              break;

            case 'app-ui':
              switch (notification.type) {
                case 're.notifica.notification.InAppBrowser':
                case 're.notifica.notification.Rate':
                case 're.notifica.notification.Store':
                case 're.notifica.notification.Passbook':
                case 're.notifica.notification.None':
                case 're.notifica.notification.URLScheme':
                  onError(
                    intl.formatMessage(
                      {
                        id: 'preview.error.notSupportedNotificationTypePreviewVariant',
                        defaultMessage:
                          PUSH_TRANSLATIONS[
                            'preview.error.notSupportedNotificationTypePreviewVariant'
                          ],
                      },
                      { notificationType: notification.type },
                    ),
                  );
                  break;
              }
          }
      }
    },
    [previewState, notification.type],
  );

  switch (previewState.formFactor) {
    case 'phone':
      switch (previewState.displayMode) {
        case 'app-ui':
          switch (notification.type) {
            case 're.notifica.notification.Alert':
            case 're.notifica.notification.WebView':
            case 're.notifica.notification.URL':
            case 're.notifica.notification.Image':
            case 're.notifica.notification.Map':
            case 're.notifica.notification.Video':
              switch (previewState.os) {
                case 'android':
                  return (
                    <AndroidPhoneBackground theme={getTheme(notification.type)}>
                      <WebMobileAppUINotification notification={notification} onError={onError} />
                    </AndroidPhoneBackground>
                  );

                case 'ios':
                  return (
                    <IOSPhoneBackground theme={getTheme(notification.type)}>
                      <WebMobileAppUINotification notification={notification} onError={onError} />
                    </IOSPhoneBackground>
                  );
              }
          }
      }
      break;

    case 'desktop':
      switch (previewState.os) {
        case 'macos':
          return <WebMacOSNotification key={notification.message} notification={notification} />;
      }
  }
}

export interface NotificationWebPreviewProps {
  notification: VerifiedNotification;
  previewState: NotificationPreviewStateWebDesktop | NotificationPreviewStateWebMobile;
  onError: (message: string) => void;
}

function getTheme(notificationType: NotificationType) {
  switch (notificationType) {
    case 're.notifica.notification.Alert':
    case 're.notifica.notification.Map':
    case 're.notifica.notification.WebView':
    case 're.notifica.notification.URL':
    case 're.notifica.notification.Video':
    case 're.notifica.notification.Image':
      return 'dark';

    default:
      return 'light';
  }
}
