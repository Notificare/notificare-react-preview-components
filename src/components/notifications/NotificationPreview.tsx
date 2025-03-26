import './NotificationPreview.css';
import { useState } from 'react';
import Controls from '../../internal/notifications/components/controls/Controls';
import { NotificationAndroidPreview } from '../../internal/notifications/components/preview-components/android/NotificationAndroidPreview';
import NotificationIOSPreview from '../../internal/notifications/components/preview-components/ios/NotificationIOSPreview';
import { NotificationWebPreview } from '../../internal/notifications/components/preview-components/web/NotificationWebPreview';
import { NotificareApplication } from '../../internal/notifications/models/notificare-application';
import { NotificareNotification } from '../../internal/notifications/models/notificare-notification';
import { NotificationPreviewVariant } from '../../internal/notifications/models/notification-preview-variant';
import { notificareApplicationSchema } from '../../internal/notifications/schemas/notificare-application/notificare-application-schema';
import { notificareNotificationSchema } from '../../internal/notifications/schemas/notificare-notification/notificare-notification-schema';

export function NotificationPreview({
  notification,
  application,
  showControls,
  variant,
}: NotificationPreviewProps) {
  const notificationPreviewVariants = new Map<
    NotificationPreviewProps['variant'],
    NotificationPreviewVariant
  >([
    ['android-lockscreen', { platform: 'android', mobileVariant: 'lockscreen' }],
    ['android-lockscreen-expanded', { platform: 'android', mobileVariant: 'lockscreen-expanded' }],
    ['android-app-ui', { platform: 'android', mobileVariant: 'app-ui' }],
    ['ios-lockscreen', { platform: 'ios', mobileVariant: 'lockscreen' }],
    ['ios-lockscreen-expanded', { platform: 'ios', mobileVariant: 'lockscreen-expanded' }],
    ['ios-app-ui', { platform: 'ios', mobileVariant: 'app-ui' }],
    ['web-desktop-macos', { platform: 'web', webDevice: 'desktop', webDesktopOS: 'macOS' }],
    [
      'web-iphone-app-ui',
      { platform: 'web', webDevice: 'phone', webMobileType: 'iphone', mobileVariant: 'app-ui' },
    ],
    [
      'web-android-app-ui',
      { platform: 'web', webDevice: 'phone', webMobileType: 'android', mobileVariant: 'app-ui' },
    ],
  ]);

  const [platform, setPlatform] = useState<NotificationPreviewVariant['platform']>(
    notificationPreviewVariants.get(variant)?.platform,
  );
  const [mobileVariant, setMobileVariant] = useState<NotificationPreviewVariant['mobileVariant']>(
    notificationPreviewVariants.get(variant)?.mobileVariant,
  );
  const [webDevice, setWebDevice] = useState<NotificationPreviewVariant['webDevice']>(
    notificationPreviewVariants.get(variant)?.webDevice,
  );
  const [webMobileType, setWebMobileType] = useState<NotificationPreviewVariant['webMobileType']>(
    notificationPreviewVariants.get(variant)?.webMobileType,
  );
  const [webDesktopOS, setWebDesktopOS] = useState<NotificationPreviewVariant['webDesktopOS']>(
    notificationPreviewVariants.get(variant)?.webDesktopOS,
  );

  const notificationResult = notificareNotificationSchema.safeParse(notification);
  const applicationResult = notificareApplicationSchema.safeParse(application);

  if (!notificationResult.success) {
    const errors = notificationResult.error.errors.map((error) => error.message);
    console.log('Notification errors:\n\n' + errors.join('\n'));
  }

  if (!applicationResult.success) {
    const errors = applicationResult.error.errors.map((error) => error.message);
    console.log('Application errors:\n\n' + errors.join('\n'));
  }

  return (
    <div className="notificare">
      <div className="notificare__notification-previews-wrapper">
        {showControls && (
          <Controls
            platform={platform}
            mobileVariant={mobileVariant}
            webDevice={webDevice}
            webMobileType={webMobileType}
            webDesktopOS={webDesktopOS}
            setPlatform={setPlatform}
            setMobileVariant={setMobileVariant}
            setWebDesktopOS={setWebDesktopOS}
            setWebDevice={setWebDevice}
            setWebMobileType={setWebMobileType}
          />
        )}

        <div className="notificare__notification-preview">
          {notificationResult.success && applicationResult.success ? (
            <>
              {platform === 'android' && (
                <NotificationAndroidPreview
                  notification={notificationResult.data}
                  application={applicationResult.data}
                  mobileVariant={mobileVariant}
                />
              )}

              {platform === 'ios' && (
                <NotificationIOSPreview
                  notification={notificationResult.data}
                  application={applicationResult.data}
                  mobileVariant={mobileVariant}
                />
              )}

              {platform === 'web' && (
                <NotificationWebPreview
                  notification={notificationResult.data}
                  application={applicationResult.data}
                  mobileVariant={mobileVariant}
                  webDevice={webDevice}
                  webMobileType={webMobileType}
                  webDesktopOS={webDesktopOS}
                />
              )}
            </>
          ) : (
            <PreviewError
              isNotificationValid={notificationResult.success}
              isApplicationValid={applicationResult.success}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export interface NotificationPreviewProps {
  notification: NotificareNotification;
  application: NotificareApplication;
  showControls?: boolean;
  variant:
    | 'android-lockscreen'
    | 'android-lockscreen-expanded'
    | 'android-app-ui'
    | 'ios-lockscreen'
    | 'ios-lockscreen-expanded'
    | 'ios-app-ui'
    | 'web-desktop-macos'
    | 'web-iphone-app-ui'
    | 'web-android-app-ui';
}

function PreviewError({
  isNotificationValid,
  isApplicationValid,
}: {
  isNotificationValid: boolean;
  isApplicationValid: boolean;
}) {
  const message =
    !isNotificationValid && isApplicationValid
      ? '→ Invalid Notification'
      : isNotificationValid && !isApplicationValid
        ? '→ Invalid Application'
        : '→ Invalid Notification & Application';

  return (
    <>
      <div className="notificare__notification-preview-error-warning">
        <svg
          className="notificare__notification-preview-error-alert-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>

        <div className="notificare__notification-preview-error-text-container">
          <div className="notificare__notification-preview-error-title">
            Preview could not be loaded
          </div>
          <div className="notificare__notification-preview-error-reason-text">{message}</div>
        </div>
      </div>
      <div className="notificare__notification-preview-error-check-console-text">
        Check console for more information
      </div>
    </>
  );
}
