import './NotificationAndroidPreview.css';
import { NotificationPreviewVariant } from '../../../models/notification-preview-variant';
import { NotificareApplicationSchema } from '../../../schemas/notificare-application/notificare-application-schema';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import AndroidPhoneBackground from '../../shared-components/android-phone-background/AndroidPhoneBackground';
import AppRecommendationNotification from './android-app-push-ui/app-recommendation-notification/AppRecommendationNotification';
import DigitalCardNotification from './android-app-push-ui/digital-card-notification/DigitalCardNotification';
import ImagesNotification from './android-app-push-ui/images-notification/ImagesNotification';
import InAppBrowserNotification from './android-app-push-ui/in-app-browser-notification/InAppBrowserNotification';
import MapNotification from './android-app-push-ui/map-notification/MapNotification';
import RateNotification from './android-app-push-ui/rate-notification/RateNotification';
import TextAlertNotification from './android-app-push-ui/text-alert-notification/TextAlertNotification';
import URLNotification from './android-app-push-ui/url-notification/URLNotification';
import VideoNotification from './android-app-push-ui/video-notification/VideoNotification';
import WebViewNotification from './android-app-push-ui/web-view-notification/WebViewNotification';
import AndroidLockScreenPush from './android-lock-screen-push';

export function NotificationAndroidPreview({
  notification,
  application,
  mobileVariant,
}: NotificationAndroidPreviewProps) {
  return (
    <AndroidPhoneBackground theme={getTheme(notification.type, mobileVariant)}>
      <div className="notificare__android-preview">
        {(mobileVariant === 'lockscreen' || mobileVariant === 'lockscreen-expanded') && (
          <AndroidLockScreenPush
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
                    appIcon={application.appIcon}
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
                return (
                  <InAppBrowserNotification
                    notification={notification}
                    appName={application.appName}
                  />
                );

              case 're.notifica.notification.Image':
                return (
                  <ImagesNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.Map':
                return (
                  <MapNotification notification={notification} appName={application.appName} />
                );

              case 're.notifica.notification.Rate':
                return (
                  <RateNotification notification={notification} appName={application.appName} />
                );

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
                return (
                  <AppRecommendationNotification
                    notification={notification}
                    appName={application.appName}
                  />
                );
            }
          })()}
      </div>
    </AndroidPhoneBackground>
  );
}

interface NotificationAndroidPreviewProps {
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

  const darkThemeTypes: NotificareNotificationSchema['type'][] = ['re.notifica.notification.Alert'];
  return darkThemeTypes.includes(notificationType) ? 'dark' : 'light';
}
