import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { InAppMessagePreview } from '~/internal/components/in-app-messaging/InAppMessagePreview';
import { InAppMessageValidationError } from '~/internal/components/in-app-messaging/validation-error/InAppMessageValidationError';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { useLocalizationLoader } from '~/internal/hooks';
import { InAppMessageSchema } from '~/internal/schemas/notificare-in-app-message';
import { NotificareInAppTranslationKey } from '~/locales';
import { IN_APP_TRANSLATIONS } from '~/locales/in-app-messaging/en';
import { NotificareInAppMessage } from '~/models/in-app-messaging/notificare-in-app-message';

import '~/preset.css';

/**
 * Component that displays an in-app message preview.
 *
 * @param {NotificareInAppMessage} inAppMessage - The in-app message to be displayed in the preview.
 * @param {string} [locale] - The language/region code for the UI (optional). It's 'en-GB' by default.
 * @param {string} [translations] - A set of custom translations to override the default ones (optional).
 */
export function NotificareInAppMessagePreview({
  inAppMessage,
  locale = 'en-GB',
  translations,
}: NotificareInAppMessagePreviewProps) {
  const localization = useLocalizationLoader({ locale, translations, type: 'in-app' });

  const inAppMessageResult = useMemo(
    () => InAppMessageSchema.safeParse(inAppMessage),
    [inAppMessage],
  );

  return (
    <div className="notificare">
      {localization.status === 'success' && (
        <IntlProvider
          locale={localization.data.locale}
          defaultLocale="en-GB"
          messages={localization.data.translations}
        >
          {inAppMessageResult.success ? (
            <InAppMessagePreview inAppMessage={inAppMessageResult.data} />
          ) : (
            <InAppMessageValidationError errors={inAppMessageResult.error.errors} />
          )}
        </IntlProvider>
      )}

      {localization.status === 'error' && (
        <IntlProvider locale="en-GB" messages={IN_APP_TRANSLATIONS}>
          <UnavailablePreview message={localization.error.message} />
        </IntlProvider>
      )}
    </div>
  );
}

export interface NotificareInAppMessagePreviewProps {
  inAppMessage: NotificareInAppMessage;
  locale?: string;
  translations?: Partial<Record<NotificareInAppTranslationKey, string>>;
}
