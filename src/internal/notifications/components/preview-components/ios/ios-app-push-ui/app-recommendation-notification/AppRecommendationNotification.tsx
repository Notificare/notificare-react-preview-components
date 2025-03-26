import './AppRecommendationNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import AppRecommendation from '../app-recommendation/AppRecommendation';

export default function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  return (
    <>
      <div className="notificare__ios-app-push-ui-app-recommendation-notification-bar">Done</div>
      <AppRecommendation content={notification.content[0]} />
    </>
  );
}

interface AppRecommendationNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Store' }>;
}
