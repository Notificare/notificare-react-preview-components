import './ImagesNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import NavigationBar from '../navigation-bar/NavigationBar';

interface ImagesNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Image' }>;
  appName: string;
}

export default function ImagesNotification(props: ImagesNotificationProps) {
  const { notification, appName } = props;

  return (
    <AndroidPhoneBackground theme="light">
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <div className="notificare__android-app-push-ui-images-rich-content">
        <div className="notificare__android-app-push-ui-image-slider">
          {notification.content.map((image, index) => (
            <img
              key={index}
              className="notificare__android-app-push-ui-image-slider-item"
              src={image.data}
              alt="Slider image"
            />
          ))}
        </div>
      </div>
    </AndroidPhoneBackground>
  );
}
