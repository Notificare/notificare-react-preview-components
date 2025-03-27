export interface NotificareNotification {
  readonly _id?: string;
  readonly partial?: boolean;
  readonly type: string;
  readonly time?: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly message: string;
  readonly content?: Content[];
  readonly actions?: Action[];
  readonly attachments?: Attachment[];
}

interface Content {
  readonly type: string;
  readonly data: unknown;
}

interface Action {
  readonly _id: string;
  readonly type: string;
  readonly label?: string;
  readonly target?: string;
  readonly camera?: boolean;
  readonly keyboard?: boolean;
}

interface Attachment {
  readonly mimeType: string;
  readonly uri: string;
}
