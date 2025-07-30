import { VerifiedNotification } from '~/internal/schemas/notificare-notification';

import './ImageNotification.css';

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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Image' }>;
}
