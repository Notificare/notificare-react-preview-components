export interface NotificareInAppMessage {
  readonly type: string;
  readonly title?: string;
  readonly message?: string;
  readonly image?: string;
  readonly primaryAction?: NotificareInAppMessageAction;
  readonly secondaryAction?: NotificareInAppMessageAction;
}

export interface NotificareInAppMessageAction {
  readonly label?: string;
  readonly destructive?: boolean;
  readonly url?: string;
}
