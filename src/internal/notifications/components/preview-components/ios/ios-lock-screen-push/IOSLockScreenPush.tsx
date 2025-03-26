import './IOSLockScreenPush.css';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';

export default function IOSLockScreenPush(props: IOSLockScreenPushProps) {
  const { notification, appName, appIcon, expanded } = props;

  return (
    <div className="notificare__ios-lock-screen-push">
      <div className="notificare__ios-lock-screen-push-wrapper">
        <div className="notificare__ios-lock-screen-push-main-content">
          <div className="notificare__ios-lock-screen-push-app-icon">
            <img
              className="notificare__ios-lock-screen-push-app-icon-image"
              alt="App icon"
              src={appIcon}
            />
          </div>
          <div className="notificare__ios-lock-screen-push-text-content">
            <div className="notificare__ios-lock-screen-push-title-and-time">
              <p className="notificare__ios-lock-screen-push-text notificare__ios-lock-screen-push-text--title-or-subtitle">
                {notification.title || appName}
              </p>

              <p className="notificare__ios-lock-screen-push-text notificare__ios-lock-screen-push-text--time">
                Now
              </p>
            </div>

            {notification.subtitle && (
              <p className="notificare__ios-lock-screen-push-text notificare__ios-lock-screen-push-text--title-or-subtitle">
                {notification.subtitle}
              </p>
            )}

            <div className="notificare__ios-lock-screen-push-message-and-media">
              <p
                className={`notificare__ios-lock-screen-push-text ${hasFirstAttachment(notification) && !expanded ? 'notificare__ios-lock-screen-push-text--message-with-media' : 'notificare__ios-lock-screen-push-text--message-without-media'}`}
              >
                {notification.message}
              </p>

              {hasFirstAttachment(notification) && !expanded && (
                <img
                  className="notificare__ios-lock-screen-push-media-image"
                  src={notification.attachments?.[0].uri}
                  alt="Media icon"
                />
              )}
            </div>
          </div>
        </div>
        {expanded && (
          <img
            className="notificare__ios-lock-screen-push-expanded-media"
            src={notification.attachments?.[0].uri}
            alt="Media icon"
          />
        )}
      </div>
    </div>
  );
}

interface IOSLockScreenPushProps {
  notification: NotificareNotificationSchema;
  appName: string;
  appIcon: string;
  expanded: boolean;
}
