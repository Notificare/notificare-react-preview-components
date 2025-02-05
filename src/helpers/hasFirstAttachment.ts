import { BasePushMessageProps } from '../models/notification';

// Checks if the first attachment in a notification is present

export function hasFirstAttachment(notification: BasePushMessageProps) {
  return !!notification.attachments?.[0];
}
