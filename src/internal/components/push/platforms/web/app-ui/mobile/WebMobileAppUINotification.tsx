import DefaultAppIcon from '~/assets/default-app-icon.svg';
import ThinXMarkIcon from '~/assets/thin-x-mark.svg';
import { MapRichContent } from '~/internal/components/push/platforms/shared/MapRichContent/MapRichContent';
import { VideoRichContent } from '~/internal/components/push/platforms/shared/VideoRichContent/VideoRichContent';
import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { AlertNotification } from './AlertNotification/AlertNotification';
import { ImageNotification } from './ImageNotification/ImageNotification';
import { WebViewNotification } from './WebViewNotification/WebViewNotification';

import './WebMobileAppUINotification.css';

export function WebMobileAppUINotification({ notification }: WebMobileAppUIProps) {
  const application = useApplication();

  if (
    notification.type === 're.notifica.notification.Alert' ||
    notification.type === 're.notifica.notification.Map' ||
    notification.type === 're.notifica.notification.WebView' ||
    notification.type === 're.notifica.notification.URL' ||
    notification.type === 're.notifica.notification.Video' ||
    notification.type === 're.notifica.notification.Image'
  ) {
    return (
      <div className="notificare__web__phone__app-ui">
        <div className="notificare__web__phone__app-ui__background">
          <div className="notificare__web__phone__app-ui__header">
            <div className="notificare__web__phone__app-ui__app-icon">
              {application.websitePushConfig.icon ? (
                <img
                  className="notificare__web__phone__app-ui__app-icon-image"
                  src={application.websitePushConfig.icon}
                  alt="App icon"
                />
              ) : (
                <DefaultAppIcon className="notificare__web__phone__app-ui__default-app-icon" />
              )}
            </div>

            <p className="notificare__web__phone__app-ui__app-name">{application.name}</p>
            <button className="notificare__web__phone__app-ui__close-button">
              <ThinXMarkIcon className="notificare__web__phone__app-ui__close-button-icon" />
            </button>
          </div>

          {(() => {
            switch (notification.type) {
              case 're.notifica.notification.Alert':
                return <AlertNotification notification={notification} />;

              case 're.notifica.notification.WebView':
                return <WebViewNotification notification={notification} />;

              case 're.notifica.notification.URL':
                return (
                  <div data-testid="web-mobile-app-ui-url-notification">
                    <Webshot
                      url={notification.content[0].data}
                      platform={'Web'}
                      width={268}
                      height={430}
                    />
                  </div>
                );

              case 're.notifica.notification.Image':
                return <ImageNotification notification={notification} />;

              case 're.notifica.notification.Map':
                return (
                  <MapRichContent notification={notification} width={'100%'} height={'400px'} />
                );

              case 're.notifica.notification.Video':
                return (
                  <div data-testid="web-mobile-app-ui-video-notification">
                    <VideoRichContent
                      videoData={notification.content[0]}
                      width="100%"
                      height="430px"
                    />
                  </div>
                );
            }
          })()}

          {notification.actions && (
            <div
              className={`${notification.actions.length >= 3 ? 'notificare__web__phone__app-ui__actions-column' : 'notificare__web__phone__app-ui__actions-row'}`}
            >
              {notification.actions.map((action, index) => (
                <button
                  key={index}
                  className={`notificare__web__phone__app-ui__action ${index === 0 ? 'notificare__web__phone__app-ui__action--primary' : 'notificare__web__phone__app-ui__action--secondary'}`}
                  data-testid={`web-mobile-app-ui-action-${index}`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export interface WebMobileAppUIProps {
  notification: NotificareNotificationSchema;
}
