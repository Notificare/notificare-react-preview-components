import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import {
  NotificationPreviewDisplayMode,
  NotificationPreviewStateMobile,
} from '~/internal/components/push/notification-preview-state';
import { URLResolverNotification } from '~/internal/components/push/platforms/ios/app-ui/URLResolverNotification/URLResolverNotification';
import { IOSPhoneBackground } from '~/internal/components/shared/IOSPhoneBackground/IOSPhoneBackground';
import { VerifiedNotification, NotificationType } from '~/internal/schemas/notificare-notification';
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

  useEffect(
    function handleInvalidPreviewError() {
      if (!isValidPreviewType(notification.type, previewState.displayMode)) {
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
    [previewState, notification.type],
  );

  if (!isValidPreviewType(notification.type, previewState.displayMode)) {
    return undefined;
  }

  return (
    <IOSPhoneBackground theme={getTheme(notification.type, previewState.displayMode)}>
      <div className="notificare__push__ios__preview">
        {(() => {
          switch (previewState.displayMode) {
            case 'lockscreen':
            case 'lockscreen-expanded':
              return (
                <LockScreenNotification
                  notification={notification}
                  expanded={previewState.displayMode === 'lockscreen-expanded'}
                />
              );

            case 'app-ui':
              switch (notification.type) {
                case 're.notifica.notification.Alert':
                  return <TextAlertNotification notification={notification} />;

                case 're.notifica.notification.WebView':
                  return <WebViewNotification notification={notification} />;

                case 're.notifica.notification.URL':
                  return <URLNotification notification={notification} />;

                case 're.notifica.notification.InAppBrowser':
                  return <InAppBrowserNotification notification={notification} />;

                case 're.notifica.notification.Image':
                  return <ImagesNotification notification={notification} />;

                case 're.notifica.notification.Map':
                  return <MapNotification notification={notification} onError={onError} />;

                case 're.notifica.notification.Rate':
                  return <RateNotification title={notification.title} />;

                case 're.notifica.notification.Passbook':
                  return <DigitalCardNotification notification={notification} />;

                case 're.notifica.notification.Video':
                  return <VideoNotification notification={notification} />;

                case 're.notifica.notification.Store':
                  return <AppRecommendationNotification notification={notification} />;

                case 're.notifica.notification.URLResolver':
                  return (
                    <URLResolverNotification notification={notification} onError={onError} />
                  );
              }
          }
        })()}
      </div>
    </IOSPhoneBackground>
  );
}

export interface NotificationIOSPreviewProps {
  notification: VerifiedNotification;
  previewState: NotificationPreviewStateMobile;
  onError: (message: string) => void;
}

function getTheme(notificationType: NotificationType, displayMode: NotificationPreviewDisplayMode) {
  switch (displayMode) {
    case 'app-ui':
      switch (notificationType) {
        case 're.notifica.notification.Alert':
        case 're.notifica.notification.WebView':
        case 're.notifica.notification.URL':
        case 're.notifica.notification.InAppBrowser':
        case 're.notifica.notification.Image':
        case 're.notifica.notification.Rate':
        case 're.notifica.notification.Passbook':
        case 're.notifica.notification.Video':
        case 're.notifica.notification.Store':
        case 're.notifica.notification.Map':
        case 're.notifica.notification.URLResolver':
          return 'dark';

        default:
          return 'light';
      }

    default:
      return 'light';
  }
}

function isValidPreviewType(
  notificationType: NotificationType,
  displayMode: NotificationPreviewDisplayMode,
) {
  switch (displayMode) {
    case 'app-ui':
      switch (notificationType) {
        case 're.notifica.notification.Alert':
        case 're.notifica.notification.WebView':
        case 're.notifica.notification.URL':
        case 're.notifica.notification.InAppBrowser':
        case 're.notifica.notification.Image':
        case 're.notifica.notification.Map':
        case 're.notifica.notification.Rate':
        case 're.notifica.notification.Passbook':
        case 're.notifica.notification.Video':
        case 're.notifica.notification.Store':
        case 're.notifica.notification.URLResolver':
          return true;
        default:
          return false;
      }

    default:
      return true;
  }
}
