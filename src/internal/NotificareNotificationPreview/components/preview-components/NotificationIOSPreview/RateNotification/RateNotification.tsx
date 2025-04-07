import './RateNotification.css';

interface RateAppNotificationProps {
  appName: string;
}

export default function RateNotification({ appName }: RateAppNotificationProps) {
  return (
    <div
      className="notificare__ios-app-push-ui-rate-notification"
      data-testid="ios-app-ui-rate-notification"
    >
      <div className="notificare__ios-app-push-ui-rate-notification-wrapper">
        <p className="notificare__ios-app-push-ui-rate-notification-header">{appName}</p>

        <div className="notificare__ios-app-push-ui-rate-notification-action">
          Yes, I&#39;ll Rate Now
        </div>
        <div className="notificare__ios-app-push-ui-rate-notification-action">No, Thanks</div>
      </div>
    </div>
  );
}
