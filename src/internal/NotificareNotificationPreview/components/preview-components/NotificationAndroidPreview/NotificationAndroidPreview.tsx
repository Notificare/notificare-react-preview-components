import './NotificationAndroidPreview.css';
import { NotificareApplication } from '../../../../../components/NotificareNotificationPreview/models/notificare-application';
import { getAppIconURL } from '../../../helpers/getAppIconURL';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import { NotificationPreviewModelDisplayMode } from '../../../types/notification-preview-model';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import AndroidPhoneBackground from '../../shared-components/AndroidPhoneBackground/AndroidPhoneBackground';
import UnavailablePreview from '../../shared-components/UnavailablePreview/UnavailablePreview';
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

export function NotificationAndroidPreview({
  notification,
  application,
  displayMode = 'lockscreen',
}: NotificationAndroidPreviewProps) {
  const { googleMapsAPIKey } = useOptions().options;

  if (
    notification.type === 're.notifica.notification.Map' &&
    !googleMapsAPIKey &&
    displayMode === 'app-ui'
  ) {
    return (
      <UnavailablePreview
        message="→ A Google Maps API key should be provided"
        showConsoleWarning={false}
      />
    );
  }

  return (
    <AndroidPhoneBackground theme={getTheme(notification.type, displayMode)}>
      <div className="notificare__push__android__preview">
        {(displayMode === 'lockscreen' || displayMode === 'lockscreen-expanded') && (
          <LockScreenNotification
            notification={notification}
            appName={application.name}
            appIcon={getAppIconURL(application.websitePushConfig.icon)}
            expanded={displayMode === 'lockscreen-expanded'}
          />
        )}

        {displayMode === 'app-ui' &&
          (() => {
            switch (notification.type) {
              case 're.notifica.notification.Alert':
                return (
                  <TextAlertNotification
                    notification={notification}
                    appName={application.name}
                    appIcon={getAppIconURL(application.websitePushConfig.icon)}
                  />
                );

              case 're.notifica.notification.WebView':
                return (
                  <WebViewNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.URL':
                return <URLNotification notification={notification} appName={application.name} />;

              case 're.notifica.notification.InAppBrowser':
                return (
                  <InAppBrowserNotification
                    notification={notification}
                    appName={application.name}
                  />
                );

              case 're.notifica.notification.Image':
                return (
                  <ImagesNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.Map':
                return <MapNotification notification={notification} appName={application.name} />;

              case 're.notifica.notification.Rate':
                return (
                  <RateNotification
                    notification={notification}
                    appName={application.name}
                    appAndroidPackageName={application.androidPackageName}
                  />
                );

              case 're.notifica.notification.Passbook':
                return (
                  <DigitalCardNotification notification={notification} appName={application.name} />
                );

              case 're.notifica.notification.Video':
                return <VideoNotification notification={notification} appName={application.name} />;

              case 're.notifica.notification.Store':
                return (
                  <AppRecommendationNotification
                    notification={notification}
                    appName={application.name}
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
  application: NotificareApplication;
  displayMode?: NotificationPreviewModelDisplayMode;
}

function getTheme(
  notificationType: NotificareNotificationSchema['type'],
  displayMode: NotificationPreviewModelDisplayMode,
) {
  if (displayMode !== 'app-ui') {
    return 'light';
  }

  const darkThemeTypes: NotificareNotificationSchema['type'][] = ['re.notifica.notification.Alert'];
  return darkThemeTypes.includes(notificationType) ? 'dark' : 'light';
}
