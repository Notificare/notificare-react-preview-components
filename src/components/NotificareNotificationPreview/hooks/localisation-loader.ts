import { useEffect, useMemo, useState } from 'react';
import { RequestState } from '~/internal/network/state';
import { isValidLocale } from '~/internal/utils/locale';
import { NotificarePushTranslationKey } from '~/locales';
import { MESSAGES } from '~/locales/push/en';
import { MESSAGES_PT } from '~/locales/push/pt';

const SUPPORTED_LOCALES = ['en-GB', 'pt-PT'] as const;

export function useLocalisationLoader({ locale, messages }: LocalisationLoaderParams) {
  const [state, setState] = useState<LocalisationLoaderState>({ status: 'idle' });

  const localeMessages = useMemo(() => {
    const safeLocale = SUPPORTED_LOCALES.find((supportedLocale) => supportedLocale === locale);

    if (safeLocale) {
      return getMessagesForLocale(safeLocale);
    }

    return null;
  }, [locale]);

  useEffect(() => {
    if (localeMessages) {
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
      return;
    }

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
          ...messages,
        },
      },
    });
  }, [locale, messages, localeMessages]);

  return state;
}

export type LocalisationLoaderParams = {
  locale: string;
  messages?: Partial<Record<NotificarePushTranslationKey, string>>;
};

export type LocalisationLoaderState = Exclude<
  RequestState<{ locale: string; messages: Partial<Record<NotificarePushTranslationKey, string>> }>,
  { status: 'loading' }
>;

type SupportedLocales = (typeof SUPPORTED_LOCALES)[number];

function getMessagesForLocale(locale: SupportedLocales) {
  const messages = {
    'en-GB': MESSAGES,
    'pt-PT': MESSAGES_PT,
  };

  return messages[locale];
}
