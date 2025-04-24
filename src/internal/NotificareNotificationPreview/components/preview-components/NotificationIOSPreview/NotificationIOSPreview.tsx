import './NotificationIOSPreview.css';
import { NotificareApplication } from '../../../../../components/NotificareNotificationPreview/models/notificare-application';
import { PUSH_API_HOST } from '../../../../api';
import { NotificationPreviewVariant } from '../../../models/notification-preview-variant';
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
      <div className="notificare__push__ios__preview">
        {(mobileVariant === 'lockscreen' || mobileVariant === 'lockscreen-expanded') && (
          <LockScreenNotification
            notification={notification}
            appName={application.name}
            appIcon={`${PUSH_API_HOST}/upload${application.websitePushConfig.icon}`}
            expanded={mobileVariant === 'lockscreen-expanded'}
          />
        )}

        {mobileVariant === 'app-ui' &&
          (() => {
            switch (notification.type) {
              case 're.notifica.notification.Alert':
                return (
                  <TextAlertNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.WebView':
                return (
                  <WebViewNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.URL':
                return <URLNotification notification={notification} appName={application.name} />;

              case 're.notifica.notification.InAppBrowser':
                return <InAppBrowserNotification notification={notification} />;

              case 're.notifica.notification.Image':
                return (
                  <ImagesNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.Map':
                return <MapNotification notification={notification} appName={application.name} />;

              case 're.notifica.notification.Rate':
                return <RateNotification title={notification.title} appName={application.name} />;

              case 're.notifica.notification.Passbook':
                return (
                  <DigitalCardNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.Video':
                return <VideoNotification notification={notification} appName={application.name} />;

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
  application: NotificareApplication;
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
