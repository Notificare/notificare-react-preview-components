import { FormattedMessage } from 'react-intl';
import LockerIcon from '~/assets/locker.svg';
import { getTopLevelDomain, isSecureUrl } from '~/internal/utils/url';
import { MESSAGES } from '~/locales/push/en';

import './InAppBrowserBar.css';

export function InAppBrowserBar(props: InAppBrowserBarProps) {
  const { url } = props;

  return (
    <div className="notificare__push__ios__in-app-browser__app-ui__bar">
      <p className="notificare__push__ios__in-app-browser__app-ui__bar-done-button">
        <FormattedMessage
          id="preview.ios.inAppBrowser.appUi.done"
          defaultMessage={MESSAGES['preview.ios.inAppBrowser.appUi.done']}
        />
      </p>
      <div className="notificare__push__ios__in-app-browser__app-ui__bar-domain">
        {isSecureUrl(url) ? (
          <LockerIcon className="notificare__push__ios__in-app-browser__app-ui__bar-lock-icon" />
        ) : (
          <p className="notificare__push__ios__in-app-browser__app-ui__bar-not-secure">
            <FormattedMessage
              id="preview.ios.inAppBrowser.appUi.notSecure"
              defaultMessage={MESSAGES['preview.ios.inAppBrowser.appUi.notSecure']}
            />
          </p>
        )}

        <p className="notificare__push__ios__in-app-browser__app-ui__bar-url">
          {getTopLevelDomain(url)}
        </p>
      </div>
    </div>
  );
}

export interface InAppBrowserBarProps {
  url: string;
}
