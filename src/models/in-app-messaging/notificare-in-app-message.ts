/**
 * Defines the structure of an in-app message object.
 *
 * @property {string} type - The type of the in-app message (e.g., "re.notifica.inappmessage.Banner", "re.notifica.inappmessage.Card").
 * @property {string} [title] - The title of the in-app message (optional).
 * @property {string} [message] - The message of the in-app message (optional).
 * @property {string} [image] - The image of the in-app message (optional).
 * @property {NotificareInAppMessageAction} [primaryAction] - The primary action of the in-app message (optional).
 * @property {NotificareInAppMessageAction} [secondaryAction] - The secondary action of the in-app message (optional).
 */
export interface NotificareInAppMessage {
  readonly type: string;
  readonly title?: string;
  readonly message?: string;
  readonly image?: string;
  readonly primaryAction?: NotificareInAppMessageAction;
  readonly secondaryAction?: NotificareInAppMessageAction;
}

/**
 * Defines an action associated with the in-app message.
 *
 * @property {string} [label] - The label for the action (option).
 * @property {boolean} [destructive] - Whether the action performs an irreversible operation (optional).
 */
export interface NotificareInAppMessageAction {
  readonly label?: string;
  readonly destructive?: boolean;
}
