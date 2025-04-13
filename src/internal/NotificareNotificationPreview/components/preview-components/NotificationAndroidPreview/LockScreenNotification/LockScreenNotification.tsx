import './LockScreenNotification.css';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';

export default function LockScreenNotification({
  notification,
  appName,
  appIcon,
  expanded,
}: AndroidLockScreenPushProps) {
  return (
    <div
      className="notificare__android-lock-screen-notification"
      data-testid="android-lock-screen-notification"
    >
      <div className="notificare__android-lock-screen-notification-app-icon">
        <img
          className="notificare__android-lock-screen-notification-app-icon-image"
          alt="App icon"
          src={appIcon}
        />
      </div>
      <div className="notificare__android-lock-screen-notification-text-content">
        <div className="notificare__android-lock-screen-notification-text-content-top">
          <div
            className={`notificare__android-lock-screen-notification-title-and-subtitle ${hasFirstAttachment(notification) && !expanded && 'notificare__android-lock-screen-notification-title-and-subtitle--has-media'}`}
          >
            <p className="notificare__android-lock-screen-notification-text notificare__android-lock-screen-notification-text--title">
              {!expanded ? notification.title || appName : appName}
            </p>
            {notification.subtitle && !hasFirstAttachment(notification) && (
              <p className="notificare__android-lock-screen-notification-text notificare__android-lock-screen-notification-text--subtitle">
                {notification.subtitle}
              </p>
            )}
          </div>
          <p className="notificare__android-lock-screen-notification-text notificare__android-lock-screen-notification-text--time">
            now
          </p>
        </div>

        {expanded && (
          <p className="notificare__android-lock-screen-notification-text notificare__android-lock-screen-notification-text--expanded-title">
            {notification.title}
          </p>
        )}

        <p
          className={`notificare__android-lock-screen-notification-text ${hasFirstAttachment(notification) ? 'notificare__android-lock-screen-notification-text--message-with-media' : 'notificare__android-lock-screen-notification-text--message-without-media'}`}
        >
          {notification.message}
        </p>

        {hasFirstAttachment(notification) && expanded && (
          <div
            className="notificare__android-lock-screen-notification-expanded-media"
            data-testid="android-lock-screen-notification-expanded-media"
          >
            <img
              className="notificare__android-lock-screen-notification-expanded-media-image"
              src={notification.attachments?.[0].uri}
              alt="Expanded media"
            />
          </div>
        )}
      </div>

      {hasFirstAttachment(notification) && !expanded && (
        <div
          className="notificare__android-lock-screen-notification-media"
          data-testid="android-lock-screen-notification-media"
        >
          <img
            className="notificare__android-lock-screen-notification-media-image"
            src={notification.attachments?.[0].uri}
            alt="Media icon"
          />
        </div>
      )}
    </div>
  );
}

export interface AndroidLockScreenPushProps {
  notification: NotificareNotificationSchema;
  appName: string;
  appIcon: string;
  expanded: boolean;
}
