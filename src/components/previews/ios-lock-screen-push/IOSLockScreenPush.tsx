import React from 'react';
import '../../../preset.css';
import './IOSLockScreenPush.css';
import { hasFirstAttachment } from '../../../helpers/hasFirstAttachment';
import { BasePushMessageProps } from '../../../models/notification';
import IosAppIcon from '../../shared/ios-app-icon/IOSAppIcon';

interface IOSLockScreenPushMessageProps {
  notification: BasePushMessageProps;
  appName: string;
  appIcon: string;
  extended: boolean;
}

export default function IOSLockScreenPush(props: IOSLockScreenPushMessageProps) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <div className="notificare__ios-lock-screen-push">
        <div className="notificare__ios-lock-screen-push-wrapper">
          <IosAppIcon appIcon={appIcon} />
          <div className="notificare__ios-lock-screen-push-text-content">
            <div className="notificare__ios-lock-screen-push-title-and-time">
              <p className="notificare__ios-lock-screen-push-text notificare__ios-lock-screen-push-text--title-or-subtitle">
                {notification.title || appName}
              </p>

              <p className="notificare__ios-lock-screen-push-text notificare__ios-lock-screen-push-text--time">
                Now
              </p>
            </div>

            {notification.subtitle && (
              <p className="notificare__ios-lock-screen-push-text notificare__ios-lock-screen-push-text--title-or-subtitle">
                {notification.subtitle}
              </p>
            )}

            <div className="notificare__ios-lock-screen-push-message-and-media">
              <p
                className={`notificare__ios-lock-screen-push-text ${hasFirstAttachment(notification) ? 'notificare__ios-lock-screen-push-text--message-with-media' : 'notificare__ios-lock-screen-push-text--message-without-media'}`}
              >
                {notification.message}
              </p>

              {hasFirstAttachment(notification) && (
                <img
                  className="notificare__ios-lock-screen-push-media-image"
                  src={notification.attachments?.[0].uri}
                  alt="Media icon"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
