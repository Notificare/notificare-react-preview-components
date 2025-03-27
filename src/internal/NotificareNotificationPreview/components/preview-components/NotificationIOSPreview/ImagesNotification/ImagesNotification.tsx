import './ImagesNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import TitleBar from '../TitleBar/TitleBar';

export default function ImagesNotification({ notification, appName }: ImagesNotificationProps) {
  return (
    <>
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <div className="notificare__ios-app-ui-images-rich-content">
        <div className="notificare__ios-app-ui-image-slider">
          {notification.content.map((image, index) => (
            <img
              key={index}
              className="notificare__ios-app-ui-image-slider-item"
              src={image.data}
              alt="Slider image"
            />
          ))}
        </div>
      </div>
    </>
  );
}

interface ImagesNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Image' }>;
  appName: string;
}
