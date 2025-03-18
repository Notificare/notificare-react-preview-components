import './MapNotification.css';
import { getMarkersFromNotification, hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import MapRichContent from '../../../../shared/map-rich-content/MapRichContent';
import NavigationBar from '../navigation-bar/NavigationBar';

interface MapNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Map' }>;
  appName: string;
}

export default function MapNotification(props: MapNotificationProps) {
  const { notification, appName } = props;

  return (
    <AndroidPhoneBackground theme="light">
      <NavigationBar appName={appName} hasActions={hasActions(notification)} />
      <MapRichContent
        markers={getMarkersFromNotification(notification)}
        width="100%"
        height="580px"
      />
    </AndroidPhoneBackground>
  );
}
