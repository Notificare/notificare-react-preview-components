import { useIntl } from 'react-intl';
import {
  NotificationPreviewStateWebDesktop,
  NotificationPreviewStateWebMobile,
} from '~/internal/components/push/notification-preview-state';
import { AndroidPhoneBackground } from '~/internal/components/shared/AndroidPhoneBackground/AndroidPhoneBackground';
import { IOSPhoneBackground } from '~/internal/components/shared/IOSPhoneBackground/IOSPhoneBackground';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { useOptions } from '~/internal/context/options';
import {
  NotificareNotificationSchema,
  NotificareNotificationType,
} from '~/internal/schemas/notificare-notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { WebMobileAppUINotification } from './app-ui/mobile/WebMobileAppUINotification';
import { WebMacOSNotification } from './lockscreen/WebMacOSNotification';

export function NotificationWebPreview({
  notification,
  previewState,
}: NotificationWebPreviewProps) {
  const { googleMapsApiKey } = useOptions();
  const intl = useIntl();

  switch (previewState.formFactor) {
    case 'desktop':
      switch (previewState.os) {
        case 'macos':
          return <WebMacOSNotification key={notification.message} notification={notification} />;
      }
      break;

    case 'phone':
      switch (previewState.displayMode) {
        case 'lockscreen':
        case 'lockscreen-expanded':
          return (
            <UnavailablePreview
              message={intl.formatMessage({
                id: 'preview.error.notSupportedPreviewVariant',
                defaultMessage: PUSH_TRANSLATIONS['preview.error.notSupportedPreviewVariant'],
              })}
              showConsoleWarning={false}
            />
          );
        case 'app-ui': {
          if (!SUPPORTED_MOBILE_APP_UI_NOTIFICATION_TYPES.includes(notification.type)) {
            return (
              <UnavailablePreview
                message={intl.formatMessage(
                  {
                    id: 'preview.error.notSupportedNotificationTypePreviewVariant',
                    defaultMessage:
                      PUSH_TRANSLATIONS['preview.error.notSupportedNotificationTypePreviewVariant'],
                  },
                  { notificationType: notification.type },
                )}
                showConsoleWarning={false}
              />
            );
          }

          if (notification.type === 're.notifica.notification.Map' && !googleMapsApiKey) {
            return (
              <UnavailablePreview
                message={intl.formatMessage({
                  id: 'preview.error.provideGoogleMapsApiKey',
                  defaultMessage: PUSH_TRANSLATIONS['preview.error.provideGoogleMapsApiKey'],
                })}
                showConsoleWarning={false}
              />
            );
          }

          switch (previewState.os) {
            case 'android':
              return (
                <AndroidPhoneBackground theme={getTheme(notification.type)}>
                  <WebMobileAppUINotification notification={notification} />
                </AndroidPhoneBackground>
              );

            case 'ios':
              return (
                <IOSPhoneBackground theme={getTheme(notification.type)}>
                  <WebMobileAppUINotification notification={notification} />
                </IOSPhoneBackground>
              );
          }
        }
      }
  }
}

export interface NotificationWebPreviewProps {
  notification: NotificareNotificationSchema;
  previewState: NotificationPreviewStateWebDesktop | NotificationPreviewStateWebMobile;
}

function getTheme(notificationType: NotificareNotificationType) {
  const darkThemeTypes: NotificareNotificationType[] = [
    're.notifica.notification.Alert',
    're.notifica.notification.Map',
    're.notifica.notification.WebView',
    're.notifica.notification.URL',
    're.notifica.notification.Video',
    're.notifica.notification.Image',
  ];
  return darkThemeTypes.includes(notificationType) ? 'dark' : 'light';
}

const SUPPORTED_MOBILE_APP_UI_NOTIFICATION_TYPES: NotificareNotificationType[] = [
  're.notifica.notification.Alert',
  're.notifica.notification.Map',
  're.notifica.notification.WebView',
  're.notifica.notification.URL',
  're.notifica.notification.Video',
  're.notifica.notification.Image',
];
