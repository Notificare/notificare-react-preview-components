import './AppRecommendationNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import Webshot from '../../../../shared/webshot/Webshot';
import NavigationBar from '../navigation-bar/NavigationBar';

interface AppRecommendationNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Store' }>;
  appName: string;
}

function getUrlByContentType(
  content: Extract<BasePushMessage, { type: 're.notifica.notification.Store' }>['content'][number],
) {
  switch (content.type) {
    case 're.notifica.content.GooglePlayDetails':
      return `https://play.google.com/store/apps/details?id=${content.data}`;

    case 're.notifica.content.GooglePlayDeveloper':
      return `https://play.google.com/store/apps/dev?id=${content.data}`;

    case 're.notifica.content.GooglePlayCollection':
      return `https://play.google.com/store/apps/collection/${content.data}`;

    case 're.notifica.content.GooglePlaySearch':
      return `https://play.google.com/store/search?q=${content.data}&c=apps`;

    default:
      return '';
  }
}

export default function AppRecommendationNotification(props: AppRecommendationNotificationProps) {
  const { notification, appName } = props;

  const url = getUrlByContentType(notification.content[0]);

  return (
    <AndroidPhoneBackground theme="light">
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />

      <Webshot url={url} platform="Android" width={339} height={550} />
    </AndroidPhoneBackground>
  );
}
