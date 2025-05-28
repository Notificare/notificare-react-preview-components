import { NotificareApplication } from '../../../../../components/NotificareNotificationPreview/models/notificare-application';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import { getAppIconURL } from '../../../helpers/getAppIconURL';
import {
  NotificationPreviewDisplayMode,
  NotificationPreviewWebDesktopOS,
  NotificationPreviewWebDevice,
  NotificationPreviewWebMobileType,
} from '../../../types/notification-preview-model';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import AndroidPhoneBackground from '../../shared-components/AndroidPhoneBackground/AndroidPhoneBackground';
import IOSPhoneBackground from '../../shared-components/IOSPhoneBackground/IOSPhoneBackground';
import UnavailablePreview from '../../shared-components/UnavailablePreview/UnavailablePreview';
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
  const { googleMapsAPIKey } = useOptions();

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
    if (
      !(
        notification.type === 're.notifica.notification.Alert' ||
        notification.type === 're.notifica.notification.Map' ||
        notification.type === 're.notifica.notification.WebView' ||
        notification.type === 're.notifica.notification.URL' ||
        notification.type === 're.notifica.notification.Video' ||
        notification.type === 're.notifica.notification.Image'
      )
    ) {
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
            appIcon={getAppIconURL(application.websitePushConfig.icon)}
          />
        </PhoneBackground>
      );
    }
  }
}

interface NotificationWebPreviewProps {
  notification: NotificareNotificationSchema;
  application: NotificareApplication;
  displayMode?: NotificationPreviewDisplayMode;
  webDevice?: NotificationPreviewWebDevice;
  webMobileType?: NotificationPreviewWebMobileType;
  webDesktopOS?: NotificationPreviewWebDesktopOS;
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
