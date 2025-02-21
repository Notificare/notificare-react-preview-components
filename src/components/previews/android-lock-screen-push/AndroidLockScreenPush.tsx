import React from 'react';
import '../../../preset.css';
import './AndroidLockScreenPush.css';
import { hasFirstAttachment } from '../../../helpers/notification-utils';
import { BasePushMessage } from '../../../schemas/notificationSchema';
import AndroidAppIcon from '../../shared/android-app-icon/AndroidAppIcon';
import AndroidPhoneBackground from '../../shared/android-phone-background/AndroidPhoneBackground';

interface AndroidLockScreenPushMessageProps {
  notification: BasePushMessage;
  appName: string;
  appIcon: string;
}

export default function AndroidLockScreenPush(props: AndroidLockScreenPushMessageProps) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <AndroidPhoneBackground theme="light">
        <div className="notificare__android-lock-screen-push">
          <div className="notificare__android-lock-screen-push-wrapper">
            <AndroidAppIcon appIcon={appIcon} />
            <div className="notificare__android-lock-screen-push-text-content">
              <div className="notificare__android-lock-screen-push-text-content-top">
                <div
                  className={`notificare__android-lock-screen-push-title-and-subtitle ${hasFirstAttachment(notification) && 'notificare__android-lock-screen-push-title-and-subtitle--has-media'}`}
                >
                  <p className="notificare__android-lock-screen-push-text notificare__android-lock-screen-push-text--title">
                    {notification.title ? notification.title : appName}
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
              <p
                className={`notificare__android-lock-screen-push-text ${hasFirstAttachment(notification) ? 'notificare__android-lock-screen-push-text--message-with-media' : 'notificare__android-lock-screen-push-text--message-without-media'}`}
              >
                {notification.message}
              </p>
            </div>

            {hasFirstAttachment(notification) && (
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
      </AndroidPhoneBackground>
    </div>
  );
}
