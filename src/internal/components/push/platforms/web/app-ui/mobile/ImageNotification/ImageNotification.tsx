import './ImageNotification.css';
import { NotificareNotificationSchema } from '../../../../../../../schemas/notificare-notification/notificare-notification-schema';

export function ImageNotification({ notification }: ImageNotificationProps) {
  return (
    <div
      className="notificare__web__phone__image__app-ui__image-slider"
      data-testid="web-mobile-app-ui-image-notification"
    >
      {notification.content.map((image, index) => (
        <img
          key={index}
          className="notificare__web__phone__image__app-ui__image-slider-item"
          src={image.data}
          alt="Slider image"
        />
      ))}
    </div>
  );
}

export interface ImageNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Image' }>;
}
