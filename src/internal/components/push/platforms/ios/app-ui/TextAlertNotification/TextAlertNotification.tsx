import { FormattedMessage } from 'react-intl';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasSingleAction, hasMultipleActions } from '~/internal/utils/push-previews/notification';
import { MESSAGES } from '~/locales/push/en';

import './TextAlertNotification.css';

export function TextAlertNotification({ notification }: TextAlertNotificationProps) {
  const application = useApplication();

  return (
    <div
      className="notificare__push__ios__alert__app-ui"
      data-testid="ios-app-ui-text-alert-notification"
    >
      <div className="notificare__push__ios__alert__app-ui__background">
        <div className="notificare__push__ios__alert__app-ui__title-and-message">
          <p className="notificare__push__ios__alert__app-ui__title">
            {notification.title || application.name}
          </p>
          <p className="notificare__push__ios__alert__app-ui__message">{notification.message}</p>
        </div>
        <div className="notificare__push__ios__alert__app-ui__actions">
          {hasSingleAction(notification) ? (
            <div className="notificare__push__ios__alert__app-ui__actions-single">
              <div className="notificare__push__ios__alert__app-ui__single-cancel">
                <FormattedMessage
                  id="preview.ios.alert.appUi.cancel"
                  defaultMessage={MESSAGES['preview.ios.alert.appUi.cancel']}
                />
              </div>
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
              <div className="notificare__push__ios__alert__app-ui__multiple-cancel">
                <FormattedMessage
                  id="preview.ios.alert.appUi.cancel"
                  defaultMessage={MESSAGES['preview.ios.alert.appUi.cancel']}
                />
              </div>
            </div>
          ) : (
            <div className="notificare__push__ios__alert__app-ui__no-actions">
              <FormattedMessage
                id="preview.ios.alert.appUi.ok"
                defaultMessage={MESSAGES['preview.ios.alert.appUi.ok']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export interface TextAlertNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Alert' }>;
}
