import './ImagesNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import TitleBar from '../TitleBar/TitleBar';

export default function ImagesNotification({ notification, appName }: ImagesNotificationProps) {
  return (
    <div data-testid="ios-app-ui-images-notification">
      <TitleBar
        appName={appName}
        title={notification.title}
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

interface ImagesNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Image' }>;
  appName: string;
}
