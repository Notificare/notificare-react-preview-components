import { NotificarePassDataFields } from '~/models/pass/notificare-pass';
import {
  NotificarePassTemplateBalanceData,
  NotificarePassTemplateDataField,
  NotificarePassTemplateDesignGooglePayLinksModuleDataURI,
  NotificarePassTemplateDesignGooglePayMessage,
  NotificarePassTemplateDesignGooglePayTextModuleData,
  NotificarePassTemplateDesignGooglePayWalletObject,
  NotificarePassTemplateImageData,
  NotificarePassTemplatePassDataField,
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
    const { value, fallback = '' } = fieldsMap[key];

    if (!value) {
      result[key] = fallback;
      continue;
    }

    if (isBalanceData(value)) {
      result[key] = computeBalanceValue(value, lookup) ?? fallback;
      continue;
    }

    if (isImageData(value)) {
      result[key] = computeImageValue(value, lookup) ?? fallback;
      continue;
    }

    result[key] = lookup(value) ?? fallback;
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

function computeImageValue(
  value: NotificarePassTemplateImageData,
  lookup: (value: string) => string | undefined,
) {
  const uri = value.sourceUri?.uri;

  if (!uri) return;

  return lookup(uri);
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
      currency,
    }).format(numberValue);
  } catch (error) {
    console.error('It was not possible to format the money value: ', error);
    return value;
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

function isImageData(value: DataFieldValue): value is NotificarePassTemplateImageData {
  return typeof value === 'object' && value !== null && 'sourceUri' in value;
}

interface DataField {
  value: DataFieldValue;
  fallback?: string;
}

type DataFieldValue =
  | string
  | NotificarePassTemplateBalanceData
  | NotificarePassTemplateImageData
  | null
  | undefined;
