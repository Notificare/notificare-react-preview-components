import { VerifiedNotification } from '~/internal/schemas/notificare-notification';

export function hasActions(notification: VerifiedNotification) {
  return !!(notification.actions && notification.actions.length > 0);
}

export function hasSingleAction(notification: VerifiedNotification) {
  return !!(notification.actions && notification.actions.length === 1);
}

export function hasMultipleActions(notification: VerifiedNotification) {
  return !!(notification.actions && notification.actions.length > 1);
}

export function hasFirstAttachment(notification: VerifiedNotification) {
  return !!notification.attachments?.[0];
}

export function getMarkersFromNotification(
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Map' }>,
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

export function markupContainsNotificareOpenActionQueryParameter(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const links = doc.querySelectorAll('a');

  let hasParameter = false;

  links.forEach((link) => {
    const url = new URL(link.href, window.location.origin);
    if (url.searchParams.has('notificareOpenAction')) {
      hasParameter = true;
    }
  });

  return hasParameter;
}
