import './ImagesNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function ImagesNotification({ notification, appName }: ImagesNotificationProps) {
  return (
    <div data-testid="android-app-ui-images-notification">
      <NavigationBar
        appName={appName}
        title={notification.title}
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

interface ImagesNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Image' }>;
  appName: string;
}
