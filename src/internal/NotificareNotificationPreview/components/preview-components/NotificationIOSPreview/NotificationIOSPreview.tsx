import './NotificationIOSPreview.css';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import {
  NotificationPreviewDisplayMode,
  NotificationPreviewStateMobile,
} from '../../../types/notification-preview';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import { IOSPhoneBackground } from '../../shared-components/IOSPhoneBackground/IOSPhoneBackground';
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

export function NotificationIOSPreview({
  notification,
  previewState,
}: NotificationIOSPreviewProps) {
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
    <IOSPhoneBackground theme={getTheme(notification.type, previewState.displayMode)}>
      <div className="notificare__push__ios__preview">
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
                  return <RateNotification title={notification.title} />;

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
    </IOSPhoneBackground>
  );
}

export interface NotificationIOSPreviewProps {
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
