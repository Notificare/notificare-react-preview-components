import './NotificationAndroidPreview.css';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import { NotificationPreviewDisplayMode } from '../../../types/notification-preview-model';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import { AndroidPhoneBackground } from '../../shared-components/AndroidPhoneBackground/AndroidPhoneBackground';
import { UnavailablePreview } from '../../shared-components/UnavailablePreview/UnavailablePreview';
import { AppRecommendationNotification } from './AppRecommendationNotification/AppRecommendationNotification';
import { DigitalCardNotification } from './DigitalCardNotification/DigitalCardNotification';
import { ImagesNotification } from './ImagesNotification/ImagesNotification';
import { InAppBrowserNotification } from './InAppBrowserNotification/InAppBrowserNotification';
import { LockScreenNotification } from './LockScreenNotification/LockScreenNotification';
import { MapNotification } from './MapNotification/MapNotification';
import { RateNotification } from './RateNotification/RateNotification';
import { TextAlertNotification } from './TextAlertNotification/TextAlertNotification';
import { URLNotification } from './URLNotification/URLNotification';
import { VideoNotification } from './VideoNotification/VideoNotification';
import { WebViewNotification } from './WebViewNotification/WebViewNotification';

export function NotificationAndroidPreview({
  notification,
  displayMode = 'lockscreen',
}: NotificationAndroidPreviewProps) {
  const { googleMapsAPIKey } = useOptions();

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
            expanded={displayMode === 'lockscreen-expanded'}
          />
        )}

        {displayMode === 'app-ui' &&
          (() => {
            switch (notification.type) {
              case 're.notifica.notification.Alert':
                return <TextAlertNotification notification={notification} />;

              case 're.notifica.notification.WebView':
                return <WebViewNotification notification={notification} />;

              case 're.notifica.notification.URL':
                return <URLNotification notification={notification} />;

              case 're.notifica.notification.InAppBrowser':
                return <InAppBrowserNotification notification={notification} />;

              case 're.notifica.notification.Image':
                return <ImagesNotification notification={notification} />;

              case 're.notifica.notification.Map':
                return <MapNotification notification={notification} />;

              case 're.notifica.notification.Rate':
                return <RateNotification notification={notification} />;

              case 're.notifica.notification.Passbook':
                return <DigitalCardNotification notification={notification} />;

              case 're.notifica.notification.Video':
                return <VideoNotification notification={notification} />;

              case 're.notifica.notification.Store':
                return <AppRecommendationNotification notification={notification} />;
            }
          })()}
      </div>
    </AndroidPhoneBackground>
  );
}

export interface NotificationAndroidPreviewProps {
  notification: NotificareNotificationSchema;
  displayMode?: NotificationPreviewDisplayMode;
}

function getTheme(
  notificationType: NotificareNotificationSchema['type'],
  displayMode: NotificationPreviewDisplayMode,
) {
  if (displayMode !== 'app-ui') {
    return 'light';
  }

  const darkThemeTypes: NotificareNotificationSchema['type'][] = ['re.notifica.notification.Alert'];
  return darkThemeTypes.includes(notificationType) ? 'dark' : 'light';
}
