import './RateNotification.css';

export default function RateNotification({ appName, title }: RateAppNotificationProps) {
  return (
    <div
      className="notificare__ios-app-ui-rate-notification"
      data-testid="ios-app-ui-rate-notification"
    >
      <div className="notificare__ios-app-ui-rate-notification-wrapper">
        <p className="notificare__ios-app-ui-rate-notification-header">{title || appName}</p>

        <div className="notificare__ios-app-ui-rate-notification-action">
          Yes, I&#39;ll Rate Now
        </div>
        <div className="notificare__ios-app-ui-rate-notification-action">No, Thanks</div>
      </div>
    </div>
  );
}

interface RateAppNotificationProps {
  appName: string;
  title: string | undefined;
}
