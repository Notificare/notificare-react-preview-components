import { FormattedMessage } from 'react-intl';
import DefaultAppIcon from '~/assets/default-app-icon.svg';
import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasFirstAttachment } from '~/internal/utils/push-previews/notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

import './LockScreenNotification.css';

export function LockScreenNotification({ notification, expanded }: IOSLockScreenPushProps) {
  const application = useApplication();

  return (
    <div className="notificare__push__ios__lock-screen" data-testid="ios-lock-screen-notification">
      <div className="notificare__push__ios__lock-screen__main-content">
        <div className="notificare__push__ios__lock-screen__app-icon">
          {application.icon ? (
            <img
              className="notificare__push__ios__lock-screen__app-icon-image"
              alt="App icon"
              src={application.icon}
            />
          ) : (
            <DefaultAppIcon className="notificare__push__ios__lock-screen__default-app-icon" />
          )}
        </div>
        <div className="notificare__push__ios__lock-screen__text-content">
          <div className="notificare__push__ios__lock-screen__title-and-time">
            <p
              className={`notificare__push__ios__lock-screen__text ${!expanded ? 'notificare__push__ios__lock-screen__text--title-or-subtitle' : 'notificare__push__ios__lock-screen__text--expanded-title-or-subtitle'}`}
            >
              {notification.title || application.name}
            </p>

            <p className="notificare__push__ios__lock-screen__text notificare__push__ios__lock-screen__text--time">
              <FormattedMessage
                id="preview.ios.lockScreen.time"
                defaultMessage={PUSH_TRANSLATIONS['preview.ios.lockScreen.time']}
              />
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

export interface IOSLockScreenPushProps {
  notification: VerifiedNotification;
  expanded: boolean;
}
