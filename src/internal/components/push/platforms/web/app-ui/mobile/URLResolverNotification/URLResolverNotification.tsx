import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { URLNotification } from '~/internal/components/push/platforms/web/app-ui/mobile/URLNotification/URLNotification';
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

        case 'in-app-browser':
          onError(
            intl.formatMessage({
              id: 'preview.error.urlResolverNoNotificareWebViewQueryParameter',
              defaultMessage:
                PUSH_TRANSLATIONS['preview.error.urlResolverNoNotificareWebViewQueryParameter'],
            }),
          );
          return;
      }
    },
    [urlResolverResult],
  );

  switch (urlResolverResult) {
    case 'invalid-url':
    case 'url-scheme':
    case 'in-app-browser':
      return undefined;

    case 'web-view':
      return <URLNotification notification={notification} />;
  }
}

export interface URLNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.URLResolver' }>;
  onError: (message: string) => void;
}
