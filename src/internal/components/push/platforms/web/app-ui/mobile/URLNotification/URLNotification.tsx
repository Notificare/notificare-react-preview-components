import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';

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
