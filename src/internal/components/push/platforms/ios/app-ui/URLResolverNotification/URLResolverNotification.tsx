import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { InAppBrowserNotification } from '~/internal/components/push/platforms/ios/app-ui/InAppBrowserNotification/InAppBrowserNotification';
import { URLNotification } from '~/internal/components/push/platforms/ios/app-ui/URLNotification/URLNotification';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { getUrlResolverPreviewTypeByUrl } from '~/internal/utils/url-resolver';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

export function URLResolverNotification({ notification, onError }: URLNotificationProps) {
  const intl = useIntl();

  const url = notification.content[0].data;

  const urlResolverResult = getUrlResolverPreviewTypeByUrl(url);

  useEffect(
    function handleUrlResolverError() {
      switch (urlResolverResult) {
        case 'invalid-url':
          onError(
            intl.formatMessage({
              id: 'preview.error.urlResolverInvalidUrl',
              defaultMessage: PUSH_TRANSLATIONS['preview.error.urlResolverInvalidUrl'],
            }),
          );
          return;

        case 'url-scheme':
          onError(
            intl.formatMessage({
              id: 'preview.error.notSupportedUrlResolverWithUrlSchemePreview',
              defaultMessage:
                PUSH_TRANSLATIONS['preview.error.notSupportedUrlResolverWithUrlSchemePreview'],
            }),
          );
          return;
      }
    },
    [url],
  );

  switch (urlResolverResult) {
    case 'invalid-url':
    case 'url-scheme':
      return undefined;

    case 'web-view':
      return <URLNotification notification={notification} />;

    case 'in-app-browser':
      return <InAppBrowserNotification notification={notification} />;
  }
}

export interface URLNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.URLResolver' }>;
  onError: (message: string) => void;
}
