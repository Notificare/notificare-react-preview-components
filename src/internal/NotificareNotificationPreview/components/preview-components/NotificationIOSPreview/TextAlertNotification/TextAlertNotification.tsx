import './TextAlertNotification.css';
import { hasSingleAction, hasMultipleActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';

export default function TextAlertNotification({
  notification,
  appName,
}: TextAlertNotificationProps) {
  return (
    <div
      className="notificare__push__ios__alert__app-ui"
      data-testid="ios-app-ui-text-alert-notification"
    >
      <div className="notificare__push__ios__alert__app-ui__background">
        <div className="notificare__push__ios__alert__app-ui__title-and-message">
          <p className="notificare__push__ios__alert__app-ui__title">
            {notification.title || appName}
          </p>
          <p className="notificare__push__ios__alert__app-ui__message">{notification.message}</p>
        </div>
        <div className="notificare__push__ios__alert__app-ui__actions">
          {hasSingleAction(notification) ? (
            <div className="notificare__push__ios__alert__app-ui__actions-single">
              <div className="notificare__push__ios__alert__app-ui__single-cancel">Cancel</div>
              <div
                className="notificare__push__ios__alert__app-ui__action notificare__push__ios__alert__app-ui__action--single"
                data-testid="ios-app-ui-text-alert-notification-single-action"
              >
                {notification.actions?.[0].label}
              </div>
            </div>
          ) : hasMultipleActions(notification) ? (
            <div className="notificare__push__ios__alert__app-ui__actions-multiple">
              {notification.actions?.map((action, index) => (
                <div
                  key={index}
                  className="notificare__push__ios__alert__app-ui__action notificare__push__ios__alert__app-ui__action--multiple"
                  data-testid={`ios-app-ui-text-alert-notification-action-${index}`}
                >
                  {action.label}
                </div>
              ))}
              <div className="notificare__push__ios__alert__app-ui__multiple-cancel">Cancel</div>
            </div>
          ) : (
            <div className="notificare__push__ios__alert__app-ui__no-actions">OK</div>
          )}
        </div>
      </div>
    </div>
  );
}

interface TextAlertNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Alert' }>;
  appName: string;
}
