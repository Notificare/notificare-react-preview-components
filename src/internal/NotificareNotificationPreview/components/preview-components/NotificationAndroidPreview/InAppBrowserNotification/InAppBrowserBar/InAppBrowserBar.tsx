import { useEffect, useState } from 'react';
import './InAppBrowserBar.css';
import { DASHBOARD_API } from '../../../../../../api';
import { getUrlMainDomain } from '../../../../../helpers/getURLMainDomain';
import { isSecureUrl } from '../../../../../helpers/isSecureURL';

export default function InAppBrowserBar({ url, onLoadingChange, canShow }: InAppBrowserBarProps) {
  const [pageTitle, setPageTitle] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    function loadPageTitle() {
      (async () => {
        setIsLoading(true);

        const pageTitle = await fetchPageTitle(url);
        setPageTitle(pageTitle);

        setIsLoading(false);
        onLoadingChange?.(false);
      })();
    },
    [url],
  );

  return (
    <div className="notificare__push__android__in-app-browser__app-ui__bar">
      <svg
        className="notificare__push__android__in-app-browser__app-ui__x-mark-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>

      {isSecureUrl(url) ? (
        <svg
          className="notificare__push__android__in-app-browser__app-ui__bar-lock-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
        </svg>
      ) : (
        <svg
          className="notificare__push__android__in-app-browser__app-ui__loading-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
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

async function fetchPageTitle(url: string) {
  try {
    const response = await fetch(`${DASHBOARD_API}/api/v2/proxy/?url=${url}`);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    return doc.querySelector('title')?.textContent ?? '';
  } catch (error) {
    console.error('Error getting page title: ', error);
    return '';
  }
}
