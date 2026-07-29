import { NotificarePassDataFields } from '~/models/pass/notificare-pass';
import {
  NotificarePassTemplateBalanceData,
  NotificarePassTemplateDataField,
  NotificarePassTemplateDateData,
  NotificarePassTemplateDesignGooglePayLinksModuleDataURI,
  NotificarePassTemplateDesignGooglePayMessage,
  NotificarePassTemplateDesignGooglePayTextModuleData,
  NotificarePassTemplateDesignGooglePayWalletObject,
  NotificarePassTemplateImageData,
  NotificarePassTemplateMoneyData,
  NotificarePassTemplatePassDataField,
  NotificarePassTemplateTranslatedData,
} from '~/models/pass/notificare-pass-template';

const MAX_MESSAGES = 20;
const MAX_TEXT_MODULE_FIELDS = 20;

export function computeModulesData(
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject,
  passTemplatePassData: NotificarePassTemplatePassDataField[],
  passData?: NotificarePassDataFields,
) {
  const { imageModulesData, textModulesData, linksModuleData, messages } = walletObject;

  const result = {} as {
    imageModulesDataMainImage: string | undefined;
    textModulesData: NotificarePassTemplateDesignGooglePayTextModuleData[];
    linksModuleDataURIS: string[];
    messages: NotificarePassTemplateDesignGooglePayMessage[];
  };

  const lookupPassDataValue = lookup((value) =>
    getPassDataValue(value, passTemplatePassData, passData),
  );

  result.messages = computeMessagesOrTextModulesData(messages, lookupPassDataValue, MAX_MESSAGES);

  if (imageModulesData[0]?.mainImage.sourceUri?.uri) {
    result.imageModulesDataMainImage = lookupPassDataValue(
      imageModulesData[0].mainImage.sourceUri.uri,
    );
  }

  result.textModulesData = computeMessagesOrTextModulesData(
    textModulesData,
    lookupPassDataValue,
    MAX_TEXT_MODULE_FIELDS,
  );

  result.linksModuleDataURIS = computeLinksModuleDataURIS(
    linksModuleData.uris,
    lookupPassDataValue,
  );

  return result;
}

export function computePassTemplateDataValues<T extends string>(
  fieldsMap: Record<T, DataField>,
  passTemplateData: NotificarePassTemplateDataField[],
) {
  return computeValues(
    fieldsMap,
    lookup((value) => getPassTemplateDataValue(value, passTemplateData)),
  );
}

export function computePassDataValues<T extends string>(
  fieldsMap: Record<T, DataField>,
  passTemplatePassData: NotificarePassTemplatePassDataField[],
  passData?: NotificarePassDataFields,
) {
  return computeValues(
    fieldsMap,
    lookup((value) => getPassDataValue(value, passTemplatePassData, passData)),
  );
}

function computeMessagesOrTextModulesData(
  data:
    | NotificarePassTemplateDesignGooglePayMessage[]
    | NotificarePassTemplateDesignGooglePayTextModuleData[],
  lookup: (value: string) => string | undefined,
  limit: number,
) {
  const result = [];

  for (const { header, body } of data) {
    if (result.length >= limit) break;

    const resolvedHeader = lookup(header);
    const resolvedBody = lookup(body);

    if (!resolvedHeader || !resolvedBody) continue;

    result.push({
      header: resolvedHeader,
      body: resolvedBody,
    });
  }

  return result;
}

function computeLinksModuleDataURIS(
  data: NotificarePassTemplateDesignGooglePayLinksModuleDataURI[],
  lookup: (value: string) => string | undefined,
) {
  const result = [] as string[];

  for (const { description } of data) {
    const resolvedDescription = lookup(description);

    if (!resolvedDescription) continue;

    result.push(resolvedDescription);
  }

  return result;
}

function computeValues<T extends string>(
  fieldsMap: Record<T, DataField>,
  lookup: (value: string) => string | undefined,
) {
  const result = {} as Record<T, string>;

  for (const key in fieldsMap) {
    const { value, fallback = '', format, replace } = fieldsMap[key];

    if (!value) {
      result[key] = fallback;
      continue;
    }

    let resolvedValue;

    if (isBalanceData(value)) {
      resolvedValue = computeBalanceValue(value, lookup);
    }

    if (isMoneyData(value)) {
      resolvedValue = computeMoneyValue(value, lookup);
    }

    if (isImageData(value)) {
      resolvedValue = computeImageValue(value, lookup);
    }

    if (isDateData(value)) {
      resolvedValue = computeDateValue(value, lookup);
    }

    if (isTranslatedData(value)) {
      resolvedValue = computeTranslatedValue(value, lookup);
    }

    if (typeof value === 'string') {
      resolvedValue = lookup(value);

      if (resolvedValue) {
        if (replace) {
          resolvedValue = replace[resolvedValue];
        }

        if (format === 'date' || format === 'time' || format === 'date-time') {
          resolvedValue = formatDate(resolvedValue, format);
        }
      }
    }

    result[key] = resolvedValue ?? fallback;
  }

  return result;
}

function computeBalanceValue(
  value: NotificarePassTemplateBalanceData,
  lookup: (value: string) => string | undefined,
) {
  const { string, int, double, money } = value;

  if (money.micros && money.currencyCode) {
    const resolvedMicros = lookup(money.micros);
    const resolvedCurrencyCode = lookup(money.currencyCode);

    if (!resolvedMicros || !resolvedCurrencyCode) return;

    return formatCurrency(resolvedMicros, resolvedCurrencyCode);
  }

  const primitiveValue = string ?? int ?? double;

  if (!primitiveValue) return;

  return lookup(primitiveValue);
}

function computeMoneyValue(
  value: NotificarePassTemplateMoneyData,
  lookup: (value: string) => string | undefined,
) {
  const { micros, currencyCode } = value;

  if (!micros || !currencyCode) return;

  const resolvedMicros = lookup(micros);
  const resolvedCurrencyCode = lookup(currencyCode);

  if (!resolvedMicros || !resolvedCurrencyCode) return;

  return formatCurrency(resolvedMicros, resolvedCurrencyCode);
}

function computeImageValue(
  value: NotificarePassTemplateImageData,
  lookup: (value: string) => string | undefined,
) {
  const uri = value.sourceUri?.uri;

  if (!uri) return;

  return lookup(uri);
}

function computeDateValue(
  value: NotificarePassTemplateDateData,
  lookup: (value: string) => string | undefined,
) {
  const { date } = value;

  if (!date) return;

  const resolvedDate = lookup(date);

  if (!resolvedDate) return;

  return formatDate(resolvedDate);
}

function computeTranslatedValue(
  value: NotificarePassTemplateTranslatedData,
  lookup: (value: string) => string | undefined,
) {
  const { defaultValue } = value;

  if (!defaultValue.value) return;

  return lookup(defaultValue.value);
}

function lookup(lookup: (value: string) => string | undefined) {
  return (value: string) => {
    if (!value.startsWith('{{') || !value.endsWith('}}')) {
      return value;
    }

    const normalizedValue = value.slice(2, -2);
    return lookup(normalizedValue);
  };
}

function getPassDataValue(
  value: string,
  passTemplatePassData: NotificarePassTemplatePassDataField[],
  passData?: NotificarePassDataFields,
) {
  const passDataValue = passData?.[value];

  if (passDataValue != null) {
    return passDataValue.toString();
  }

  const field = passTemplatePassData.find((field) => field.key === value);

  return field?.default.toString();
}

function getPassTemplateDataValue(
  value: string,
  passTemplateData: NotificarePassTemplateDataField[],
) {
  const field = passTemplateData.find((field) => field.key === value);

  return field?.value.toString();
}

function formatCurrency(value: string, currency = 'USD', locale = 'en-US') {
  try {
    const numberValue = parseStringToNumber(value);

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      currency,
    }).format(numberValue);
  } catch (error) {
    console.error('It was not possible to format the money value: ', error);
    return value;
  }
}

type FormatType = 'date' | 'time' | 'date-time';

function formatDate(value: string, format: FormatType = 'date-time', locale = 'en-US') {
  try {
    const date = new Date(value);

    const options: Intl.DateTimeFormatOptions = {};

    if (format === 'date' || format === 'date-time') {
      options.month = 'short';
      options.day = 'numeric';
      options.year = 'numeric';
    }

    if (format === 'time' || format === 'date-time') {
      options.hour = 'numeric';
      options.minute = '2-digit';
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (error) {
    console.error('It was not possible to format the date value:', error);
  }
}

function parseStringToNumber(value: string) {
  const number = Number(value.trim());

  if (Number.isNaN(number)) throw new Error(`${value} is not a number.`);

  return number;
}

function isBalanceData(value: DataFieldValue): value is NotificarePassTemplateBalanceData {
  return (
    typeof value === 'object' &&
    value !== null &&
    'string' in value &&
    'int' in value &&
    'double' in value &&
    'money' in value
  );
}

function isMoneyData(value: DataFieldValue): value is NotificarePassTemplateMoneyData {
  return (
    typeof value === 'object' && value !== null && 'micros' in value && 'currencyCode' in value
  );
}

function isImageData(value: DataFieldValue): value is NotificarePassTemplateImageData {
  return typeof value === 'object' && value !== null && 'sourceUri' in value;
}

function isDateData(value: DataFieldValue): value is NotificarePassTemplateDateData {
  return typeof value === 'object' && value !== null && 'date' in value;
}

function isTranslatedData(value: DataFieldValue): value is NotificarePassTemplateTranslatedData {
  return typeof value === 'object' && value !== null && 'defaultValue' in value;
}

interface DataField {
  value: DataFieldValue;
  fallback?: string;
  format?: DataFieldFormat;
  replace?: Record<string, string>;
}

type DataFieldFormat = 'date' | 'time' | 'date-time';

type DataFieldValue =
  | string
  | NotificarePassTemplateBalanceData
  | NotificarePassTemplateMoneyData
  | NotificarePassTemplateImageData
  | NotificarePassTemplateDateData
  | NotificarePassTemplateTranslatedData
  | null
  | undefined;
