import { useEffect, useMemo, useState } from 'react';
import { RequestState } from '~/internal/network/state';
import { isValidLocale } from '~/internal/utils/locale';
import { NotificarePushTranslationKey, NotificareInAppMessagingTranslationKey } from '~/locales';
import { IN_APP_MESSAGING_TRANSLATIONS } from '~/locales/in-app-messaging/en';
import { IN_APP_MESSAGING_TRANSLATIONS_FR } from '~/locales/in-app-messaging/fr';
import { IN_APP_MESSAGING_TRANSLATIONS_PT } from '~/locales/in-app-messaging/pt';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { PUSH_TRANSLATIONS_FR } from '~/locales/push/fr';
import { PUSH_TRANSLATIONS_PT } from '~/locales/push/pt';

const SUPPORTED_LOCALES = ['en-GB', 'pt-PT', 'fr-FR'] as const;
type SupportedLocales = (typeof SUPPORTED_LOCALES)[number];

export function useLocalizationLoader<T extends LocalizedFeatureTranslationKeys>({
  locale,
  translations,
  type,
}: LocalizationLoaderParams<T>) {
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
        translations: { ...localeMessages, ...translations },
      },
    });
  }, [locale, translations, localeMessages]);

  return state;
}

type LocalizedFeatureTranslations = {
  push: NotificarePushTranslationKey;
  'in-app': NotificareInAppMessagingTranslationKey;
};

export type LocalizedFeatureTranslationKeys = keyof LocalizedFeatureTranslations;

export type LocalizationLoaderParams<T extends LocalizedFeatureTranslationKeys> = {
  locale: string;
  type: T;
  translations?: Partial<Record<LocalizedFeatureTranslations[T], string>>;
};

export type LocalisationLoaderState = Exclude<
  RequestState<{ locale: string; translations: Record<string, string> }>,
  { status: 'loading' }
>;

function getMessagesForLocale<T extends LocalizedFeatureTranslationKeys>(
  locale: SupportedLocales,
  type: T,
) {
  switch (locale) {
    case 'en-GB':
      return type === 'push' ? PUSH_TRANSLATIONS : IN_APP_MESSAGING_TRANSLATIONS;

    case 'pt-PT':
      return type === 'push' ? PUSH_TRANSLATIONS_PT : IN_APP_MESSAGING_TRANSLATIONS_PT;

    case 'fr-FR':
      return type === 'push' ? PUSH_TRANSLATIONS_FR : IN_APP_MESSAGING_TRANSLATIONS_FR;
  }
}
