import React from 'react';
import '../../../preset.css';
import './IOSLockScreenExpandedPush.css';
import { hasFirstAttachment } from '../../../helpers/hasFirstAttachment';
import { BasePushMessageProps } from '../../../models/notification';
import IosAppIcon from '../../shared/ios-app-icon/IOSAppIcon';

interface IOSLockScreenExpandedPushProps {
  notification: BasePushMessageProps;
  appName: string;
  appIcon: string;
}

export default function IOSLockScreenExpandedPush(props: IOSLockScreenExpandedPushProps) {
  const { notification, appName, appIcon } = props;

  return (
    <div className="notificare">
      <div className="notificare__ios-lock-screen-expanded-push">
        <div className="notificare__ios-lock-screen-expanded-push-wrapper">
          <IosAppIcon appIcon={appIcon} />
          <div className="notificare__ios-lock-screen-expanded-push-text-content">
            <div className="notificare__ios-lock-screen-expanded-push-title-and-time">
              <p className="notificare__ios-lock-screen-expanded-push-text notificare__ios-lock-screen-expanded-push-text--title-or-subtitle">
                {notification.title || appName}
              </p>
              <p className="notificare__ios-lock-screen-expanded-push-text notificare__ios-lock-screen-expanded-push-text--time">
                Now
              </p>
            </div>

            {notification.subtitle && (
              <p className="notificare__ios-lock-screen-expanded-push-text notificare__ios-lock-screen-expanded-push-text--title-or-subtitle">
                {notification.subtitle}
              </p>
            )}

            <p className="notificare__ios-lock-screen-expanded-push-text notificare__ios-lock-screen-expanded-push-text--message">
              {notification.message}
            </p>
          </div>
        </div>

        {hasFirstAttachment(notification) && (
          <img
            className="notificare__ios-lock-screen-expanded-push-media-image"
            src={notification.attachments?.[0].uri}
            alt="Media icon"
          />
        )}
      </div>
    </div>
  );
}
