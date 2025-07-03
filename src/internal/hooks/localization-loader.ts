import { useEffect, useMemo, useState } from 'react';
import { RequestState } from '~/internal/network/state';
import { isValidLocale } from '~/internal/utils/locale';
import { NotificarePushTranslationKey, NotificareInAppTranslationKey } from '~/locales';
import { IN_APP_MESSAGES } from '~/locales/in-app/en';
import { IN_APP_MESSAGES_PT } from '~/locales/in-app/pt';
import { PUSH_MESSAGES } from '~/locales/push/en';
import { PUSH_MESSAGES_PT } from '~/locales/push/pt';

const SUPPORTED_PUSH_LOCALES = ['en-GB', 'pt-PT'] as const;
const SUPPORTED_IN_APP_LOCALES = ['en-GB', 'pt-PT'] as const;

export function useLocalizationLoader<T extends 'push' | 'in-app'>({
  locale,
  messages,
  type,
}: LocalizationLoaderParams<T>) {
  const [state, setState] = useState<LocalisationLoaderState>({ status: 'idle' });

  const localeMessages = useMemo(() => {
    let safeLocale;

    switch (type) {
      case 'push':
        safeLocale = SUPPORTED_PUSH_LOCALES.find((supportedLocale) => supportedLocale === locale);

        if (safeLocale) {
          return getPushMessagesForLocale(safeLocale);
        }
        return null;
      case 'in-app':
        safeLocale = SUPPORTED_IN_APP_LOCALES.find((supportedLocale) => supportedLocale === locale);

        if (safeLocale) {
          return getInAppMessagesForLocale(safeLocale);
        }
        return null;
    }
  }, [locale, type]);

  useEffect(() => {
    if (!isValidLocale(locale)) {
      setState({
        status: 'error',
        error: new Error('→ The locale you chose is invalid. Choose a different one and try again'),
      });
      return;
    }

    setState({
      status: 'success',
      data: {
        locale: locale,
        messages: localeMessages
          ? {
              ...localeMessages,
              ...messages,
            }
          : { ...messages },
      },
    });
  }, [locale, messages, localeMessages]);

  return state;
}

export type LocalizationLoaderParams<T extends 'push' | 'in-app'> = {
  locale: string;
  messages?: T extends 'push'
    ? Partial<Record<NotificarePushTranslationKey, string>>
    : Partial<Record<NotificareInAppTranslationKey, string>>;
  type: T;
};

export type LocalisationLoaderState = Exclude<
  RequestState<{
    locale: string;
    messages:
      | Partial<Record<NotificarePushTranslationKey, string>>
      | Partial<Record<NotificareInAppTranslationKey, string>>;
  }>,
  { status: 'loading' }
>;

type SupportedPushLocales = (typeof SUPPORTED_PUSH_LOCALES)[number];
type SupportedInAppLocales = (typeof SUPPORTED_IN_APP_LOCALES)[number];

function getPushMessagesForLocale(locale: SupportedPushLocales) {
  switch (locale) {
    case 'en-GB':
      return PUSH_MESSAGES;

    case 'pt-PT':
      return PUSH_MESSAGES_PT;
  }
}

function getInAppMessagesForLocale(locale: SupportedInAppLocales) {
  switch (locale) {
    case 'en-GB':
      return IN_APP_MESSAGES;

    case 'pt-PT':
      return IN_APP_MESSAGES_PT;
  }
}
