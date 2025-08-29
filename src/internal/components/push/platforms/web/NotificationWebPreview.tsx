import { ReactElement, useEffect } from 'react';
import { useIntl } from 'react-intl';
import {
  NotificationPreviewStateWebDesktop,
  NotificationPreviewStateWebMobile,
} from '~/internal/components/push/notification-preview-state';
import { AndroidPhoneBackground } from '~/internal/components/shared/AndroidPhoneBackground/AndroidPhoneBackground';
import { IOSPhoneBackground } from '~/internal/components/shared/IOSPhoneBackground/IOSPhoneBackground';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { NotificarePushTranslationKey, PUSH_TRANSLATIONS } from '~/locales/push/en';
import { WebMobileAppUINotification } from './app-ui/mobile/WebMobileAppUINotification';
import { WebMacOSNotification } from './lockscreen/WebMacOSNotification';

export function NotificationWebPreview({
  notification,
  previewState,
  onError,
}: NotificationWebPreviewProps) {
  const intl = useIntl();

  const previewData: PreviewData = (() => {
    switch (previewState.formFactor) {
      case 'desktop':
        return {
          status: 'success',
          preview: <WebMacOSNotification key={notification.message} notification={notification} />,
        };

      case 'phone':
        switch (previewState.displayMode) {
          case 'app-ui':
            switch (notification.type) {
              case 're.notifica.notification.Alert':
              case 're.notifica.notification.Image':
              case 're.notifica.notification.Map':
              case 're.notifica.notification.URLResolver':
              case 're.notifica.notification.URL':
              case 're.notifica.notification.Video':
              case 're.notifica.notification.WebView': {
                const PhoneBackground =
                  previewState.os === 'android' ? AndroidPhoneBackground : IOSPhoneBackground;

                return {
                  status: 'success',
                  preview: (
                    <PhoneBackground theme="dark">
                      <WebMobileAppUINotification notification={notification} onError={onError} />
                    </PhoneBackground>
                  ),
                };
              }

              case 're.notifica.notification.InAppBrowser':
              case 're.notifica.notification.Rate':
              case 're.notifica.notification.Store':
              case 're.notifica.notification.Passbook':
              case 're.notifica.notification.None':
              case 're.notifica.notification.URLScheme':
                return {
                  status: 'error',
                  errorCode: 'preview.error.notSupportedNotificationTypePreviewVariant',
                };
            }
            break;

          case 'lockscreen':
          case 'lockscreen-expanded':
            return {
              status: 'error',
              errorCode: 'preview.error.notSupportedPreviewVariant',
            };
        }
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
    [previewData, notification, onError, intl],
  );

  switch (previewData.status) {
    case 'success':
      return previewData.preview;

    case 'error':
      return undefined;
  }
}

export interface NotificationWebPreviewProps {
  notification: VerifiedNotification;
  previewState: NotificationPreviewStateWebDesktop | NotificationPreviewStateWebMobile;
  onError: (message: string) => void;
}

type PreviewData =
  | { status: 'success'; preview: ReactElement }
  | { status: 'error'; errorCode: NotificarePushTranslationKey };
