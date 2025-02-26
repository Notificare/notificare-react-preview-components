import './MapNotification.css';
import { getMarkersFromNotification, hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import MapRichContent from '../../../../shared/map-rich-content/MapRichContent';
import TitleBar from '../title-bar/TitleBar';

interface MapNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Map' }>;
  appName: string;
}

export default function MapNotification(props: MapNotificationProps) {
  const { notification, appName } = props;

  return (
    <IOSPhoneBackground theme="dark">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <MapRichContent
        markers={getMarkersFromNotification(notification)}
        width="100%"
        height="601px"
      />
    </IOSPhoneBackground>
  );
}
