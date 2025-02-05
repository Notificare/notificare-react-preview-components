import React from 'react';
import '../../../preset.css';
import './AndroidLockScreenExpandedPushMessage.css';
import { hasFirstAttachment } from '../../../helpers/hasFirstAttachment';
import { BasePushMessageProps } from '../../../models/notification';
import AndroidAppIcon from '../../shared/android-app-icon/AndroidAppIcon';

interface AndroidLockScreenExpandedPushMessageProps {
  notification: BasePushMessageProps;
  appName: string;
  appIcon: string;
}

export default function AndroidLockScreenExpandedPushMessage(
  props: AndroidLockScreenExpandedPushMessageProps,
) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <div className="notificare__android-lock-screen-expanded-push">
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
  );
}
