import { ReactElement, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { NotificationPreviewStateMobile } from '~/internal/components/push/notification-preview-state';
import { URLResolverNotification } from '~/internal/components/push/platforms/ios/app-ui/URLResolverNotification/URLResolverNotification';
import { IOSPhoneBackground } from '~/internal/components/shared';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { AppRecommendationNotification } from './app-ui/AppRecommendationNotification/AppRecommendationNotification';
import { DigitalCardNotification } from './app-ui/DigitalCardNotification/DigitalCardNotification';
import { ImagesNotification } from './app-ui/ImagesNotification/ImagesNotification';
import { InAppBrowserNotification } from './app-ui/InAppBrowserNotification/InAppBrowserNotification';
import { MapNotification } from './app-ui/MapNotification/MapNotification';
import { RateNotification } from './app-ui/RateNotification/RateNotification';
import { TextAlertNotification } from './app-ui/TextAlertNotification/TextAlertNotification';
import { URLNotification } from './app-ui/URLNotification/URLNotification';
import { VideoNotification } from './app-ui/VideoNotification/VideoNotification';
import { WebViewNotification } from './app-ui/WebViewNotification/WebViewNotification';
import { LockScreenNotification } from './lock-screen/LockScreenNotification';

import './NotificationIOSPreview.css';

export function NotificationIOSPreview({
  notification,
  previewState,
  onError,
}: NotificationIOSPreviewProps) {
  const intl = useIntl();

  const previewData: PreviewData | undefined = (() => {
    switch (previewState.displayMode) {
      case 'lockscreen':
      case 'lockscreen-expanded':
        return {
          preview: (
            <LockScreenNotification
              notification={notification}
              expanded={previewState.displayMode === 'lockscreen-expanded'}
            />
          ),
          theme: 'light',
        };

      case 'app-ui':
        switch (notification.type) {
          case 're.notifica.notification.Alert':
            return {
              preview: <TextAlertNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.WebView':
            return {
              preview: <WebViewNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.URL':
            return {
              preview: <URLNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.InAppBrowser':
            return {
              preview: <InAppBrowserNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.Image':
            return {
              preview: <ImagesNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.Map':
            return {
              preview: <MapNotification notification={notification} onError={onError} />,
              theme: 'dark',
            };

          case 're.notifica.notification.Rate':
            return {
              preview: <RateNotification title={notification.title} />,
              theme: 'dark',
            };

          case 're.notifica.notification.Passbook':
            return {
              preview: <DigitalCardNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.Video':
            return {
              preview: <VideoNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.Store':
            return {
              preview: <AppRecommendationNotification notification={notification} />,
              theme: 'dark',
            };

          case 're.notifica.notification.URLResolver':
            return {
              preview: <URLResolverNotification notification={notification} onError={onError} />,
              theme: 'dark',
            };

          case 're.notifica.notification.None':
          case 're.notifica.notification.URLScheme':
            return undefined;
        }
    }
  })();

  useEffect(
    function handleInvalidPreview() {
      if (!previewData) {
        onError(
          intl.formatMessage(
            {
              id: 'preview.error.notSupportedNotificationTypePreviewVariant',
              defaultMessage:
                PUSH_TRANSLATIONS['preview.error.notSupportedNotificationTypePreviewVariant'],
            },
            { notificationType: notification.type },
          ),
        );
      }
    },
    [previewData, notification, onError, intl],
  );

  if (!previewData) {
    return undefined;
  }

  return (
    <IOSPhoneBackground theme={previewData.theme}>
      <div className="notificare__push__ios__preview">{previewData.preview}</div>
    </IOSPhoneBackground>
  );
}

export interface NotificationIOSPreviewProps {
  notification: VerifiedNotification;
  previewState: NotificationPreviewStateMobile;
  onError: (message: string) => void;
}

interface PreviewData {
  preview: ReactElement;
  theme: 'light' | 'dark';
}
