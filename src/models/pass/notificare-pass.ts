export interface NotificarePass {
  barcode: string;
  data: NotificarePassData;
}

export interface NotificarePassData {
  fields: NotificarePassDataFields;
}

export type NotificarePassDataFields = Record<string, string | boolean | number | null>;
