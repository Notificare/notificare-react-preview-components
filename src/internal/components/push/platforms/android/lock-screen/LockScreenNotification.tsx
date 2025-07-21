import { FormattedMessage } from 'react-intl';
import DefaultAppIcon from '~/assets/default-app-icon.svg';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasFirstAttachment } from '~/internal/utils/push-previews/notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

import './LockScreenNotification.css';

export function LockScreenNotification({ notification, expanded }: AndroidLockScreenPushProps) {
  const application = useApplication();

  return (
    <div
      className="notificare__push__android__lock-screen"
      data-testid="android-lock-screen-notification"
    >
      <div className="notificare__push__android__lock-screen__app-icon">
        {application.icon ? (
          <img
            className="notificare__push__android__lock-screen__app-icon-image"
            alt="App icon"
            src={application.icon}
          />
        ) : (
          <DefaultAppIcon className="notificare__push__android__lock-screen__default-app-icon" />
        )}
      </div>
      <div className="notificare__push__android__lock-screen__text-content">
        <div
          className={`notificare__push__android__lock-screen__text-content-top ${hasFirstAttachment(notification) && !expanded ? 'notificare__push__android__lock-screen__text-content-top--has-media' : ''}`}
        >
          <div className="notificare__push__android__lock-screen__title-and-subtitle">
            <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--title">
              {!expanded ? notification.title || application.name : application.name}
            </p>
            {notification.subtitle && !hasFirstAttachment(notification) && (
              <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--subtitle">
                {notification.subtitle}
              </p>
            )}
          </div>
          <p className="notificare__push__android__lock-screen__text notificare__push__android__lock-screen__text--time">
            <FormattedMessage
              id="preview.android.lockscreen.time"
              defaultMessage={PUSH_TRANSLATIONS['preview.android.lockscreen.time']}
            />
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
          <img
            className="notificare__push__android__lock-screen__expanded-media"
            src={notification.attachments?.[0].uri}
            alt="Expanded media"
            data-testid="android-lock-screen-notification-expanded-media"
          />
        )}
      </div>

      {hasFirstAttachment(notification) && !expanded && (
        <img
          className="notificare__push__android__lock-screen__media"
          src={notification.attachments?.[0].uri}
          alt="Media icon"
          data-testid="android-lock-screen-notification-media"
        />
      )}
    </div>
  );
}

export interface AndroidLockScreenPushProps {
  notification: NotificareNotificationSchema;
  expanded: boolean;
}
