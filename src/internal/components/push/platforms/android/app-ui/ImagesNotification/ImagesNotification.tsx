import './ImagesNotification.css';
import { useApplication } from '../../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../../../utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

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
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Image' }>;
}
