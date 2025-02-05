import React from 'react';
import '../../../preset.css';
import './AndroidLockScreenPush.css';
import { hasFirstAttachment } from '../../../helpers/hasFirstAttachment';
import { BasePushMessageProps } from '../../../models/notification';
import AndroidAppIcon from '../../shared/android-app-icon/AndroidAppIcon';

interface AndroidLockScreenPushMessageProps {
  notification: BasePushMessageProps;
  appName: string;
  appIcon: string;
}

export default function AndroidLockScreenPush(props: AndroidLockScreenPushMessageProps) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <div className="notificare__android-lock-screen-push">
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
  );
}
