import './AppRecommendationNotification.css';
import { useApplication } from '../../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { Webshot } from '../../../../../shared/Webshot/Webshot';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="android-app-ui-app-recommendation-notification">
      <NavigationBar title={notification.title || application.name} showOptions={false} />
      <Webshot
        url={getUrlByContentType(notification.content[0])}
        platform="Android"
        width={338}
        height={570}
      />
    </div>
  );
}

export interface AppRecommendationNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Store' }>;
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
