import './TextAlertNotification.css';
import { hasFirstAttachment } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';

interface TextAlertNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Alert' }>;
  appName: string;
  appIcon: string;
}

export default function TextAlertNotification(props: TextAlertNotificationProps) {
  const { notification, appName, appIcon } = props;

  return (
    <IOSPhoneBackground theme="dark">
      <div className="notificare__ios-web-push-text-alert-notification">
        <div className="notificare__ios-web-push-text-alert-notification-background">
          <div className="notificare__ios-web-push-text-alert-notification-header">
            <img
              className="notificare__ios-web-push-text-alert-notification-app-icon"
              src={appIcon}
              alt="App icon"
            />
            <p className="notificare__ios-web-push-text-alert-notification-app-name">{appName}</p>
            <button className="notificare__ios-web-push-text-alert-notification-close-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="notificare__ios-web-push-text-alert-notification-close-button-icon"
              >
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"></path>
              </svg>
            </button>
          </div>

          {hasFirstAttachment(notification) && (
            <img
              className="notificare__ios-web-push-text-alert-notification-media"
              src={notification.attachments?.[0].uri}
              alt="Notification attachment"
            />
          )}

          <div>
            <p className="notificare__ios-web-push-text-alert-notification-title">
              {notification.title}
            </p>
            <p className="notificare__ios-web-push-text-alert-notification-subtitle">
              {notification.subtitle}
            </p>
            <p className="notificare__ios-web-push-text-alert-notification-message">
              {notification.message}
            </p>
          </div>

          {notification.actions && (
            <div
              className={`${notification.actions.length >= 3 ? 'notificare__ios-web-push-text-alert-notification-actions-column' : 'notificare__ios-web-push-text-alert-notification-actions-row'}`}
            >
              {notification.actions.map((action, index) => (
                <button
                  key={index}
                  className={`notificare__ios-web-push-text-alert-notification-action ${index === 0 ? 'notificare__ios-web-push-text-alert-notification-action--primary' : 'notificare__ios-web-push-text-alert-notification-action--secondary'}`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </IOSPhoneBackground>
  );
}
