import { useOptions } from '../../../../context/options';
import {
  NotificareNotificationSchema,
  NotificareNotificationType,
} from '../../../../schemas/notificare-notification/notificare-notification-schema';
import { AndroidPhoneBackground } from '../../../shared/AndroidPhoneBackground/AndroidPhoneBackground';
import { IOSPhoneBackground } from '../../../shared/IOSPhoneBackground/IOSPhoneBackground';
import { UnavailablePreview } from '../../../shared/UnavailablePreview/UnavailablePreview';
import {
  NotificationPreviewStateWebDesktop,
  NotificationPreviewStateWebMobile,
} from '../../notification-preview-state';
import { WebMobileAppUINotification } from './app-ui/mobile/WebMobileAppUINotification';
import { WebMacOSNotification } from './lockscreen/WebMacOSNotification';

export function NotificationWebPreview({
  notification,
  previewState,
}: NotificationWebPreviewProps) {
  const { googleMapsAPIKey } = useOptions();

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
              message="→ Notification preview variant not supported"
              showConsoleWarning={false}
            />
          );
        case 'app-ui': {
          if (!SUPPORTED_MOBILE_APP_UI_NOTIFICATION_TYPES.includes(notification.type)) {
            return (
              <UnavailablePreview
                message={`→ The preview for the notification type '${notification.type}' does not exist in this variant`}
                showConsoleWarning={false}
              />
            );
          }

          if (notification.type === 're.notifica.notification.Map' && !googleMapsAPIKey) {
            return (
              <UnavailablePreview
                message="→ A Google Maps API key should be provided"
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
