import '../../../../../../preset.css';
import './AndroidLockScreenPush.css';
import { hasFirstAttachment } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';

export default function AndroidLockScreenPush({
  notification,
  appName,
  appIcon,
  expanded,
}: AndroidLockScreenPushProps) {
  return (
    <div className="notificare__android-lock-screen-push">
      <div className="notificare__android-lock-screen-push-wrapper">
        <div className="notificare__android-lock-screen-push-app-icon">
          <img
            className="notificare__android-lock-screen-push-app-icon-image"
            alt="App icon"
            src={appIcon}
          />
        </div>
        <div className="notificare__android-lock-screen-push-text-content">
          <div className="notificare__android-lock-screen-push-text-content-top">
            <div
              className={`notificare__android-lock-screen-push-title-and-subtitle ${hasFirstAttachment(notification) && !expanded && 'notificare__android-lock-screen-push-title-and-subtitle--has-media'}`}
            >
              <p className="notificare__android-lock-screen-push-text notificare__android-lock-screen-push-text--title">
                {!expanded ? notification.title || appName : appName}
              </p>
              {notification.subtitle && !hasFirstAttachment(notification) && (
                <p className="notificare__android-lock-screen-push-text notificare__android-lock-screen-push-text--subtitle">
                  {notification.subtitle}
                </p>
              )}
            </div>
            <p className="notificare__android-lock-screen-push-text notificare__android-lock-screen-push-text--time">
              now
            </p>
          </div>

          {expanded && (
            <p className="notificare__android-lock-screen-push-text notificare__android-lock-screen-push-text--expanded-title">
              {notification.title}
            </p>
          )}

          <p
            className={`notificare__android-lock-screen-push-text ${hasFirstAttachment(notification) ? 'notificare__android-lock-screen-push-text--message-with-media' : 'notificare__android-lock-screen-push-text--message-without-media'}`}
          >
            {notification.message}
          </p>

          {hasFirstAttachment(notification) && expanded && (
            <div className="notificare__android-lock-screen-push-expanded-media">
              <img
                className="notificare__android-lock-screen-push-expanded-media-image"
                src={notification.attachments?.[0].uri}
                alt="Expanded media"
              />
            </div>
          )}
        </div>

        {hasFirstAttachment(notification) && !expanded && (
          <div className="notificare__android-lock-screen-push-media">
            <img
              className="notificare__android-lock-screen-push-media-image"
              src={notification.attachments?.[0].uri}
              alt="Media icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export interface AndroidLockScreenPushProps {
  notification: NotificareNotificationSchema;
  appName: string;
  appIcon: string;
  expanded: boolean;
}
