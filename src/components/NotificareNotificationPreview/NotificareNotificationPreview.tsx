import '../../preset.css';
import './NotificareNotificationPreview.css';
import { useState } from 'react';
import { ZodIssue } from 'zod';
import { ApplicationProvider } from '../../internal/context/application';
import { useApplicationLoader } from '../../internal/hooks';
import { Controls } from '../../internal/NotificareNotificationPreview/components/Controls/Controls';
import { OptionsProvider } from '../../internal/NotificareNotificationPreview/components/OptionsProvider/OptionsProvider';
import { NotificationAndroidPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationAndroidPreview/NotificationAndroidPreview';
import { NotificationIOSPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationIOSPreview/NotificationIOSPreview';
import { NotificationWebPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationWebPreview/NotificationWebPreview';
import { Loading } from '../../internal/NotificareNotificationPreview/components/shared-components/Loading/Loading';
import { UnavailablePreview } from '../../internal/NotificareNotificationPreview/components/shared-components/UnavailablePreview/UnavailablePreview';
import {
  NotificationPreviewDisplayMode,
  NotificationPreviewModel,
  NotificationPreviewPlatform,
  NotificationPreviewWebDesktopOS,
  NotificationPreviewWebDevice,
  NotificationPreviewWebMobileType,
} from '../../internal/NotificareNotificationPreview/types/notification-preview-model';
import {
  NotificareNotificationSchema,
  notificareNotificationSchema,
} from '../../internal/schemas/notificare-notification/notificare-notification-schema';
import { NotificareNotification, NotificareNotificationPreviewVariant } from '../../models';

const notificationPreviewModels = new Map<
  NotificareNotificationPreviewVariant,
  NotificationPreviewModel
>([
  ['android-lockscreen', { platform: 'android', displayMode: 'lockscreen' }],
  ['android-lockscreen-expanded', { platform: 'android', displayMode: 'lockscreen-expanded' }],
  ['android-app-ui', { platform: 'android', displayMode: 'app-ui' }],
  ['ios-lockscreen', { platform: 'ios', displayMode: 'lockscreen' }],
  ['ios-lockscreen-expanded', { platform: 'ios', displayMode: 'lockscreen-expanded' }],
  ['ios-app-ui', { platform: 'ios', displayMode: 'app-ui' }],
  ['web-desktop-macos', { platform: 'web', webDevice: 'desktop', webDesktopOS: 'macOS' }],
  [
    'web-iphone-app-ui',
    { platform: 'web', webDevice: 'phone', webMobileType: 'iphone', displayMode: 'app-ui' },
  ],
  [
    'web-android-app-ui',
    { platform: 'web', webDevice: 'phone', webMobileType: 'android', displayMode: 'app-ui' },
  ],
]);

/**
 * Component that displays a notification preview for different platforms.
 *
 * @param {NotificareNotification} notification - The notification to be displayed in the preview.
 * @param {string} applicationId - The unique identifier of a Notificare application (optional).
 * @param {boolean} [showControls] - Whether the controls should be shown (optional). It's true by default.
 * @param {NotificareNotificationPreviewVariant} variant - The variant of the notification preview (optional). It's 'android-lockscreen' by default.
 * @param {string} [serviceKey] - A service key provided by a Notificare admin.
 * @param {string} [googleMapsAPIKey] - A Google Maps API key (optional).
 */
export function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
  serviceKey,
  googleMapsAPIKey,
}: NotificareNotificationPreviewProps) {
  const applicationState = useApplicationLoader({
    id: applicationId,
    serviceKey,
  });

  const [platform, setPlatform] = useState<NotificationPreviewPlatform | undefined>(
    notificationPreviewModels.get(variant)?.platform,
  );
  const [displayMode, setDisplayMode] = useState<NotificationPreviewDisplayMode | undefined>(
    notificationPreviewModels.get(variant)?.displayMode,
  );
  const [webDevice, setWebDevice] = useState<NotificationPreviewWebDevice | undefined>(
    notificationPreviewModels.get(variant)?.webDevice,
  );
  const [webMobileType, setWebMobileType] = useState<NotificationPreviewWebMobileType | undefined>(
    notificationPreviewModels.get(variant)?.webMobileType,
  );
  const [webDesktopOS, setWebDesktopOS] = useState<NotificationPreviewWebDesktopOS | undefined>(
    notificationPreviewModels.get(variant)?.webDesktopOS,
  );

  // TODO: This should be memoized since it's an expensive operation.
  const notificationResult = notificareNotificationSchema.safeParse(notification);

  if (!notificationResult.success) {
    showNotificationErrors(notificationResult.error.errors);
  }

  return (
    <OptionsProvider serviceKey={serviceKey} googleMapsAPIKey={googleMapsAPIKey}>
      <div className="notificare">
        <div className="notificare__push__preview-wrapper">
          {showControls && (
            <Controls
              platform={platform}
              displayMode={displayMode}
              webDevice={webDevice}
              webMobileType={webMobileType}
              webDesktopOS={webDesktopOS}
              setPlatform={setPlatform}
              setDisplayMode={setDisplayMode}
              setWebDesktopOS={setWebDesktopOS}
              setWebDevice={setWebDevice}
              setWebMobileType={setWebMobileType}
            />
          )}

          {(() => {
            switch (applicationState.status) {
              case 'idle':
              case 'loading':
                return <Loading />;
              case 'success':
                return (
                  <ApplicationProvider application={applicationState.data}>
                    <div className="notificare__push__preview">
                      {notificationResult.success ? (
                        <PreviewContent
                          notification={notificationResult.data}
                          platform={platform}
                          displayMode={displayMode}
                          webDevice={webDevice}
                          webMobileType={webMobileType}
                          webDesktopOS={webDesktopOS}
                        />
                      ) : (
                        <UnavailablePreview
                          message={'→ Invalid Notification'}
                          showConsoleWarning={true}
                        />
                      )}
                    </div>
                  </ApplicationProvider>
                );
            }
          })()}
        </div>
      </div>
    </OptionsProvider>
  );
}

export interface NotificareNotificationPreviewProps {
  notification: NotificareNotification;
  applicationId?: string;
  showControls?: boolean;
  variant?: NotificareNotificationPreviewVariant;
  serviceKey: string;
  googleMapsAPIKey?: string;
}

function PreviewContent({
  notification,
  platform,
  displayMode,
  webDevice,
  webMobileType,
  webDesktopOS,
}: {
  notification: NotificareNotificationSchema;
  platform?: NotificationPreviewPlatform;
  displayMode?: NotificationPreviewDisplayMode;
  webDevice?: NotificationPreviewWebDevice;
  webMobileType?: NotificationPreviewWebMobileType;
  webDesktopOS?: NotificationPreviewWebDesktopOS;
}) {
  switch (platform) {
    case 'android':
      return <NotificationAndroidPreview notification={notification} displayMode={displayMode} />;
    case 'ios':
      return <NotificationIOSPreview notification={notification} displayMode={displayMode} />;
    case 'web':
      return (
        <NotificationWebPreview
          notification={notification}
          displayMode={displayMode}
          webDevice={webDevice}
          webMobileType={webMobileType}
          webDesktopOS={webDesktopOS}
        />
      );
  }
}

function showNotificationErrors(errors: ZodIssue[]) {
  // Errors related to notification types and content types are handled manually here
  // discriminatedUnion() from Zod do not support custom messages when a discriminator doesn't correspond

  const invalidNotificationType = errors.find(
    (e) =>
      e.code === 'invalid_union_discriminator' &&
      e.path.includes('type') &&
      !e.path.includes('content'),
  );

  if (invalidNotificationType) {
    const validNotificationTypes = notificareNotificationSchema.options.map(
      (schema) => schema.shape.type.value,
    );

    console.error(
      `Notification error:\n\nInvalid notification type. Expected one of: ${validNotificationTypes.join(', ')}\n`,
    );
  } else {
    const messages = errors.map((e) => {
      if (
        e.code === 'invalid_union_discriminator' &&
        e.path.includes('type') &&
        e.path.includes('content')
      ) {
        return `Invalid content type. Expected one of: ${e.options.join(', ')}\n`;
      }
      return e.message;
    });
    console.error('Notification errors:\n\n' + messages.join('\n'));
  }
}
