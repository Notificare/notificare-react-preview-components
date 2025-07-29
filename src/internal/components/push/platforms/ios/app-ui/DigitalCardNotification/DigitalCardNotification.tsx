import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { getPushAPIHost } from '~/internal/network/api';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { TitleBar } from '../TitleBar/TitleBar';

import './DigitalCardNotification.css';

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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Passbook' }>;
}
