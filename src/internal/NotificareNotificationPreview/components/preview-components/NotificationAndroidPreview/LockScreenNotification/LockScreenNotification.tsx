import './LockScreenNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';

export default function LockScreenNotification({
  notification,
  appName,
  appIcon,
  expanded,
}: AndroidLockScreenPushProps) {
  return (
    <div
      className="notificare__push__android__lock-screen"
      data-testid="android-lock-screen-notification"
    >
      <div className="notificare__push__android__lock-screen__app-icon">
        <img
          className="notificare__push__android__lock-screen__app-icon-image"
          alt="App icon"
          src={appIcon}
        />
      </div>
      <div className="notificare__push__android__lock-screen__text-content">
        <div className="notificare__push__android__lock-screen__text-content-top">
          <div
            className={`notificare__push__android__lock-screen__title-and-subtitle ${hasFirstAttachment(notification) && !expanded ? 'notificare__push__android__lock-screen__title-and-subtitle--has-media' : ''}`}
          >
            <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--title">
              {!expanded ? notification.title || appName : appName}
            </p>
            {notification.subtitle && !hasFirstAttachment(notification) && (
              <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--subtitle">
                {notification.subtitle}
              </p>
            )}
          </div>
          <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--time">
            now
          </p>
        </div>

        {expanded && (
          <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--expanded-title">
            {notification.title}
          </p>
        )}

        <p
          className={`notificare__push__android__lock-screen__text ${expanded ? 'notificare__push__android__lock-screen__text--expanded-message' : ''} ${hasFirstAttachment(notification) && !expanded ? 'notificare__push__android__lock-screen__text--message-with-media' : 'notificare__push__android__lock-screen__text--message-without-media'}`}
        >
          {notification.message}
        </p>

        {hasFirstAttachment(notification) && expanded && (
          <div
            className="notificare__push__android__lock-screen__expanded-media"
            data-testid="android-lock-screen-notification-expanded-media"
          >
            <img
              className="notificare__push__android__lock-screen__expanded-media-image"
              src={notification.attachments?.[0].uri}
              alt="Expanded media"
            />
          </div>
        )}
      </div>

      {hasFirstAttachment(notification) && !expanded && (
        <div
          className="notificare__push__android__lock-screen__media"
          data-testid="android-lock-screen-notification-media"
        >
          <img
            className="notificare__push__android__lock-screen__media-image"
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
