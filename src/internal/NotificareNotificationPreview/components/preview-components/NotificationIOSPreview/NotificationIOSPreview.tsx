import './NotificationIOSPreview.css';
import { NotificationPreviewVariant } from '../../../models/notification-preview-variant';
import { NotificareApplicationSchema } from '../../../schemas/notificare-application/notificare-application-schema';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import IOSPhoneBackground from '../../shared-components/IOSPhoneBackground/IOSPhoneBackground';
import AppRecommendationNotification from './AppRecommendationNotification/AppRecommendationNotification';
import DigitalCardNotification from './DigitalCardNotification/DigitalCardNotification';
import ImagesNotification from './ImagesNotification/ImagesNotification';
import InAppBrowserNotification from './InAppBrowserNotification/InAppBrowserNotification';
import LockScreenNotification from './LockScreenNotification/LockScreenNotification';
import MapNotification from './MapNotification/MapNotification';
import RateNotification from './RateNotification/RateNotification';
import TextAlertNotification from './TextAlertNotification/TextAlertNotification';
import URLNotification from './URLNotification/URLNotification';
import VideoNotification from './VideoNotification/VideoNotification';
import WebViewNotification from './WebViewNotification/WebViewNotification';

export default function NotificationIOSPreview({
  notification,
  application,
  mobileVariant,
}: NotificationIOSPreviewProps) {
  return (
    <IOSPhoneBackground theme={getTheme(notification.type, mobileVariant)}>
      <div className="notificare__ios-preview">
        {(mobileVariant === 'lockscreen' || mobileVariant === 'lockscreen-expanded') && (
          <LockScreenNotification
            notification={notification}
            appName={application.appName}
            appIcon={application.appIcon}
            expanded={mobileVariant === 'lockscreen-expanded'}
          />
        )}

        {mobileVariant === 'app-ui' &&
          (() => {
            switch (notification.type) {
              case 're.notifica.notification.Alert':
                return (
                  <TextAlertNotification
                    notification={notification}
                    appName={application.appName}
                  />
                );

              case 're.notifica.notification.WebView':
                return (
                  <WebViewNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.URL':
                return (
                  <URLNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.InAppBrowser':
                return <InAppBrowserNotification notification={notification} />;

              case 're.notifica.notification.Image':
                return (
                  <ImagesNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.Map':
                return (
                  <MapNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.Rate':
                return <RateNotification appName={application.appName} />;

              case 're.notifica.notification.Passbook':
                return (
                  <DigitalCardNotification
                    notification={notification}
                    appName={application.appName}
                  />
                );

              case 're.notifica.notification.Video':
                return (
                  <VideoNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.Store':
                return <AppRecommendationNotification notification={notification} />;
            }
          })()}
      </div>
    </IOSPhoneBackground>
  );
}

interface NotificationIOSPreviewProps {
  notification: NotificareNotificationSchema;
  application: NotificareApplicationSchema;
  mobileVariant: NotificationPreviewVariant['mobileVariant'];
}

function getTheme(
  notificationType: NotificareNotificationSchema['type'],
  mobileVariant: NotificationPreviewVariant['mobileVariant'],
) {
  if (mobileVariant !== 'app-ui') {
    return 'light';
  }

  const darkThemeTypes: NotificareNotificationSchema['type'][] = [
    're.notifica.notification.Alert',
    're.notifica.notification.WebView',
    're.notifica.notification.URL',
    're.notifica.notification.InAppBrowser',
    're.notifica.notification.Image',
    're.notifica.notification.Rate',
    're.notifica.notification.Passbook',
    're.notifica.notification.Video',
    're.notifica.notification.Store',
    're.notifica.notification.Map',
  ];
  return darkThemeTypes.includes(notificationType) ? 'dark' : 'light';
}
