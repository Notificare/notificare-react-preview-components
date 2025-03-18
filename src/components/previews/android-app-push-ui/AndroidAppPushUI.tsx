import '../../../preset.css';
import './AndroidAppPushUI.css';
import { BasePushMessage } from '../../../schemas/basePushMessageSchema';
import AppRecommendationNotification from './components/app-recommendation-notification/AppRecommendationNotification';
import DigitalCardNotification from './components/digital-card-notification/DigitalCardNotification';
import ImagesNotification from './components/images-notification/ImagesNotification';
import InAppBrowserNotification from './components/in-app-browser-notification/InAppBrowserNotification';
import MapNotification from './components/map-notification/MapNotification';
import RateNotification from './components/rate-notification/RateNotification';
import TextAlertNotification from './components/text-alert-notification/TextAlertNotification';
import URLNotification from './components/url-notification/URLNotification';
import VideoNotification from './components/video-notification/VideoNotification';
import WebViewNotification from './components/web-view-notification/WebViewNotification';

export interface AndroidAppPushUIProps {
  notification: BasePushMessage;
  appName: string;
  appIcon: string;
}

export default function AndroidAppPushUI(props: AndroidAppPushUIProps) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <div className="notificare__android-app-push-ui">
        {(() => {
          switch (notification.type) {
            case 're.notifica.notification.Alert':
              return (
                <TextAlertNotification
                  notification={notification}
                  appName={appName}
                  appIcon={appIcon}
                />
              );

            case 're.notifica.notification.WebView':
              return <WebViewNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.URL':
              return <URLNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.InAppBrowser':
              return <InAppBrowserNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.Image':
              return <ImagesNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.Map':
              return <MapNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.Rate':
              return <RateNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.Passbook':
              return <DigitalCardNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.Video':
              return <VideoNotification notification={notification} appName={appName} />;

            case 're.notifica.notification.Store':
              return (
                <AppRecommendationNotification notification={notification} appName={appName} />
              );
          }
        })()}
      </div>
    </div>
  );
}
