import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AlertIcon from '~/assets/alert.svg';
import LockerIcon from '~/assets/locker.svg';
import XMarkIcon from '~/assets/x-mark.svg';
import { useOptions } from '~/internal/context/options';
import { getPushAPIHost } from '~/internal/network/api';
import { getTopLevelDomain, isSecureUrl } from '~/internal/utils/url';
import { PUSH_MESSAGES } from '~/locales/push/en';

import './InAppBrowserBar.css';

export function InAppBrowserBar({ url, onLoadingChanged, canShow }: InAppBrowserBarProps) {
  const [pageTitle, setPageTitle] = useState('');
  const [status, setStatus] = useState<StatusState>({ isLoading: true });

  const { serviceKey } = useOptions();
  const intl = useIntl();

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
          {!status.isLoading && canShow
            ? pageTitle
            : intl.formatMessage({
                id: 'preview.android.inAppBrowser.appUi.pageTitleLoading',
                defaultMessage:
                  PUSH_MESSAGES['preview.android.inAppBrowser.appUi.pageTitleLoading'],
              })}
        </p>
        <p className="notificare__push__android__in-app-browser__app-ui__bar-text notificare__push__android__in-app-browser__app-ui__bar-text--url">
          {getTopLevelDomain(url)}
        </p>
      </div>
    </div>
  );
}

export interface InAppBrowserBarProps {
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
