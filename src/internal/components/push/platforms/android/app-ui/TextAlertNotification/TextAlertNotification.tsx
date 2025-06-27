import { FormattedMessage } from 'react-intl';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { MESSAGES } from '~/locales/push/en';

import './TextAlertNotification.css';

export function TextAlertNotification({ notification }: TextAlertNotificationProps) {
  const application = useApplication();

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
              src={application.websitePushConfig.icon}
            />
          </div>
          <p className="notificare__push__android__alert__app-ui__title">
            {notification.title || application.name}
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
              <FormattedMessage
                id="preview.android.alert.appUi.cancel"
                defaultMessage={MESSAGES['preview.android.alert.appUi.cancel']}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export interface TextAlertNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Alert' }>;
}
