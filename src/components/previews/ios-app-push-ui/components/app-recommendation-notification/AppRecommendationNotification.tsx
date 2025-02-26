import './AppRecommendationNotification.css';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import AppRecommendation from '../app-recommendation/AppRecommendation';

interface AppRecommendationNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Store' }>;
}

export default function AppRecommendationNotification(props: AppRecommendationNotificationProps) {
  const { notification } = props;

  return (
    <IOSPhoneBackground theme="dark">
      <div className="notificare__ios-app-push-ui-app-recommendation-notification-bar">Done</div>
      <AppRecommendation content={notification.content[0]} />
    </IOSPhoneBackground>
  );
}
