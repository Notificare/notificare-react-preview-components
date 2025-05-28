import { NotificareNotificationSchema } from '../../schemas/notificare-notification/notificare-notification-schema';

export function hasActions(notification: NotificareNotificationSchema) {
  return !!(notification.actions && notification.actions.length > 0);
}

export function hasSingleAction(notification: NotificareNotificationSchema) {
  return !!(notification.actions && notification.actions.length === 1);
}

export function hasMultipleActions(notification: NotificareNotificationSchema) {
  return !!(notification.actions && notification.actions.length > 1);
}

export function hasFirstAttachment(notification: NotificareNotificationSchema) {
  return !!notification.attachments?.[0];
}

export function getMarkersFromNotification(
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>,
) {
  const markers: {
    title: string;
    latitude: number;
    longitude: number;
  }[] = [];

  notification.content.forEach((contentRow) => {
    markers.push({
      title: contentRow.data.title,
      latitude: contentRow.data.latitude,
      longitude: contentRow.data.longitude,
    });
  });

  return markers;
}
