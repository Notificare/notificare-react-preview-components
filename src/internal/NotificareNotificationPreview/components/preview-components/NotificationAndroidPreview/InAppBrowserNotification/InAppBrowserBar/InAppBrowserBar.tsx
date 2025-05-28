import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './InAppBrowserBar.css';
import AlertIcon from '../../../../../../../assets/alert.svg';
import LockerIcon from '../../../../../../../assets/locker.svg';
import XMarkIcon from '../../../../../../../assets/x-mark.svg';
import { getPushAPIHost } from '../../../../../../network/api';
import { getUrlMainDomain } from '../../../../../helpers/getURLMainDomain';
import { isSecureUrl } from '../../../../../helpers/isSecureURL';
import { useOptions } from '../../../../OptionsProvider/OptionsProvider';

export default function InAppBrowserBar({ url, onLoadingChanged, canShow }: InAppBrowserBarProps) {
  const [pageTitle, setPageTitle] = useState('');
  const [status, setStatus] = useState<StatusState>({ isLoading: true });
  const { serviceKey } = useOptions();

  useEffect(
    function loadPageTitle() {
      (async () => {
        updateComponentStatus(true, setStatus, onLoadingChanged);

        try {
          const pageTitle = await fetchPageTitle(serviceKey, url);
          setPageTitle(pageTitle);
        } catch (error) {
          console.error('Error while getting page title:\n\n', error);
        }

        updateComponentStatus(false, setStatus, onLoadingChanged);
      })();
    },
    [url],
  );

  return (
    <div className="notificare__push__android__in-app-browser__app-ui__bar">
      <XMarkIcon className="notificare__push__android__in-app-browser__app-ui__x-mark-icon" />

      {isSecureUrl(url) ? (
        <LockerIcon className="notificare__push__android__in-app-browser__app-ui__bar-lock-icon" />
      ) : (
        <AlertIcon className="notificare__push__android__in-app-browser__app-ui__alert-icon" />
      )}

      <div className="notificare__push__android__in-app-browser__app-ui__bar-domain">
        <p className="notificare__push__android__in-app-browser__app-ui__bar-text notificare__push__android__in-app-browser__app-ui__bar-text--title">
          {!status.isLoading && canShow ? pageTitle : 'Loading...'}
        </p>
        <p className="notificare__push__android__in-app-browser__app-ui__bar-text notificare__push__android__in-app-browser__app-ui__bar-text--url">
          {getUrlMainDomain(url)}
        </p>
      </div>
    </div>
  );
}

interface InAppBrowserBarProps {
  url: string;
  onLoadingChanged?: Dispatch<SetStateAction<boolean>>;
  canShow: boolean;
}

type StatusState = {
  isLoading: boolean;
};

async function fetchPageTitle(serviceKey: string, websiteUrl: string) {
  const url = new URL('/proxy', getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);
  url.searchParams.set('url', websiteUrl);
  const response = await fetch(url);
  const html = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  return doc.querySelector('title')?.textContent ?? '';
}

/* Status update */

function updateComponentStatus(
  isLoading: boolean,
  setStatus: Dispatch<SetStateAction<StatusState>>,
  notifyLoadingChange?: Dispatch<SetStateAction<boolean>>,
) {
  setStatus({ isLoading: isLoading });
  notifyLoadingChange?.(isLoading);
  return;
}
