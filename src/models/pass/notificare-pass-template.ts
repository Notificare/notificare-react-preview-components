export interface NotificarePassTemplate {
  readonly type:
    | 'loyalty'
    | 'offer'
    | 'giftCard'
    | 'generic'
    | 'transit'
    | 'flight'
    | 'eventTicket';
  readonly templateDesign: NotificarePassTemplateDesign;
  readonly barcodeDesign: NotificarePassTemplateBarcodeDesign;
  readonly templateData: NotificarePassTemplateDataField[];
  readonly passData: NotificarePassTemplatePassDataField[];
}

export interface NotificarePassTemplateDesign {
  appleWallet: NotificarePassTemplateDesignAppleWallet;
  googlePay: NotificarePassTemplateDesignGooglePay;
}

export interface NotificarePassTemplateBarcodeDesign {
  format: 'none' | 'qr' | 'pdf417' | 'aztec' | 'code128';
  showAltText: boolean;
}

export interface NotificarePassTemplateDataField {
  key: string;
  type: string;
  value: string | boolean | number;
  _id: string;
}

export interface NotificarePassTemplatePassDataField {
  key: string;
  type: string;
  default: string | boolean | number;
  _id: string;
}

export interface NotificarePassTemplateDesignAppleWallet {}

export interface NotificarePassTemplateDesignGooglePay {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
}

export interface NotificarePassTemplateDesignGooglePayWalletClass {
  issuerName?: string;
  hexBackgroundColor?: string | null;
  programName?: string;
  title?: string;
  provider?: string | null;
  details?: string | null;
  finePrint?: string | null;
  programLogo?: NotificarePassTemplateImageData;
  accountNameLabel?: string | null;
  accountIdLabel?: string | null;
  rewardsTierLabel?: string | null;
  rewardsTier?: string | null;
  secondaryRewardsTierLabel?: string | null;
  secondaryRewardsTier?: string | null;
  wideProgramLogo?: NotificarePassTemplateImageData;
  heroImage?: NotificarePassTemplateImageData;
  titleImage?: NotificarePassTemplateImageData;
  wideTitleImage?: NotificarePassTemplateImageData;

  [key: string]: unknown;
}

export interface NotificarePassTemplateDesignGooglePayWalletObject {
  accountId?: string;
  accountName?: string | null;
  loyaltyPoints?: NotificarePassTemplatePointsData;
  secondaryLoyaltyPoints?: NotificarePassTemplatePointsData;
  heroImage?: NotificarePassTemplateImageData;
  imageModulesData: NotificarePassTemplateDesignGooglePayImageModuleData[];
  messages: NotificarePassTemplateDesignGooglePayMessage[];
  textModulesData: NotificarePassTemplateDesignGooglePayTextModuleData[];
  linksModuleData: NotificarePassTemplateDesignGooglePayLinksModuleData;

  [key: string]: unknown;
}

export interface NotificarePassTemplatePointsData {
  label: string;
  balance: NotificarePassTemplateBalanceData;
}

export interface NotificarePassTemplateImageData {
  sourceUri?: {
    uri?: string | null;
  };
}

export interface NotificarePassTemplateMoneyData {
  micros: string | null;
  currencyCode: string | null;
}

export interface NotificarePassTemplateBalanceData {
  string: string | null;
  int: string | null;
  double: string | null;
  money: NotificarePassTemplateMoneyData;
}

export interface NotificarePassTemplateDesignGooglePayImageModuleData {
  mainImage: NotificarePassTemplateImageData;
}

export interface NotificarePassTemplateDesignGooglePayMessage {
  header: string;
  body: string;
}

export interface NotificarePassTemplateDesignGooglePayTextModuleData {
  header: string;
  body: string;
}

export interface NotificarePassTemplateDesignGooglePayLinksModuleData {
  uris: NotificarePassTemplateDesignGooglePayLinksModuleDataURI[];
}

export interface NotificarePassTemplateDesignGooglePayLinksModuleDataURI {
  uri: string;
  description: string;
}
