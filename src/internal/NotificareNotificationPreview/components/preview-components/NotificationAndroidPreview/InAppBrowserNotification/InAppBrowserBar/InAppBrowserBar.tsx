import { useEffect, useState } from 'react';
import './InAppBrowserBar.css';
import LoadingIcon from '../../../../../../../assets/loading.svg';
import LockerIcon from '../../../../../../../assets/locker.svg';
import XMarkIcon from '../../../../../../../assets/x-mark.svg';
import { getPushAPIHost } from '../../../../../../../config/api';
import { getUrlMainDomain } from '../../../../../helpers/getURLMainDomain';
import { isSecureUrl } from '../../../../../helpers/isSecureURL';
import { useOptions } from '../../../../OptionsProvider/OptionsProvider';

export default function InAppBrowserBar({ url, onLoadingChange, canShow }: InAppBrowserBarProps) {
  const [pageTitle, setPageTitle] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { serviceKey } = useOptions();

  useEffect(
    function loadPageTitle() {
      (async () => {
        setIsLoading(true);

        const pageTitle = await fetchPageTitle(serviceKey, url);
        setPageTitle(pageTitle);

        setIsLoading(false);
        onLoadingChange?.(false);
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
        <LoadingIcon className="notificare__push__android__in-app-browser__app-ui__loading-icon" />
      )}

      <div className="notificare__push__android__in-app-browser__app-ui__bar-domain">
        <p className="notificare__push__android__in-app-browser__app-ui__bar-text notificare__push__android__in-app-browser__app-ui__bar-text--title">
          {!isLoading && canShow ? pageTitle : 'Loading...'}
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
  onLoadingChange?: (isLoading: boolean) => void;
  canShow: boolean;
}

async function fetchPageTitle(apiKey: string, url: string) {
  try {
    const params = new URLSearchParams({ apiKey, url });
    const response = await fetch(`${getPushAPIHost()}/proxy/?${params.toString()}`);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    return doc.querySelector('title')?.textContent ?? '';
  } catch (error) {
    console.error('Error getting page title: ', error);
    return '';
  }
}
