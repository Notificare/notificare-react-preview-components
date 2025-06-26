import { useMemo, useState } from 'react';
import { RequestState } from '~/internal/network/state';
import { isValidLocale } from '~/internal/utils/locale';
import { MESSAGES, NotificarePushTranslationKey } from '~/locales/push/en';
import { MESSAGES_PT } from '~/locales/push/pt';

const DEFAULT_MESSAGES: Record<string, Record<string, string>> = {
  'en-GB': MESSAGES,
  'pt-PT': MESSAGES_PT,
};

export function useLocalisationLoader({ locale, messages }: MessagesLoaderParams) {
  const [state, setState] = useState<LocalisationLoaderState>({ status: 'idle' });

  useMemo(() => {
    if (locale in DEFAULT_MESSAGES) {
      setState({
        status: 'success',
        data: {
          locale: locale,
          messages: {
            ...DEFAULT_MESSAGES[locale],
            ...messages,
          },
        },
      });
    } else {
      if (!isValidLocale(locale)) {
        setState({
          status: 'error',
          error: new Error(
            '→ The locale you chose is invalid. Choose a different one and try again',
          ),
        });
      } else {
        setState({
          status: 'success',
          data: {
            locale: locale,
            messages: {
              ...messages,
            },
          },
        });
      }
    }
  }, [locale, messages]);

  return state;
}

export type MessagesLoaderParams = {
  locale: string;
  messages?: Partial<Record<NotificarePushTranslationKey, string>>;
};

export type LocalisationLoaderState = Exclude<
  RequestState<{ locale: string; messages: Partial<Record<NotificarePushTranslationKey, string>> }>,
  { status: 'loading' }
>;
