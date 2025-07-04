import { useEffect, useMemo, useState } from 'react';
import { RequestState } from '~/internal/network/state';
import { isValidLocale } from '~/internal/utils/locale';
import { NotificarePushTranslationKey, NotificareInAppTranslationKey } from '~/locales';
import { IN_APP_MESSAGES } from '~/locales/in-app/en';
import { IN_APP_MESSAGES_PT } from '~/locales/in-app/pt';
import { PUSH_MESSAGES } from '~/locales/push/en';
import { PUSH_MESSAGES_PT } from '~/locales/push/pt';

const SUPPORTED_LOCALES = ['en-GB', 'pt-PT'] as const;
type SupportedLocales = (typeof SUPPORTED_LOCALES)[number];

export function useLocalizationLoader({ locale, messages, type }: LocalizationLoaderParams) {
  const [state, setState] = useState<LocalisationLoaderState>({ status: 'idle' });

  const localeMessages = useMemo(() => {
    const safeLocale = SUPPORTED_LOCALES.find((supportedLocale) => supportedLocale === locale);

    if (!safeLocale) {
      return null;
    }

    return getMessagesForLocale(safeLocale, type);
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
        messages: {
          ...localeMessages,
          ...messages,
        },
      },
    });
  }, [locale, messages, localeMessages]);

  return state;
}

export type LocalizationLoaderParams =
  | {
      locale: string;
      type: 'push';
      messages?: Partial<Record<NotificarePushTranslationKey, string>>;
    }
  | {
      locale: string;
      type: 'in-app';
      messages?: Partial<Record<NotificareInAppTranslationKey, string>>;
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

function getMessagesForLocale(locale: SupportedLocales, type: 'push' | 'in-app') {
  switch (locale) {
    case 'en-GB':
      return type === 'push' ? PUSH_MESSAGES : IN_APP_MESSAGES;

    case 'pt-PT':
      return type === 'push' ? PUSH_MESSAGES_PT : IN_APP_MESSAGES_PT;
  }
}
