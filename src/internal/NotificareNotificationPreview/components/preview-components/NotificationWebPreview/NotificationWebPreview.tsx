import { NotificareApplication } from '../../../../../components/NotificareNotificationPreview/models/notificare-application';
import { PUSH_API_HOST } from '../../../../api';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import {
  NotificationPreviewModelDisplayMode,
  NotificationPreviewModelWebDesktopOS,
  NotificationPreviewModelWebDevice,
  NotificationPreviewModelWebMobileType,
} from '../../../types/notification-preview-model';
import AndroidPhoneBackground from '../../shared-components/AndroidPhoneBackground/AndroidPhoneBackground';
import IOSPhoneBackground from '../../shared-components/IOSPhoneBackground/IOSPhoneBackground';
import WebMacOSNotification from './WebMacOSNotification/WebMacOSNotification';
import WebMobileAppUINotification from './WebMobileAppUINotification/WebMobileAppUINotification';

export function NotificationWebPreview({
  notification,
  application,
  displayMode = 'app-ui',
  webDevice = 'desktop',
  webMobileType,
  webDesktopOS = 'macOS',
}: NotificationWebPreviewProps) {
  if (webDevice === 'desktop' && webDesktopOS === 'macOS') {
    return (
      <WebMacOSNotification
        key={notification.message}
        notification={notification}
        appName={application.name}
        appDomain={application.websitePushConfig.allowedDomains[0]}
      />
    );
  }

  if (webDevice === 'phone' && displayMode === 'app-ui') {
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
            appIcon={`${PUSH_API_HOST}/upload${application.websitePushConfig.icon}`}
          />
        </PhoneBackground>
      );
    }
  }
}

interface NotificationWebPreviewProps {
  notification: NotificareNotificationSchema;
  application: NotificareApplication;
  displayMode?: NotificationPreviewModelDisplayMode;
  webDevice?: NotificationPreviewModelWebDevice;
  webMobileType?: NotificationPreviewModelWebMobileType;
  webDesktopOS?: NotificationPreviewModelWebDesktopOS;
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
