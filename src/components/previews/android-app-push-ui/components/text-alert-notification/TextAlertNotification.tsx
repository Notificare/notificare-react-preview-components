import './TextAlertNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidAppIcon from '../../../../shared/android-app-icon/AndroidAppIcon';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';

interface TextAlertNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Alert' }>;
  appName: string;
  appIcon: string;
}

export default function TextAlertNotification(props: TextAlertNotificationProps) {
  const { notification, appName, appIcon } = props;

  return (
    <AndroidPhoneBackground theme="dark">
      <div className="notificare__android-app-push-ui-text-alert-notification">
        <div className="notificare__android-app-push-ui-text-alert-notification-wrapper">
          <div className="notificare__android-app-push-ui-text-alert-notification-header">
            <AndroidAppIcon appIcon={appIcon} />
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
    </AndroidPhoneBackground>
  );
}
