import { BasePushMessage } from '../schemas/notificationSchema';

export function hasActions(notification: BasePushMessage) {
  return !!(notification.actions && notification.actions.length > 0);
}

export function hasSingleAction(notification: BasePushMessage) {
  return !!(notification.actions && notification.actions.length === 1);
}

export function hasMultipleActions(notification: BasePushMessage) {
  return !!(notification.actions && notification.actions.length > 1);
}

export function hasFirstAttachment(notification: BasePushMessage) {
  return !!notification.attachments?.[0];
}

export function getMarkersFromNotification(
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Map' }>,
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
