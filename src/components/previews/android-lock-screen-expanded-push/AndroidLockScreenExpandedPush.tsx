import '../../../preset.css';
import './AndroidLockScreenExpandedPush.css';
import { hasFirstAttachment } from '../../../helpers/notification-utils';
import { BasePushMessage } from '../../../schemas/basePushMessageSchema';
import AndroidAppIcon from '../../shared/android-app-icon/AndroidAppIcon';
import AndroidPhoneBackground from '../../shared/android-phone-background/AndroidPhoneBackground';

interface AndroidLockScreenExpandedPushMessageProps {
  notification: BasePushMessage;
  appName: string;
  appIcon: string;
}

export default function AndroidLockScreenExpandedPush(
  props: AndroidLockScreenExpandedPushMessageProps,
) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <AndroidPhoneBackground theme="light">
        <div className="notificare__android-lock-screen-expanded-push">
          <div className="notificare__android-lock-screen-expanded-push-wrapper">
            <AndroidAppIcon appIcon={appIcon} />
            <div className="notificare__android-lock-screen-expanded-push-text-content">
              <div className="notificare__android-lock-screen-expanded-push-text-content-top">
                <div className="notificare__android-lock-screen-expanded-push-app-name-and-subtitle">
                  <p className="notificare__android-lock-screen-expanded-push-text notificare__android-lock-screen-expanded-push-text--app-name">
                    {appName}
                  </p>
                  {notification.subtitle && !hasFirstAttachment(notification) && (
                    <p className="notificare__android-lock-screen-expanded-push-text notificare__android-lock-screen-expanded-push-text--subtitle">
                      {notification.subtitle}
                    </p>
                  )}
                </div>
                <p className="notificare__android-lock-screen-expanded-push-text notificare__android-lock-screen-expanded-push-text--time">
                  now
                </p>
              </div>
              <p className="notificare__android-lock-screen-expanded-push-text notificare__android-lock-screen-expanded-push-text--title">
                {notification.title}
              </p>
              <p className="notificare__android-lock-screen-expanded-push-text notificare__android-lock-screen-expanded-push-text--message">
                {notification.message}
              </p>
              {hasFirstAttachment(notification) && (
                <div className="notificare__android-lock-screen-expanded-push-expanded-media">
                  <img
                    className="notificare__android-lock-screen-expanded-push-expanded-media-image"
                    src={notification.attachments?.[0].uri}
                    alt="Expanded media"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </AndroidPhoneBackground>
    </div>
  );
}
