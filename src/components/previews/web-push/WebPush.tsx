import React, { useState } from 'react';
import '../../../preset.css';
import './WebPush.css';
import { hasFirstAttachment } from '../../../helpers/hasFirstAttachment';
import { BasePushMessageProps } from '../../../models/notification';
import ExpandButton from './components/expand-button/ExpandButton';

interface WebPushProps {
  notification: BasePushMessageProps;
  appName: string;
  appDomain: string;
}

export default function WebPush(props: WebPushProps) {
  const { notification, appName, appDomain } = props;

  const [open, setOpen] = useState<boolean>(false);

  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="notificare">
      <div className="notificare__web-push">
        {hasFirstAttachment(notification) && (
          <>
            <div className="notificare__web-push-expand-button-container">
              <ExpandButton open={open} onToggle={onToggle} />
            </div>

            {open && (
              <img
                className="notificare__web-push-expanded-media"
                src={notification.attachments?.[0].uri}
                alt="Expanded media"
              />
            )}
          </>
        )}

        <div className="notificare__web-push-main-content">
          <div className="notificare__web-push-browser-icon">
            <div className="notificare__web-push-browser-icon-background">
              <img
                className="notificare__web-push-browser-icon-image"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
                alt="Google Chrome Icon"
              />
            </div>
          </div>

          <div className="notificare__web-push-text-content">
            <p className="notificare__web-push-text notificare__web-push-text--title">
              {notification.title || appName}
            </p>
            <p className="notificare__web-push-text notificare__web-push-text--domain">
              {appDomain}
            </p>
            <p className="notificare__web-push-text notificare__web-push-text--message">
              {notification.message}
            </p>
          </div>

          {hasFirstAttachment(notification) && !open && (
            <img
              className="notificare__web-push-small-media"
              src={notification.attachments?.[0].uri}
              alt="Small media icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
