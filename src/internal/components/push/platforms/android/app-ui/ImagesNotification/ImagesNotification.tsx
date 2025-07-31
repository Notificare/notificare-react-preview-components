import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './ImagesNotification.css';

export function ImagesNotification({ notification }: ImagesNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="android-app-ui-images-notification">
      <NavigationBar
        title={notification.title || application.name}
        showOptions={hasActions(notification)}
      />
      <div className="notificare__push__android__image__app-ui__rich-content">
        <div className="notificare__push__android__image__app-ui__image-slider">
          {notification.content.map((image, index) => (
            <img
              key={index}
              className="notificare__push__android__image__app-ui__image-slider-item"
              src={image.data}
              alt="Slider image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export interface ImagesNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Image' }>;
}
