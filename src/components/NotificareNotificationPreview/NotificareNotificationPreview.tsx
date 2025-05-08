import '../../preset.css';
import './NotificareNotificationPreview.css';
import { useEffect, useState } from 'react';
import { ZodIssue } from 'zod';
import { getPushAPIHost } from '../../config/api';
import Controls from '../../internal/NotificareNotificationPreview/components/Controls/Controls';
import { OptionsProvider } from '../../internal/NotificareNotificationPreview/components/OptionsProvider/OptionsProvider';
import { NotificationAndroidPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationAndroidPreview/NotificationAndroidPreview';
import NotificationIOSPreview from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationIOSPreview/NotificationIOSPreview';
import { NotificationWebPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationWebPreview/NotificationWebPreview';
import LoadingIcon from '../../internal/NotificareNotificationPreview/components/shared-components/LoadingIcon/LoadingIcon';
import UnavailablePreview from '../../internal/NotificareNotificationPreview/components/shared-components/UnavailablePreview/UnavailablePreview';
import { NotificationPreviewVariant } from '../../internal/NotificareNotificationPreview/models/notification-preview-variant';
import { notificareNotificationSchema } from '../../internal/NotificareNotificationPreview/schemas/notificare-notification/notificare-notification-schema';
import { NotificareApplication } from './models/notificare-application';
import { NotificareNotification } from './models/notificare-notification';
import { NotificareNotificationVariant } from './models/notificare-notification-variant';

const defaultApplication: NotificareApplication = {
  name: 'My App',
  androidPackageName: 'com.example.app',
  websitePushConfig: {
    icon: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
    allowedDomains: ['https://my-app.com/'],
  },
};

export default function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
  serviceKey,
  googleMapsAPIKey,
}: NotificareNotificationPreviewProps) {
  const [application, setApplication] = useState<NotificareApplication>();

  useEffect(() => {
    (async function fetchApplicationData() {
      if (applicationId) {
        try {
          const response = await fetch(
            `${getPushAPIHost()}/application/${applicationId}/info?apiKey=${serviceKey}`,
          );

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
  }, [applicationId, serviceKey]);

  const notificationPreviewVariants = new Map<
    NotificareNotificationPreviewProps['variant'],
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

          {application ? (
            <div className="notificare__push__preview">
              {notificationResult.success ? (
                <>
                  {platform === 'android' && (
                    <NotificationAndroidPreview
                      notification={notificationResult.data}
                      application={application}
                      mobileVariant={mobileVariant}
                    />
                  )}

                  {platform === 'ios' && (
                    <NotificationIOSPreview
                      notification={notificationResult.data}
                      application={application}
                      mobileVariant={mobileVariant}
                    />
                  )}

                  {platform === 'web' && (
                    <NotificationWebPreview
                      notification={notificationResult.data}
                      application={application}
                      mobileVariant={mobileVariant}
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
            <LoadingIcon />
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
 * @param {NotificareNotificationVariant} variant - The variant of the notification preview (optional). It's 'android-lockscreen' by default.
 * @property {string} [serviceKey] - A service key provided by a Notificare admin.
 * @property {string} [googleMapsAPIKey] - A Google Maps API key (optional).
 */
interface NotificareNotificationPreviewProps {
  notification: NotificareNotification;
  applicationId?: string;
  showControls?: boolean;
  variant?: NotificareNotificationVariant;
  serviceKey: string;
  googleMapsAPIKey?: string;
}

function showNotificationErrors(errors: ZodIssue[]) {
  const invalidType = errors.find(
    (e) => e.code === 'invalid_union_discriminator' && e.path.includes('type'), // check if notification type is valid
  );

  if (invalidType) {
    const validTypes = notificareNotificationSchema.options.map(
      (schema) => schema.shape.type.value,
    );

    console.error(
      `Notification error: \n\nInvalid notification type. Expected one of: ${validTypes.join(', ')}`,
    );
  } else {
    // Other errors besides 'type'
    const messages = errors.map((e) => e.message);
    console.error('Notification errors:\n\n' + messages.join('\n'));
  }
}
