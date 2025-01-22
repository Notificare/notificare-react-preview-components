import React from 'react';
import './AndroidAppPushUIMessage.css';
import { AndroidAppPushUIMessageProps } from './AndroidAppPushUIMessage.types';

export default function AndroidAppPushUIMessage(props: AndroidAppPushUIMessageProps) {
  return (
    <div className="notificare">
      <div className={'notificare__android-app-push-ui-message'}>
        <div className={'notificare__android-app-push-ui-message-header'}>
          <div className={'notificare__android-app-push-ui-message-app-icon'}>
            <img
              className={'notificare__android-app-push-ui-message-app-icon-image'}
              alt={'App icon'}
              src={
                'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063'
              }
            />
          </div>
          <p className={'notificare__android-app-push-ui-message-title'}>{props.title}</p>
        </div>
        <p className={'notificare__android-app-push-ui-message-message'}>{props.message}</p>
      </div>
    </div>
  );
}
