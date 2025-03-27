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
        notification={notification}
        appName={application.appName}
        appDomain={application.appDomain}
      />
    );
  }

  if (webDevice === 'phone') {
    if (webMobileType === 'android') {
      return (
        <AndroidPhoneBackground theme="dark">
          {mobileVariant === 'app-ui' && (
            <WebMobileAppUINotification
              notification={notification}
              appName={application.appName}
              appIcon={application.appIcon}
            />
          )}
        </AndroidPhoneBackground>
      );
    }

    if (webMobileType === 'iphone') {
      return (
        <IOSPhoneBackground theme="dark">
          {mobileVariant === 'app-ui' && (
            <WebMobileAppUINotification
              notification={notification}
              appName={application.appName}
              appIcon={application.appIcon}
            />
          )}
        </IOSPhoneBackground>
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
