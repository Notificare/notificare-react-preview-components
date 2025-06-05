import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasFirstAttachment } from '~/internal/utils/push-previews/notification';

import './AlertNotification.css';

export function AlertNotification({ notification }: AlertNotificationProps) {
  return (
    <div data-testid="web-mobile-app-ui-text-alert-notification">
      {hasFirstAttachment(notification) && (
        <img
          className="notificare__web__phone__alert__app-ui__media"
          src={notification.attachments?.[0].uri}
          alt="Notification attachment"
        />
      )}

      <div>
        <p className="notificare__web__phone__alert__app-ui__title">{notification.title}</p>
        <p className="notificare__web__phone__alert__app-ui__subtitle">{notification.subtitle}</p>
        <p className="notificare__web__phone__alert__app-ui__message">{notification.message}</p>
      </div>
    </div>
  );
}

export interface AlertNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Alert' }>;
}
