import { FormattedMessage } from 'react-intl';
import { useApplication } from '~/internal/context/application';

import './RateNotification.css';

export function RateNotification({ title }: RateAppNotificationProps) {
  const application = useApplication();

  return (
    <div className="notificare__push__ios__rate__app-ui" data-testid="ios-app-ui-rate-notification">
      <div className="notificare__push__ios__rate__app-ui__wrapper">
        <p className="notificare__push__ios__rate__app-ui__header">{title || application.name}</p>
        <div className="notificare__push__ios__rate__app-ui__action">
          <FormattedMessage
            id="preview.ios.rate.appUi.rateNow"
            defaultMessage="Yes, I'll Rate Now"
          />
        </div>
        <div className="notificare__push__ios__rate__app-ui__action">
          <FormattedMessage id="preview.ios.rate.appUi.doNotRate" defaultMessage="No, Thanks" />
        </div>
      </div>
    </div>
  );
}

export interface RateAppNotificationProps {
  title: string | undefined;
}
