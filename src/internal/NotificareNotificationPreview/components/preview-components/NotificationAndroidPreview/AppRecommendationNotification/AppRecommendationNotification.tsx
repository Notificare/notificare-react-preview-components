import './AppRecommendationNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import Webshot from '../../../shared-components/Webshot/Webshot';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function AppRecommendationNotification({
  notification,
  appName,
}: AppRecommendationNotificationProps) {
  return (
    <>
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <Webshot
        url={getUrlByContentType(notification.content[0])}
        platform="Android"
        width={339}
        height={580}
      />
    </>
  );
}

interface AppRecommendationNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Store' }>;
  appName: string;
}

function getUrlByContentType(
  content: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Store' }
  >['content'][number],
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
