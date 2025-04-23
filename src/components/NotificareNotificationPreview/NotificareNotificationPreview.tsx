import '../../preset.css';
import './NotificareNotificationPreview.css';
import { useEffect, useState } from 'react';
import { ZodIssue } from 'zod';
import Controls from '../../internal/NotificareNotificationPreview/components/Controls/Controls';
import { OptionsProvider } from '../../internal/NotificareNotificationPreview/components/OptionsProvider/OptionsProvider';
import { NotificationAndroidPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationAndroidPreview/NotificationAndroidPreview';
import NotificationIOSPreview from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationIOSPreview/NotificationIOSPreview';
import { NotificationWebPreview } from '../../internal/NotificareNotificationPreview/components/preview-components/NotificationWebPreview/NotificationWebPreview';
import LoadingIcon from '../../internal/NotificareNotificationPreview/components/shared-components/LoadingIcon/LoadingIcon';
import { NotificationPreviewVariant } from '../../internal/NotificareNotificationPreview/models/notification-preview-variant';
import { notificareNotificationSchema } from '../../internal/NotificareNotificationPreview/schemas/notificare-notification/notificare-notification-schema';
import { NotificareApplication } from './models/notificare-application';
import { NotificareNotification } from './models/notificare-notification';
import { NotificareNotificationVariant } from './models/notificare-notification-variant';

const defaultApplication: NotificareApplication = {
  name: 'My App',
  androidPackageName: 'com.example.app',
  websitePushConfig: {
    icon: '/website-push/07ef418649d1338ff6881d1efddaa32179f5150e0c6dabea9a78a10e6798c84e/3420c494d8076c07dd761fdc8521b71f884c7be0a1333073803c89d6e7b2eda2',
  },
  allowedDomains: ['https://my-app.com/'],
};

export default function NotificareNotificationPreview({
  notification,
  applicationId,
  showControls = false,
  variant,
  serviceKey,
  googleMapsAPIKey,
}: NotificareNotificationPreviewProps) {
  const [application, setApplication] = useState<NotificareApplication>();

  useEffect(() => {
    (async function fetchApplicationData() {
      if (applicationId) {
        try {
          const response = await fetch(
            `https://push.notifica.re/application/${applicationId}/info?apiKey=${serviceKey}`,
          );
          const data = await response.json();
          const application = data.application;

          if (!application) {
            console.error(`There was an error trying to get the application: ${data.error}`);
            setApplication(defaultApplication);
          } else {
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

          {application ? (
            <div className="notificare__notification-preview">
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
                <NotificareNotificationPreviewError />
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
 * @param {boolean} [showControls] - Whether the controls should be shown (optional). It's false by default.
 * @param {NotificareNotificationVariant} variant - The variant of the notification preview.
 * @property {string} [serviceKey] - A service key provided by a Notificare admin.
 * @property {string} [googleMapsApiKey] - A Google Maps API key (optional).
 */
interface NotificareNotificationPreviewProps {
  notification: NotificareNotification;
  applicationId?: string;
  showControls?: boolean;
  variant: NotificareNotificationVariant;
  serviceKey: string;
  googleMapsAPIKey?: string;
}

function NotificareNotificationPreviewError() {
  return (
    <div data-testid="notificare-notification-preview-error">
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
          <div
            className="notificare__notification-preview-error-reason-text"
            data-testid="notificare-notification-preview-error-message"
          >
            → Invalid Notification
          </div>
        </div>
      </div>
      <div className="notificare__notification-preview-error-check-console-text">
        Check console for more information
      </div>
    </div>
  );
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
