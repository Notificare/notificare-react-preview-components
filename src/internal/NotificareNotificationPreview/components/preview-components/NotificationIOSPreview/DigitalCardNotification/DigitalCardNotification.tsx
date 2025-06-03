import './DigitalCardNotification.css';
import { useApplication } from '../../../../../context/application';
import { getPushAPIHost } from '../../../../../network/api';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';
import { Webshot } from '../../../shared-components/Webshot/Webshot';
import { TitleBar } from '../TitleBar/TitleBar';

export function DigitalCardNotification({ notification }: DigitalCardNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="ios-app-ui-passbook-notification">
      <TitleBar
        title={notification.title || application.name}
        showOptions={hasActions(notification)}
      />

      <Webshot
        url={`${getPushAPIHost()}/pass/web/${notification.content[0].data.split('/')[5]}`}
        platform="Web"
        width={338}
        height={566}
      />
    </div>
  );
}

export interface DigitalCardNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Passbook' }
  >;
}
