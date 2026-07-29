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
  finePrint?: string | null | NotificarePassTemplateTranslatedData;
  merchantName?: string | null;
  eventName?: NotificarePassTemplateTranslatedData;
  accountNameLabel?: string | null;
  accountIdLabel?: string | null;
  rewardsTierLabel?: string | null;
  rewardsTier?: string | null;
  secondaryRewardsTierLabel?: string | null;
  secondaryRewardsTier?: string | null;
  pinLabel?: string | null;
  eventNumberLabel?: string | null;
  gateLabel?: string | null;
  sectionLabel?: string | null;
  confirmationCodeLabel?: string | null;
  customGateLabel?: NotificarePassTemplateTranslatedData;
  customSectionLabel?: NotificarePassTemplateTranslatedData;
  customConfirmationCodeLabel?: NotificarePassTemplateTranslatedData;
  customRowLabel?: NotificarePassTemplateTranslatedData;
  customSeatLabel?: NotificarePassTemplateTranslatedData;
  customCarriageLabel?: NotificarePassTemplateTranslatedData;
  customCoachLabel?: NotificarePassTemplateTranslatedData;
  customTicketNumberLabel?: NotificarePassTemplateTranslatedData;
  customConcessionCategoryLabel?: NotificarePassTemplateTranslatedData;
  customFareNameLabel?: NotificarePassTemplateTranslatedData;
  customPlatformLabel?: NotificarePassTemplateTranslatedData;
  customZoneLabel?: NotificarePassTemplateTranslatedData;
  customFareClassLabel?: NotificarePassTemplateTranslatedData;
  customRouteRestrictionsLabel?: NotificarePassTemplateTranslatedData;
  customRouteRestrictionsDetailsLabel?: NotificarePassTemplateTranslatedData;
  customTimeRestrictionsLabel?: NotificarePassTemplateTranslatedData;
  customOtherRestrictionsLabel?: NotificarePassTemplateTranslatedData;
  customPurchaseReceiptNumberLabel?: NotificarePassTemplateTranslatedData;
  customPurchaseFaceValueLabel?: NotificarePassTemplateTranslatedData;
  customPurchasePriceLabel?: NotificarePassTemplateTranslatedData;
  customDiscountMessageLabel?: NotificarePassTemplateTranslatedData;
  venue?: {
    name: NotificarePassTemplateTranslatedData;
    address: NotificarePassTemplateTranslatedData;
  };
  dateTime?: {
    doorsOpen: string | null;
    start: string | null;
    end: string | null;
    doorsOpenLabel: string | null;
    customDoorsOpenLabel: NotificarePassTemplateTranslatedData;
  };
  enableSingleLegItinerary?: boolean | null;
  transitType?: string | null;
  logo?: NotificarePassTemplateImageData;
  wideLogo?: NotificarePassTemplateImageData;
  programLogo?: NotificarePassTemplateImageData;
  wideProgramLogo?: NotificarePassTemplateImageData;
  heroImage?: NotificarePassTemplateImageData;
  titleImage?: NotificarePassTemplateImageData;
  wideTitleImage?: NotificarePassTemplateImageData;

  [key: string]: unknown;
}

export interface NotificarePassTemplateDesignGooglePayWalletObject {
  hexBackgroundColor?: string | null;
  accountId?: string;
  accountName?: string | null;
  loyaltyPoints?: NotificarePassTemplatePointsData;
  secondaryLoyaltyPoints?: NotificarePassTemplatePointsData;
  balance?: NotificarePassTemplateMoneyData;
  cardNumber?: string | null;
  eventNumber?: string | null;
  pin?: string | null;
  balanceUpdateTime?: NotificarePassTemplateDateData;
  seatInfo?: {
    seat: NotificarePassTemplateTranslatedData;
    row: NotificarePassTemplateTranslatedData;
    section: NotificarePassTemplateTranslatedData;
    gate: NotificarePassTemplateTranslatedData;
  };
  ticketHolderName?: string | null;
  ticketType?: NotificarePassTemplateTranslatedData;
  ticketNumber?: string | null;
  reservationInfo?: {
    confirmationCode: string | null;
  };
  faceValue?: NotificarePassTemplateMoneyData;
  ticketLeg?: NotificarePassTemplateDesignGooglePayTransitTicketLeg | null;
  ticketLegs?: NotificarePassTemplateDesignGooglePayTransitTicketLeg[] | null;
  ticketRestrictions?: {
    routeRestrictions: NotificarePassTemplateTranslatedData;
    routeRestrictionsDetails: NotificarePassTemplateTranslatedData;
    timeRestrictions: NotificarePassTemplateTranslatedData;
    otherRestrictions: NotificarePassTemplateTranslatedData;
  };
  purchaseDetails?: {
    purchaseReceiptNumber: string | null;
    purchaseDateTime: string | null;
    accountId: string | null;
    confirmationCode: string | null;
    ticketCost: {
      faceValue: NotificarePassTemplateMoneyData;
      purchasePrice: NotificarePassTemplateMoneyData;
      discountMessage: NotificarePassTemplateTranslatedData;
    };
  };
  tripType?: string | null;
  passengerNames?: string | null;
  passengerType?: string | null;
  ticketStatus?: string | null;
  concessionCategory?: string | null;
  customTicketStatus?: NotificarePassTemplateTranslatedData;
  customConcessionCategory?: NotificarePassTemplateTranslatedData;
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

export interface NotificarePassTemplateDateData {
  date: string | null;
}

export interface NotificarePassTemplateTranslatedData {
  defaultValue: {
    value?: string | null;
  };
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

export interface NotificarePassTemplateDesignGooglePayTransitTicketLeg {
  originName: NotificarePassTemplateTranslatedData;
  destinationName: NotificarePassTemplateTranslatedData;
  originStationCode: string | null;
  destinationStationCode: string | null;
  departureDateTime: string | null;
  arrivalDateTime: string | null;
  carriage: string | null;
  fareName: NotificarePassTemplateTranslatedData;
  platform: string | null;
  zone: string | null;
  transitOperatorName: NotificarePassTemplateTranslatedData;
  ticketSeats: {
    coach: string | null;
    seat: string | null;
    seatAssignment: NotificarePassTemplateTranslatedData;
    fareClass: string | null;
    customFareClass?: NotificarePassTemplateTranslatedData;
  }[];
}
