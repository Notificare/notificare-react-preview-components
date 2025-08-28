import { ReactElement, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { InAppBrowserNotification } from '~/internal/components/push/platforms/android/app-ui/InAppBrowserNotification/InAppBrowserNotification';
import { URLNotification } from '~/internal/components/push/platforms/android/app-ui/URLNotification/URLNotification';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import {
  getUrlResolverPreviewTypeByUrl,
  UrlResolverPreviewTypeResult,
} from '~/internal/utils/url-resolver';
import { NotificarePushTranslationKey, PUSH_TRANSLATIONS } from '~/locales/push/en';

export function URLResolverNotification({ notification, onError }: URLNotificationProps) {
  const intl = useIntl();

  const url = notification.content[0].data;

  const urlResolverResult = getUrlResolverPreviewTypeByUrl(url);

  const previewData: PreviewData = (() => {
    switch (urlResolverResult) {
      case UrlResolverPreviewTypeResult.INVALID_URL:
        return {
          status: 'error',
          errorCode: 'preview.error.urlResolverInvalidUrl',
        };

      case UrlResolverPreviewTypeResult.URL_SCHEME:
        return {
          status: 'error',
          errorCode: 'preview.error.notSupportedUrlResolverWithUrlSchemePreview',
        };

      case UrlResolverPreviewTypeResult.DYNAMIC_LINK:
        return {
          status: 'error',
          errorCode: 'preview.error.notSupportedUrlResolverWithDynamicLink',
        };

      case UrlResolverPreviewTypeResult.RELATIVE_URL:
        return {
          status: 'error',
          errorCode: 'preview.error.notSupportedUrlResolverWithRelativeUrl',
        };

      case UrlResolverPreviewTypeResult.WEB_VIEW:
        return { status: 'success', preview: <URLNotification notification={notification} /> };

      case UrlResolverPreviewTypeResult.IN_APP_BROWSER:
        return {
          status: 'success',
          preview: <InAppBrowserNotification notification={notification} />,
        };
    }
  })();

  useEffect(
    function handleInvalidPreview() {
      if (previewData.status === 'error') {
        onError(
          intl.formatMessage(
            {
              id: previewData.errorCode,
              defaultMessage: PUSH_TRANSLATIONS[previewData.errorCode],
            },
            { notificationType: notification.type },
          ),
        );
      }
    },
    [previewData, notification.type, onError, intl],
  );

  switch (previewData.status) {
    case 'error':
      return undefined;

    case 'success':
      return previewData.preview;
  }
}

export interface URLNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.URLResolver' }>;
  onError: (message: string) => void;
}

type PreviewData =
  | { status: 'success'; preview: ReactElement }
  | { status: 'error'; errorCode: NotificarePushTranslationKey };
