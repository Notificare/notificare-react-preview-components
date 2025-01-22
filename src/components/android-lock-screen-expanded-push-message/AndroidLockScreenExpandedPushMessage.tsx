import React from 'react';
import './AndroidLockScreenExpandedPushMessage.css';
import { AndroidLockScreenExpandedPushMessageProps } from './AndroidLockScreenExpandedPushMessage.types';

export default function AndroidLockScreenExpandedPushMessage(
  props: AndroidLockScreenExpandedPushMessageProps,
) {
  return (
    <div className="notificare">
      <div className={'notificare__android-lock-screen-expanded-push-message'}>
        <div className={'notificare__android-lock-screen-expanded-push-message-app-icon'}>
          <img
            className={'notificare__android-lock-screen-expanded-push-message-app-icon-image'}
            alt={'App icon'}
            src={
              'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063'
            }
          />
        </div>
        <div className={'notificare__android-lock-screen-expanded-push-message-text-content'}>
          <div className={'notificare__android-lock-screen-expanded-push-message-text-content-top'}>
            <div
              className={`notificare__android-lock-screen-expanded-push-message-domain-and-subtitle`}
            >
              <p className={'notificare__android-lock-screen-expanded-push-message-domain'}>
                Demo Notificare
              </p>
              {props.subtitle && !props.attachments?.[0] && (
                <p className={'notificare__android-lock-screen-expanded-push-message-subtitle'}>
                  {props.subtitle}
                </p>
              )}
            </div>
            <p className={'notificare__android-lock-screen-expanded-push-message-time'}> now </p>
          </div>
          <p className={'notificare__android-lock-screen-expanded-push-message-title'}>
            {props.title}
          </p>
          <p className={`notificare__android-lock-screen-expanded-push-message-message`}>
            {props.message}
          </p>
          {props.attachments?.[0] && (
            <div className="notificare__android-lock-screen-expanded-push-message-expanded-media">
              <img
                className={
                  'notificare__android-lock-screen-expanded-push-message-expanded-media-image'
                }
                src={props.attachments[0].uri}
                alt="Expanded media"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
