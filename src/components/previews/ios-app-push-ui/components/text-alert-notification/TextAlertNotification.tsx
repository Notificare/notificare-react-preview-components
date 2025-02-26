import './TextAlertNotification.css';
import { hasSingleAction, hasMultipleActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';

interface TextAlertNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Alert' }>;
  appName: string;
}

export default function TextAlertNotification(props: TextAlertNotificationProps) {
  const { notification, appName } = props;

  return (
    <IOSPhoneBackground theme="dark">
      <div className="notificare__ios-app-push-ui-text-alert-notification">
        <div className="notificare__ios-app-push-ui-text-alert-notification-background">
          <div className="notificare__ios-app-push-ui-text-alert-notification-title-and-message">
            <p className="notificare__ios-app-push-ui-text-alert-notification-title">
              {notification.title || appName}
            </p>
            <p className="notificare__ios-app-push-ui-text-alert-notification-message">
              {notification.message}
            </p>
          </div>
          <div className="notificare__ios-app-push-ui-text-alert-notification-actions">
            {hasSingleAction(notification) ? (
              <div className="notificare__ios-app-push-ui-text-alert-notification-actions-single">
                <div className="notificare__ios-app-push-ui-text-alert-notification-single-cancel">
                  Cancel
                </div>
                <div className="notificare__ios-app-push-ui-text-alert-notification-action notificare__ios-app-push-ui-text-alert-notification-action--single">
                  {notification.actions?.[0].label}
                </div>
              </div>
            ) : hasMultipleActions(notification) ? (
              <div className="notificare__ios-app-push-ui-text-alert-notification-actions-multiple">
                {notification.actions?.map((action, index) => (
                  <div
                    key={index}
                    className="notificare__ios-app-push-ui-text-alert-notification-action notificare__ios-app-push-ui-text-alert-notification-action--multiple"
                  >
                    {action.label}
                  </div>
                ))}
                <div className="notificare__ios-app-push-ui-text-alert-notification-multiple-cancel">
                  Cancel
                </div>
              </div>
            ) : (
              <div className="notificare__ios-app-push-ui-text-alert-notification-no-actions">
                OK
              </div>
            )}
          </div>
        </div>
      </div>
    </IOSPhoneBackground>
  );
}
