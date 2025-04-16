import './LockScreenNotification.css';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';

export default function LockScreenNotification(props: IOSLockScreenPushProps) {
  const { notification, appName, appIcon, expanded } = props;

  return (
    <div
      className="notificare__ios-lock-screen-notification"
      data-testid="ios-lock-screen-notification"
    >
      <div className="notificare__ios-lock-screen-notification-main-content">
        <div className="notificare__ios-lock-screen-notification-app-icon">
          <img
            className="notificare__ios-lock-screen-notification-app-icon-image"
            alt="App icon"
            src={appIcon}
          />
        </div>
        <div className="notificare__ios-lock-screen-notification-text-content">
          <div className="notificare__ios-lock-screen-notification-title-and-time">
            <p
              className={`notificare__ios-lock-screen-notification-text ${!expanded ? 'notificare__ios-lock-screen-notification-text--title-or-subtitle' : 'notificare__ios-lock-screen-notification-text--expanded-title-or-subtitle'}`}
            >
              {notification.title || appName}
            </p>

            <p className="notificare__ios-lock-screen-notification-text notificare__ios-lock-screen-notification-text--time">
              Now
            </p>
          </div>

          {notification.subtitle && (
            <p
              className={`notificare__ios-lock-screen-notification-text ${!expanded ? 'notificare__ios-lock-screen-notification-text--title-or-subtitle' : 'notificare__ios-lock-screen-notification-text--expanded-title-or-subtitle'}`}
            >
              {notification.subtitle}
            </p>
          )}

          <div className="notificare__ios-lock-screen-notification-message-and-media">
            <p
              className={`notificare__ios-lock-screen-notification-text ${hasFirstAttachment(notification) && !expanded ? 'notificare__ios-lock-screen-notification-text--message-with-media' : 'notificare__ios-lock-screen-notification-text--message-without-media'}`}
            >
              {notification.message}
            </p>

            {hasFirstAttachment(notification) && !expanded && (
              <img
                className="notificare__ios-lock-screen-notification-media-image"
                src={notification.attachments?.[0].uri}
                alt="Media icon"
                data-testid="ios-lock-screen-notification-media"
              />
            )}
          </div>
        </div>
      </div>
      {hasFirstAttachment(notification) && expanded && (
        <img
          className="notificare__ios-lock-screen-notification-expanded-media"
          src={notification.attachments?.[0].uri}
          alt="Media icon"
          data-testid="ios-lock-screen-notification-expanded-media"
        />
      )}
    </div>
  );
}

interface IOSLockScreenPushProps {
  notification: NotificareNotificationSchema;
  appName: string;
  appIcon: string;
  expanded: boolean;
}
