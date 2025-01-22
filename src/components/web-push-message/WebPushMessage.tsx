import React, { useState } from 'react';
import './WebPushMessage.css';
import { WebPushMessageProps } from './WebPushMessage.types';

export default function WebPushMessage(props: WebPushMessageProps) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="notificare">
      <div className={'notificare__web-push-message'}>
        <button className={'notificare__web-push-message-expand-button'} onClick={toggleOpen}>
          {props.attachments?.[0] && !open && (
            <svg
              className={'notificare__web-push-message-expand-button-svg'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          )}
          {props.attachments?.[0] && open && (
            <svg
              className={'notificare__web-push-message-expand-button-svg'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          )}
        </button>
        {props.attachments?.[0] && open && (
          <div className="notificare__web-push-message-expanded-media">
            <img
              className={'notificare__web-push-message-expanded-media-image'}
              src={props.attachments[0].uri}
              alt="Expanded media"
            />
          </div>
        )}
        <div className={'notificare__web-push-message-main-content'}>
          <div className={'notificare__web-push-message-browser-icon'}>
            <div className={'notificare__web-push-message-browser-icon-background'}>
              <img
                className={'notificare__web-push-message-browser-icon-image'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg'
                }
                alt="Google Chrome Icon"
              />
            </div>
          </div>
          <div className={'notificare__web-push-message-text-content'}>
            <p className={'notificare__web-push-message-title'}>{props.title}</p>
            <p className={'notificare__web-push-message-domain'}>{'domain.notificare'}</p>
            <p className={'notificare__web-push-message-message'}>{props.message}</p>
          </div>
          {props.attachments?.[0] && !open && (
            <div className="notificare__web-push-message-small-media">
              <img
                className={'notificare__web-push-message-small-media-image'}
                src={props.attachments[0].uri}
                alt="Small media icon"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
