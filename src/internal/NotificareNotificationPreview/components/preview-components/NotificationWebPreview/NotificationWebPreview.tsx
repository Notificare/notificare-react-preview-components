import { NotificationPreviewVariant } from '../../../models/notification-preview-variant';
import { NotificareApplicationSchema } from '../../../schemas/notificare-application/notificare-application-schema';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import AndroidPhoneBackground from '../../shared-components/AndroidPhoneBackground/AndroidPhoneBackground';
import IOSPhoneBackground from '../../shared-components/IOSPhoneBackground/IOSPhoneBackground';
import WebMacOSNotification from './WebMacOSNotification/WebMacOSNotification';
import WebMobileAppUINotification from './WebMobileAppUINotification/WebMobileAppUINotification';

export function NotificationWebPreview({
  notification,
  application,
  mobileVariant,
  webDevice,
  webMobileType,
  webDesktopOS,
}: NotificationWebPreviewProps) {
  if (webDevice === 'desktop' && webDesktopOS === 'macOS') {
    return (
      <WebMacOSNotification
        key={notification.message}
        notification={notification}
        appName={application.name}
        appDomain={application.domain}
      />
    );
  }

  if (webDevice === 'phone' && mobileVariant === 'app-ui') {
    const PhoneBackground =
      webMobileType === 'android'
        ? AndroidPhoneBackground
        : webMobileType === 'iphone'
          ? IOSPhoneBackground
          : null;

    if (PhoneBackground) {
      return (
        <PhoneBackground theme={getTheme(notification.type)}>
          <WebMobileAppUINotification
            notification={notification}
            appName={application.name}
            appIcon={application.icon}
          />
        </PhoneBackground>
      );
    }
  }
}

interface NotificationWebPreviewProps {
  notification: NotificareNotificationSchema;
  application: NotificareApplicationSchema;
  mobileVariant: NotificationPreviewVariant['mobileVariant'];
  webDevice: NotificationPreviewVariant['webDevice'];
  webMobileType: NotificationPreviewVariant['webMobileType'];
  webDesktopOS: NotificationPreviewVariant['webDesktopOS'];
}

function getTheme(notificationType: NotificareNotificationSchema['type']) {
  const darkThemeTypes: NotificareNotificationSchema['type'][] = [
    're.notifica.notification.Alert',
    're.notifica.notification.Map',
    're.notifica.notification.WebView',
    're.notifica.notification.URL',
    're.notifica.notification.Video',
    're.notifica.notification.Image',
  ];
  return darkThemeTypes.includes(notificationType) ? 'dark' : 'light';
}
