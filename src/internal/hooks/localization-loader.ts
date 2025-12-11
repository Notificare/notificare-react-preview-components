import { useEffect, useMemo, useState } from 'react';
import { RequestState } from '~/internal/network/state';
import { isValidLocale } from '~/internal/utils/locale';
import {
  NotificarePushTranslationKey,
  NotificareInAppMessagingTranslationKey,
  NotificareOnboardingTranslationKey,
} from '~/locales';
import { IN_APP_MESSAGING_TRANSLATIONS } from '~/locales/in-app-messaging/en';
import { IN_APP_MESSAGING_TRANSLATIONS_FR } from '~/locales/in-app-messaging/fr';
import { IN_APP_MESSAGING_TRANSLATIONS_PT } from '~/locales/in-app-messaging/pt';
import { ONBOARDING_TRANSLATIONS } from '~/locales/onboarding/en';
import { ONBOARDING_TRANSLATIONS_FR } from '~/locales/onboarding/fr';
import { ONBOARDING_TRANSLATIONS_PT } from '~/locales/onboarding/pt';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { PUSH_TRANSLATIONS_FR } from '~/locales/push/fr';
import { PUSH_TRANSLATIONS_PT } from '~/locales/push/pt';

export function useLocalizationLoader<T extends LocalizedFeatureTranslationKeys>({
  locale,
  customTranslations,
  type,
}: LocalizationLoaderParams<T>) {
  const [state, setState] = useState<LocalizationLoaderState>({ status: 'idle' });

  const defaultTranslations = useMemo(() => {
    if (!isValidLocale(locale)) return null;

    const language = new Intl.Locale(locale).language;

    return getDefaultTranslations(language, type);
  }, [locale, type]);

  useEffect(
    function loadLocaleAndTranslations() {
      if (!isValidLocale(locale)) {
        setState({
          status: 'error',
          error: new Error(
            '→ The locale you chose is invalid. Choose a different one and try again',
          ),
        });
        return;
      }

      setState({
        status: 'success',
        data: {
          locale: locale,
          translations: { ...defaultTranslations, ...customTranslations },
        },
      });
    },
    [locale, customTranslations, defaultTranslations],
  );

  return state;
}

export interface LocalizationLoaderParams<T extends LocalizedFeatureTranslationKeys> {
  locale: string;
  type: T;
  customTranslations?: Partial<Record<LocalizedFeatureTranslations[T], string>>;
}

interface LocalizedFeatureTranslations {
  push: NotificarePushTranslationKey;
  'in-app': NotificareInAppMessagingTranslationKey;
  onboarding: NotificareOnboardingTranslationKey;
}

export type LocalizedFeatureTranslationKeys = keyof LocalizedFeatureTranslations;

export type LocalizationLoaderState = Exclude<
  RequestState<{ locale: string; translations: Record<string, string> }>,
  { status: 'loading' }
>;

function getDefaultTranslations(language: string, type: LocalizedFeatureTranslationKeys) {
  switch (language) {
    case 'en':
      switch (type) {
        case 'push':
          return PUSH_TRANSLATIONS;
        case 'in-app':
          return IN_APP_MESSAGING_TRANSLATIONS;
        case 'onboarding':
          return ONBOARDING_TRANSLATIONS;
      }
      break;

    case 'pt':
      switch (type) {
        case 'push':
          return PUSH_TRANSLATIONS_PT;
        case 'in-app':
          return IN_APP_MESSAGING_TRANSLATIONS_PT;
        case 'onboarding':
          return ONBOARDING_TRANSLATIONS_PT;
      }
      break;

    case 'fr':
      switch (type) {
        case 'push':
          return PUSH_TRANSLATIONS_FR;
        case 'in-app':
          return IN_APP_MESSAGING_TRANSLATIONS_FR;
        case 'onboarding':
          return ONBOARDING_TRANSLATIONS_FR;
      }
      break;

    default:
      return null;
  }
}
