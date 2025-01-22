import React from 'react';
import './AndroidLockScreenPushMessage.css';
import { AndroidLockScreenPushMessageProps } from './AndroidLockScreenPushMessage.types';

export default function AndroidLockScreenPushMessage(props: AndroidLockScreenPushMessageProps) {
  return (
    <div className="notificare">
      <div className={'notificare__android-lock-screen-push-message'}>
        <div className={'notificare__android-lock-screen-push-message-app-icon'}>
          <img
            className={'notificare__android-lock-screen-push-message-app-icon-image'}
            alt={'App icon'}
            src={
              'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063'
            }
          />
        </div>
        <div className={'notificare__android-lock-screen-push-message-text-content'}>
          <div className={'notificare__android-lock-screen-push-message-text-content-top'}>
            <div
              className={`notificare__android-lock-screen-push-message-title-and-subtitle ${props.attachments?.[0] ? 'notificare__android-lock-screen-push-message-title-and-subtitle--has-media' : ''}`}
            >
              <p className={'notificare__android-lock-screen-push-message-title'}>{props.title}</p>
              {props.subtitle && !props.attachments?.[0] && (
                <p className={'notificare__android-lock-screen-push-message-subtitle'}>
                  {props.subtitle}
                </p>
              )}
            </div>
            <p className={'notificare__android-lock-screen-push-message-time'}> now </p>
          </div>
          <p
            className={`notificare__android-lock-screen-push-message-message ${props.attachments?.[0] ? 'notificare__android-lock-screen-push-message-message--has-media' : ''}`}
          >
            {props.message}
          </p>
        </div>
        {props.attachments?.[0] && (
          <div className={'notificare__android-lock-screen-push-message-media'}>
            <img
              className={'notificare__android-lock-screen-push-message-media-image'}
              src={props.attachments[0].uri}
              alt="Media icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}
