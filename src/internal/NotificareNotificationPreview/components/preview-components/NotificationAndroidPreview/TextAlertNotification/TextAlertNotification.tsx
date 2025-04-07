import './TextAlertNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';

export default function TextAlertNotification({
  notification,
  appName,
  appIcon,
}: TextAlertNotificationProps) {
  return (
    <div
      className="notificare__android-app-push-ui-text-alert-notification"
      data-testid="android-app-ui-text-alert-notification"
    >
      <div className="notificare__android-app-push-ui-text-alert-notification-wrapper">
        <div className="notificare__android-app-push-ui-text-alert-notification-header">
          <div className="notificare__android-app-push-ui-app-icon">
            <img
              className="notificare__android-app-push-ui-app-icon-image"
              alt="App icon"
              src={appIcon}
            />
          </div>
          <p className="notificare__android-app-push-ui-text-alert-notification-title">
            {notification.title || appName}
          </p>
        </div>
        <p className="notificare__android-app-push-ui-text-alert-notification-message">
          {notification.message}
        </p>

        {hasActions(notification) && (
          <div className="notificare__android-app-push-ui-text-alert-notification-actions">
            {notification.actions?.map((action) => (
              <p
                className="notificare__android-app-push-ui-text-alert-notification-action-label"
                key="action-button-label"
              >
                {action.label}
              </p>
            ))}
            <p
              className="notificare__android-app-push-ui-text-alert-notification-cancel-label"
              key="cancel-button-label"
            >
              Cancel
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface TextAlertNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Alert' }>;
  appName: string;
  appIcon: string;
}
