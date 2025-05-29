import './RateNotification.css';

export function RateNotification({ appName, title }: RateAppNotificationProps) {
  return (
    <div className="notificare__push__ios__rate__app-ui" data-testid="ios-app-ui-rate-notification">
      <div className="notificare__push__ios__rate__app-ui__wrapper">
        <p className="notificare__push__ios__rate__app-ui__header">{title || appName}</p>

        <div className="notificare__push__ios__rate__app-ui__action">Yes, I&#39;ll Rate Now</div>
        <div className="notificare__push__ios__rate__app-ui__action">No, Thanks</div>
      </div>
    </div>
  );
}

export interface RateAppNotificationProps {
  appName: string;
  title: string | undefined;
}
