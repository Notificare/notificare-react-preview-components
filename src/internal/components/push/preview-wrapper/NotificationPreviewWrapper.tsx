import { useState } from 'react';
import { NotificationPreviewState } from '~/internal/components/push/notification-preview-state';
import { NotificationPreview } from '~/internal/components/push/NotificationPreview';
import { Controls } from '~/internal/components/push/preview-controls/Controls';
import { Loading } from '~/internal/components/shared/Loading/Loading';
import { ApplicationProvider } from '~/internal/context/application';
import { useOptions } from '~/internal/context/options';
import { useApplicationLoader } from '~/internal/hooks';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { NotificareNotificationPreviewVariant } from '~/models';

import '~/preset.css';
import './NotificationPreviewWrapper.css';

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
    displayMode: 'app-ui',
    formFactor: 'phone',
    os: 'android',
  },
  'web-iphone-app-ui': {
    platform: 'web',
    displayMode: 'app-ui',
    formFactor: 'phone',
    os: 'ios',
  },
} satisfies Record<NotificareNotificationPreviewVariant, NotificationPreviewState>;

export function NotificationPreviewWrapper({
  notification,
  applicationId,
  showControls = true,
  variant = 'android-lockscreen',
}: NotificareNotificationPreviewContentProps) {
  const [previewState, setPreviewState] = useState<NotificationPreviewState>(
    DEFAULT_STATES[variant],
  );

  const { serviceKey } = useOptions();

  const applicationState = useApplicationLoader({
    id: applicationId,
    serviceKey,
  });

  return (
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
                  <NotificationPreview notification={notification} previewState={previewState} />
                </div>
              </ApplicationProvider>
            );
        }
      })()}
    </div>
  );
}

export interface NotificareNotificationPreviewContentProps {
  notification: VerifiedNotification;
  applicationId?: string;
  showControls?: boolean;
  variant?: NotificareNotificationPreviewVariant;
}
