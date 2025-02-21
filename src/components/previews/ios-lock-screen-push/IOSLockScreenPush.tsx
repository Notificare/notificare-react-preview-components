import React from 'react';
import '../../../preset.css';
import './IOSLockScreenPush.css';
import { hasFirstAttachment } from '../../../helpers/notification-utils';
import { BasePushMessage } from '../../../schemas/notificationSchema';
import IosAppIcon from '../../shared/ios-app-icon/IOSAppIcon';
import IOSPhoneBackground from '../../shared/ios-phone-background/IOSPhoneBackground';

interface IOSLockScreenPushMessageProps {
  notification: BasePushMessage;
  appName: string;
  appIcon: string;
}

export default function IOSLockScreenPush(props: IOSLockScreenPushMessageProps) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <IOSPhoneBackground theme="light">
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
      </IOSPhoneBackground>
    </div>
  );
}
