export interface BasePushMessageProps {
  readonly _id?: string;
  readonly partial?: boolean;
  readonly type?: string;
  readonly time?: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly message: string;
  readonly content?: CloudNotificationContent[];
  readonly actions?: CloudNotificationAction[];
  readonly attachments?: CloudNotificationAttachment[];
  readonly extra?: CloudNotificationExtra;
}

interface CloudNotificationContent {
  readonly type: string;
  readonly data: unknown;
}

interface CloudNotificationAction {
  readonly _id: string;
  readonly type: string;
  readonly label?: string;
  readonly target?: string;
  readonly camera?: boolean;
  readonly keyboard?: boolean;
}

interface CloudNotificationAttachment {
  readonly mimeType: string;
  readonly uri: string;
}

type CloudNotificationExtra = Record<string, unknown>;
