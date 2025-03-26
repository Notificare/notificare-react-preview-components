import { NotificationPreviewVariant } from '../../../models/notification-preview-variant';
import { NotificareApplicationSchema } from '../../../schemas/notificare-application/notificare-application-schema';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import AndroidPhoneBackground from '../../shared-components/android-phone-background/AndroidPhoneBackground';
import IOSPhoneBackground from '../../shared-components/ios-phone-background/IOSPhoneBackground';
import WebPush from './desktop/macOS';
import WebMobileAppUI from './mobile/app-ui/WebMobileAppUI';

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
      <WebPush
        notification={notification}
        appName={application.appName}
        appDomain={application.appDomain}
      ></WebPush>
    );
  }

  if (webDevice === 'phone') {
    if (webMobileType === 'android') {
      return (
        <AndroidPhoneBackground theme="dark">
          {mobileVariant === 'app-ui' && (
            <WebMobileAppUI
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
            <WebMobileAppUI
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
