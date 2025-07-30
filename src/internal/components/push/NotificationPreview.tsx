import { useState } from 'react';
import { UnavailablePreview } from '~/internal/components/shared';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { NotificationPreviewState } from './notification-preview-state';
import { NotificationAndroidPreview } from './platforms/android/NotificationAndroidPreview';
import { NotificationIOSPreview } from './platforms/ios/NotificationIOSPreview';
import { NotificationWebPreview } from './platforms/web/NotificationWebPreview';

export function NotificationPreview({
  notification,
  previewState,
}: {
  notification: VerifiedNotification;
  previewState: NotificationPreviewState;
}) {
  const [error, setError] = useState<string | null>(null);
  const [previousPreviewState, setPreviousPreviewState] = useState(previewState);

  if (previousPreviewState !== previewState) {
    setError(null);
    setPreviousPreviewState(previewState);
  }

  if (error) {
    return <UnavailablePreview message={error} showConsoleWarning={false} />;
  }

  switch (previewState.platform) {
    case 'android':
      return (
        <NotificationAndroidPreview
          notification={notification}
          previewState={previewState}
          onError={setError}
        />
      );
    case 'ios':
      return (
        <NotificationIOSPreview
          notification={notification}
          previewState={previewState}
          onError={setError}
        />
      );
    case 'web':
      return (
        <NotificationWebPreview
          notification={notification}
          previewState={previewState}
          onError={setError}
        />
      );
  }
}
