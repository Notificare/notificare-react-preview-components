import { NotificareNotificationSchema } from '../../schemas/notificare-notification/notificare-notification-schema';
import { NotificationPreviewState } from './notification-preview-state';
import { NotificationAndroidPreview } from './platforms/android/NotificationAndroidPreview';
import { NotificationIOSPreview } from './platforms/ios/NotificationIOSPreview';
import { NotificationWebPreview } from './platforms/web/NotificationWebPreview';

export function NotificationPreview({
  notification,
  previewState,
}: {
  notification: NotificareNotificationSchema;
  previewState: NotificationPreviewState;
}) {
  switch (previewState.platform) {
    case 'android':
      return <NotificationAndroidPreview notification={notification} previewState={previewState} />;
    case 'ios':
      return <NotificationIOSPreview notification={notification} previewState={previewState} />;
    case 'web':
      return <NotificationWebPreview notification={notification} previewState={previewState} />;
  }
}
