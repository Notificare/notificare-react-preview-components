import './InAppBrowserBar.css';
import LockerIcon from '../../../../../../../../assets/locker.svg';
import { getTopLevelDomain, isSecureUrl } from '../../../../../../../utils/url';

export function InAppBrowserBar(props: InAppBrowserBarProps) {
  const { url } = props;

  return (
    <div className="notificare__push__ios__in-app-browser__app-ui__bar">
      <p className="notificare__push__ios__in-app-browser__app-ui__bar-done-button"> Done </p>
      <div className="notificare__push__ios__in-app-browser__app-ui__bar-domain">
        {isSecureUrl(url) ? (
          <LockerIcon className="notificare__push__ios__in-app-browser__app-ui__bar-lock-icon" />
        ) : (
          <p className="notificare__push__ios__in-app-browser__app-ui__bar-not-secure">
            Not Secure —
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
