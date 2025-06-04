import './NotificationAndroidPreview.css';
import { useOptions } from '../../../../context/options';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import { AndroidPhoneBackground } from '../../../shared/AndroidPhoneBackground/AndroidPhoneBackground';
import { UnavailablePreview } from '../../../shared/UnavailablePreview/UnavailablePreview';
import {
  NotificationPreviewDisplayMode,
  NotificationPreviewStateMobile,
} from '../../notification-preview-state';
import { AppRecommendationNotification } from './app-ui/AppRecommendationNotification/AppRecommendationNotification';
import { DigitalCardNotification } from './app-ui/DigitalCardNotification/DigitalCardNotification';
import { ImagesNotification } from './app-ui/ImagesNotification/ImagesNotification';
import { InAppBrowserNotification } from './app-ui/InAppBrowserNotification/InAppBrowserNotification';
import { MapNotification } from './app-ui/MapNotification/MapNotification';
import { RateNotification } from './app-ui/RateNotification/RateNotification';
import { TextAlertNotification } from './app-ui/TextAlertNotification/TextAlertNotification';
import { URLNotification } from './app-ui/URLNotification/URLNotification';
import { VideoNotification } from './app-ui/VideoNotification/VideoNotification';
import { WebViewNotification } from './app-ui/WebViewNotification/WebViewNotification';
import { LockScreenNotification } from './lock-screen/LockScreenNotification';

export function NotificationAndroidPreview({
  notification,
  previewState,
}: NotificationAndroidPreviewProps) {
  const { googleMapsAPIKey } = useOptions();

  if (
    notification.type === 're.notifica.notification.Map' &&
    previewState.displayMode === 'app-ui' &&
    !googleMapsAPIKey
  ) {
    return (
      <UnavailablePreview
        message="→ A Google Maps API key should be provided"
        showConsoleWarning={false}
      />
    );
  }

  return (
    <AndroidPhoneBackground theme={getTheme(notification.type, previewState.displayMode)}>
      <div className="notificare__push__android__preview">
        {(() => {
          switch (previewState.displayMode) {
            case 'lockscreen':
              return <LockScreenNotification notification={notification} expanded={false} />;

            case 'lockscreen-expanded':
              return (
                <LockScreenNotification
                  notification={notification}
                  expanded={previewState.displayMode === 'lockscreen-expanded'}
                />
              );

            case 'app-ui':
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
          }
        })()}
      </div>
    </AndroidPhoneBackground>
  );
}

export interface NotificationAndroidPreviewProps {
  notification: NotificareNotificationSchema;
  previewState: NotificationPreviewStateMobile;
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
