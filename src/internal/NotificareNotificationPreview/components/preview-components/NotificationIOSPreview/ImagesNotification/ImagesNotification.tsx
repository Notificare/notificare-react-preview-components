import './ImagesNotification.css';
import { useApplication } from '../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';
import { TitleBar } from '../TitleBar/TitleBar';

export function ImagesNotification({ notification }: ImagesNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="ios-app-ui-images-notification">
      <TitleBar
        title={notification.title || application.name}
        showOptions={hasActions(notification)}
      />
      <div className="notificare__push__ios__image__app-ui__rich-content">
        <div className="notificare__push__ios__image__app-ui__slider">
          {notification.content.map((image, index) => (
            <img
              key={index}
              className="notificare__push__ios__image__app-ui__slider-item"
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
