import '../../preset.css';
import './NotificareNotificationPreview.css';
import { useState } from 'react';
import { ZodIssue } from 'zod';
import { NotificationPreviewState } from '../../internal/components/push/notification-preview-state';
import { NotificationPreview } from '../../internal/components/push/NotificationPreview';
import { Controls } from '../../internal/components/push/preview-controls/Controls';
import { Loading } from '../../internal/components/shared/Loading/Loading';
import { UnavailablePreview } from '../../internal/components/shared/UnavailablePreview/UnavailablePreview';
import { ApplicationProvider } from '../../internal/context/application';
import { OptionsProvider } from '../../internal/context/options';
import { useApplicationLoader } from '../../internal/hooks';
import { notificareNotificationSchema } from '../../internal/schemas/notificare-notification/notificare-notification-schema';
import { NotificareNotification, NotificareNotificationPreviewVariant } from '../../models';

const DEFAULT_STATES = {
  'android-lockscreen': {
    platform: 'android',
    displayMode: 'lockscreen',
  },
  'android-lockscreen-expanded': {
    platform: 'android',
    displayMode: 'lockscreen-expanded',
  },
  'android-app-ui': {
    platform: 'android',
    displayMode: 'app-ui',
  },
  'ios-lockscreen': {
    platform: 'ios',
    displayMode: 'lockscreen',
  },
  'ios-lockscreen-expanded': {
    platform: 'ios',
    displayMode: 'lockscreen-expanded',
  },
  'ios-app-ui': {
    platform: 'ios',
    displayMode: 'app-ui',
  },
  'web-desktop-macos': {
    platform: 'web',
    displayMode: 'lockscreen',
    formFactor: 'desktop',
    os: 'macos',
  },
  'web-android-app-ui': {
    platform: 'web',
    displayMode: 'lockscreen',
    formFactor: 'phone',
    os: 'android',
  },
  'web-iphone-app-ui': {
    platform: 'web',
    displayMode: 'lockscreen',
    formFactor: 'phone',
    os: 'ios',
  },
} satisfies Record<NotificareNotificationPreviewVariant, NotificationPreviewState>;

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

  const [previewState, setPreviewState] = useState<NotificationPreviewState>(
    DEFAULT_STATES[variant],
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
            <Controls previewState={previewState} onPreviewStateChanged={setPreviewState} />
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
                        <NotificationPreview
                          notification={notificationResult.data}
                          previewState={previewState}
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
