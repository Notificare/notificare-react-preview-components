import './WebMobileAppUINotification.css';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import MapRichContent from '../../../shared-components/MapRichContent/MapRichContent';
import VideoRichContent from '../../../shared-components/VideoRichContent/VideoRichContent';
import Webshot from '../../../shared-components/Webshot/Webshot';

export default function WebMobileAppUINotification({
  notification,
  appName,
  appIcon,
}: WebMobileAppUIProps) {
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
            <img
              className="notificare__web__phone__app-ui__app-icon"
              src={appIcon}
              alt="App icon"
            />
            <p className="notificare__web__phone__app-ui__app-name">{appName}</p>
            <button className="notificare__web__phone__app-ui__close-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="notificare__web__phone__app-ui__close-button-icon"
              >
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"></path>
              </svg>
            </button>
          </div>

          {notification.type === 're.notifica.notification.Alert' && (
            <div data-testid="web-mobile-app-ui-text-alert-notification">
              {hasFirstAttachment(notification) && (
                <img
                  className="notificare__web__phone__alert__app-ui__media"
                  src={notification.attachments?.[0].uri}
                  alt="Notification attachment"
                />
              )}

              <div>
                <p className="notificare__web__phone__alert__app-ui__title">{notification.title}</p>
                <p className="notificare__web__phone__alert__app-ui__subtitle">
                  {notification.subtitle}
                </p>
                <p className="notificare__web__phone__alert__app-ui__message">
                  {notification.message}
                </p>
              </div>
            </div>
          )}

          {notification.type === 're.notifica.notification.WebView' && (
            <iframe
              className="notificare__web__phone__web-view__app-ui__content"
              srcDoc={notification.content[0].data}
              sandbox="allow-same-origin"
              data-testid="web-mobile-app-ui-web-view-notification"
            />
          )}

          {notification.type === 're.notifica.notification.Map' && (
            <MapRichContent notification={notification} width={'100%'} height={'400px'} />
          )}

          {notification.type == 're.notifica.notification.URL' && (
            <div data-testid="web-mobile-app-ui-url-notification">
              <Webshot
                url={notification.content[0].data}
                platform={'Web'}
                width={268}
                height={430}
              />
            </div>
          )}

          {notification.type === 're.notifica.notification.Video' && (
            <div data-testid="web-mobile-app-ui-video-notification">
              <VideoRichContent videoData={notification.content[0]} width="100%" height="430px" />
            </div>
          )}

          {notification.type === 're.notifica.notification.Image' && (
            <div
              className="notificare__web__phone__image__app-ui__image-slider"
              data-testid="web-mobile-app-ui-image-notification"
            >
              {notification.content.map((image, index) => (
                <img
                  key={index}
                  className="notificare__web__phone__image__app-ui__image-slider-item"
                  src={image.data}
                  alt="Slider image"
                />
              ))}
            </div>
          )}

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

interface WebMobileAppUIProps {
  notification: NotificareNotificationSchema;
  appName: string;
  appIcon: string;
}
