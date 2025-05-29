import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { Webshot } from '../../../../shared-components/Webshot/Webshot';

export function URLNotification({ notification }: URLNotificationProps) {
  return (
    <div data-testid="web-mobile-app-ui-url-notification">
      <Webshot url={notification.content[0].data} platform={'Web'} width={268} height={430} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.URL' }>;
}
