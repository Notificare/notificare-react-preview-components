import '../../preset.css';
import './NotificareNotificationPreview.css';
import { useEffect, useState } from 'react';
import { ZodIssue } from 'zod';
import { getPushAPIHost } from '../../internal/network/api';
import Controls from '../../internal/NotificareNotificationPreview/components/Controls/Controls';
import { OptionsProvider } from '../../internal/NotificareNotificationPreview/components/OptionsProvider/OptionsProvider';
import { NotificationAndroidPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationAndroidPreview/NotificationAndroidPreview';
import NotificationIOSPreview from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationIOSPreview/NotificationIOSPreview';
import { NotificationWebPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationWebPreview/NotificationWebPreview';
import Loading from '../../internal/NotificareNotificationPreview/components/shared-components/Loading/Loading';
import UnavailablePreview from '../../internal/NotificareNotificationPreview/components/shared-components/UnavailablePreview/UnavailablePreview';
import { notificareNotificationSchema } from '../../internal/NotificareNotificationPreview/schemas/notificare-notification/notificare-notification-schema';
import {
  NotificationPreviewModel,
  NotificationPreviewPlatform,
  NotificationPreviewDisplayMode,
  NotificationPreviewWebDesktopOS,
  NotificationPreviewWebDevice,
  NotificationPreviewWebMobileType,
} from '../../internal/NotificareNotificationPreview/types/notification-preview-model';
import { NotificareApplication } from './models/notificare-application';
import { NotificareNotification } from './models/notificare-notification';
import { NotificareNotificationPreviewVariant } from './models/notificare-notification-preview-variant';

const defaultApplication: NotificareApplication = {
  name: 'My App',
  androidPackageName: 'com.example.app',
  websitePushConfig: {
    icon: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
    allowedDomains: ['https://my-app.com/'],
  },
};

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

export function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
  serviceKey,
  googleMapsAPIKey,
}: NotificareNotificationPreviewProps) {
  const [application, setApplication] = useState<NotificareApplication>();

  useEffect(
    function fetchApplicationData() {
      (async () => {
        if (applicationId) {
          try {
            const url = new URL(
              `/application/${encodeURIComponent(applicationId)}/info`,
              getPushAPIHost(),
            );
            url.searchParams.set('apiKey', serviceKey);

            const response = await fetch(url);

            if (!response.ok) {
              const { error } = await response.json();
              console.error(`There was an error trying to get the application: ${error}`);
              setApplication(defaultApplication);
            } else {
              const { application } = await response.json();
              setApplication(application);
            }
          } catch (error) {
            console.error('Error fetching the application: ', error);
            setApplication(defaultApplication);
          }
        } else {
          setApplication(defaultApplication);
        }
      })();
    },
    [applicationId, serviceKey],
  );

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

  const notificationResult = notificareNotificationSchema.safeParse(notification);

  if (!notificationResult.success) {
    showNotificationErrors(notificationResult.error.errors);
  }

  return (
    <OptionsProvider options={{ serviceKey, googleMapsAPIKey }}>
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

          {application ? (
            <div className="notificare__push__preview">
              {notificationResult.success ? (
                <>
                  {platform === 'android' && (
                    <NotificationAndroidPreview
                      notification={notificationResult.data}
                      application={application}
                      displayMode={displayMode}
                    />
                  )}

                  {platform === 'ios' && (
                    <NotificationIOSPreview
                      notification={notificationResult.data}
                      application={application}
                      displayMode={displayMode}
                    />
                  )}

                  {platform === 'web' && (
                    <NotificationWebPreview
                      notification={notificationResult.data}
                      application={application}
                      displayMode={displayMode}
                      webDevice={webDevice}
                      webMobileType={webMobileType}
                      webDesktopOS={webDesktopOS}
                    />
                  )}
                </>
              ) : (
                <UnavailablePreview message={'→ Invalid Notification'} showConsoleWarning={true} />
              )}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </OptionsProvider>
  );
}

/**
 * Component that displays a notification preview for different platforms.
 *
 * @param {NotificareNotification} notification - The notification to be displayed in the preview.
 * @param {string} applicationId - The unique identifier of a Notificare application (optional).
 * @param {boolean} [showControls] - Whether the controls should be shown (optional). It's true by default.
 * @param {NotificareNotificationPreviewVariant} variant - The variant of the notification preview (optional). It's 'android-lockscreen' by default.
 * @property {string} [serviceKey] - A service key provided by a Notificare admin.
 * @property {string} [googleMapsAPIKey] - A Google Maps API key (optional).
 */
interface NotificareNotificationPreviewProps {
  notification: NotificareNotification;
  applicationId?: string;
  showControls?: boolean;
  variant?: NotificareNotificationPreviewVariant;
  serviceKey: string;
  googleMapsAPIKey?: string;
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
