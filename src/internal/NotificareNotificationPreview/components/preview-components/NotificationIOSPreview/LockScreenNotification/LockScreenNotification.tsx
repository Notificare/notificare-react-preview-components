import './LockScreenNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';

export default function LockScreenNotification(props: IOSLockScreenPushProps) {
  const { notification, appName, appIcon, expanded } = props;

  return (
    <div className="notificare__push__ios__lock-screen" data-testid="ios-lock-screen-notification">
      <div className="notificare__push__ios__lock-screen__main-content">
        <div className="notificare__push__ios__lock-screen__app-icon">
          <img
            className="notificare__push__ios__lock-screen__app-icon-image"
            alt="App icon"
            src={appIcon}
          />
        </div>
        <div className="notificare__push__ios__lock-screen__text-content">
          <div className="notificare__push__ios__lock-screen__title-and-time">
            <p
              className={`notificare__push__ios__lock-screen__text ${!expanded ? 'notificare__push__ios__lock-screen__text--title-or-subtitle' : 'notificare__push__ios__lock-screen__text--expanded-title-or-subtitle'}`}
            >
              {notification.title || appName}
            </p>

            <p className="notificare__push__ios__lock-screen__text notificare__push__ios__lock-screen__text--time">
              Now
            </p>
          </div>

          {notification.subtitle && (
            <p
              className={`notificare__push__ios__lock-screen__text ${!expanded ? 'notificare__push__ios__lock-screen__text--title-or-subtitle' : 'notificare__push__ios__lock-screen__text--expanded-title-or-subtitle'}`}
            >
              {notification.subtitle}
            </p>
          )}

          <div className="notificare__push__ios__lock-screen__message-and-media">
            <p
              className={`notificare__push__ios__lock-screen__text ${hasFirstAttachment(notification) && !expanded ? 'notificare__push__ios__lock-screen__text--message-with-media' : 'notificare__push__ios__lock-screen__text--message-without-media'}`}
            >
              {notification.message}
            </p>

            {hasFirstAttachment(notification) && !expanded && (
              <img
                className="notificare__push__ios__lock-screen__media-image"
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
          className="notificare__push__ios__lock-screen__expanded-media"
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
