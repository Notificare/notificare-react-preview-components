/**
 * Defines the structure of a notification object.
 *
 * @property {string} type - The type of the notification (e.g., "re.notifica.notification.Alert", "re.notifica.notification.WebView").
 * @property {string} [title] - The title of the notification (optional).
 * @property {string} [subtitle] - The subtitle of the notification (optional).
 * @property {string} message - The message of the notification.
 * @property {NotificareNotificationContent[]} [content] - An array of content objects associated with the notification (optional). Their structure depend on the notification type.
 * @property {NotificareNotificationAction[]} [actions] - An array of actions associated with the notification (optional).
 * @property {NotificareNotificationAttachment[]} [attachments] - An array of attachments associated with the notification (optional).
 */
export interface NotificareNotification {
  readonly type: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly message: string;
  readonly content?: NotificareNotificationContent[];
  readonly actions?: NotificareNotificationAction[];
  readonly attachments?: NotificareNotificationAttachment[];
}

/**
 * Defines the content associated with the notification.
 *
 * @property {string} type - The type of content.
 * @property {unknown} data - The content data. Its structure depends on the type.
 */
export interface NotificareNotificationContent {
  readonly type: string;
  readonly data: unknown;
}

/**
 * Defines an action associated with the notification.
 *
 * @property {string} type - The type of action (e.g., "re.notifica.action.Callback", "re.notifica.action.SMS").
 * @property {string} label - The label for the action.
 * @property {string} [target] - The target of the action (optional).
 * @property {boolean} [camera] - Whether the action involves a camera (optional).
 * @property {boolean} [keyboard] - Whether the action involves a keyboard (optional).
 */
export interface NotificareNotificationAction {
  readonly type: string;
  readonly label: string;
  readonly target?: string;
  readonly camera?: boolean;
  readonly keyboard?: boolean;
}

/**
 * Defines an attachment associated with the notification.
 *
 * @property {string} mimeType - The MIME type of the attachment (e.g., "image/jpeg", "image/png").
 * @property {string} uri - The URI of the attachment.
 */
export interface NotificareNotificationAttachment {
  readonly mimeType: string;
  readonly uri: string;
}
