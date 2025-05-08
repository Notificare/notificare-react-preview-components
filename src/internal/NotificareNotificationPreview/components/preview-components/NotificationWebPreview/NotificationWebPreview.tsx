import { NotificareApplication } from '../../../../../components/NotificareNotificationPreview/models/notificare-application';
import { getPushAPIHost } from '../../../../../config/api';
import { NotificationPreviewVariant } from '../../../models/notification-preview-variant';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import AndroidPhoneBackground from '../../shared-components/AndroidPhoneBackground/AndroidPhoneBackground';
import IOSPhoneBackground from '../../shared-components/IOSPhoneBackground/IOSPhoneBackground';
import UnavailablePreview from '../../shared-components/UnavailablePreview/UnavailablePreview';
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
  const { googleMapsAPIKey } = useOptions().options;

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

  if (webDevice === 'phone' && mobileVariant === 'app-ui') {
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
            appIcon={
              application.websitePushConfig.icon.startsWith('/website-push')
                ? `${getPushAPIHost()}/upload${application.websitePushConfig.icon}`
                : application.websitePushConfig.icon // ou outra URL alternativa
            }
          />
        </PhoneBackground>
      );
    }
  }
}

interface NotificationWebPreviewProps {
  notification: NotificareNotificationSchema;
  application: NotificareApplication;
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
