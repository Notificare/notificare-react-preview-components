import './TextAlertNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';

export default function TextAlertNotification({
  notification,
  appName,
  appIcon,
}: TextAlertNotificationProps) {
  return (
    <div
      className="notificare__push__android__alert__app-ui"
      data-testid="android-app-ui-text-alert-notification"
    >
      <div className="notificare__push__android__alert__app-ui__wrapper">
        <div className="notificare__push__android__alert__app-ui__header">
          <div className="notificare__push__android__alert__app-ui__app-icon">
            <img
              className="notificare__push__android__alert__app-ui__app-icon-image"
              alt="App icon"
              src={appIcon}
            />
          </div>
          <p className="notificare__push__android__alert__app-ui__title">
            {notification.title || appName}
          </p>
        </div>
        <p className="notificare__push__android__alert__app-ui__message">{notification.message}</p>

        {hasActions(notification) && (
          <div className="notificare__push__android__alert__app-ui__actions">
            {notification.actions?.map((action, index) => (
              <p
                key={index}
                className="notificare__push__android__alert__app-ui__action-label"
                data-testid={`android-app-ui-text-alert-notification-action-${index}`}
              >
                {action.label}
              </p>
            ))}
            <p
              className="notificare__push__android__alert__app-ui__cancel-label"
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
