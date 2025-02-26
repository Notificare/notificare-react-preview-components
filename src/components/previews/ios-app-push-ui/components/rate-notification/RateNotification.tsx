import './RateNotification.css';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';

interface RateAppNotificationProps {
  appName: string;
}

export default function RateNotification(props: RateAppNotificationProps) {
  const { appName } = props;

  return (
    <IOSPhoneBackground theme="dark">
      <div className="notificare__ios-app-push-ui-rate-notification">
        <div className="notificare__ios-app-push-ui-rate-notification-wrapper">
          <p className="notificare__ios-app-push-ui-rate-notification-header">{appName}</p>

          <div className="notificare__ios-app-push-ui-rate-notification-action">
            Yes, I&#39;ll Rate Now
          </div>
          <div className="notificare__ios-app-push-ui-rate-notification-action">No, Thanks</div>
        </div>
      </div>
    </IOSPhoneBackground>
  );
}
