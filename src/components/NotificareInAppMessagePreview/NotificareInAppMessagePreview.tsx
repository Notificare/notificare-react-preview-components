import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { InAppMessagePreview } from '~/internal/components/in-app-messaging/preview/InAppMessagePreview';
import { InAppMessageValidationError } from '~/internal/components/in-app-messaging/validation-error/InAppMessageValidationError';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { useLocalizationLoader } from '~/internal/hooks';
import { InAppMessageSchema } from '~/internal/schemas/in-app-message';
import { NotificareInAppMessagingTranslationKey } from '~/locales';
import { IN_APP_MESSAGING_TRANSLATIONS } from '~/locales/in-app-messaging/en';
import { NotificareInAppMessage } from '~/models';

import '~/preset.css';

export function NotificareInAppMessagePreview({
  inAppMessage,
  locale = 'en-US',
  translations,
}: NotificareInAppMessagePreviewProps) {
  const localization = useLocalizationLoader({
    locale,
    customTranslations: translations,
    type: 'in-app',
  });

  const inAppMessageResult = useMemo(
    () => InAppMessageSchema.safeParse(inAppMessage),
    [inAppMessage],
  );

  return (
    <div className="notificare">
      {localization.status === 'success' && (
        <IntlProvider
          locale={localization.data.locale}
          defaultLocale="en-US"
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
        <IntlProvider locale="en-US" messages={IN_APP_MESSAGING_TRANSLATIONS}>
          <UnavailablePreview message={localization.error.message} />
        </IntlProvider>
      )}
    </div>
  );
}

/**
 * Component that displays an in-app message preview.
 *
 * @param {NotificareInAppMessage} inAppMessage - The in-app message to be displayed in the preview.
 * @param {string} [locale] - The language/region code for the UI (optional). It's 'en-US' by default.
 * @param {string} [translations] - A set of custom translations to override the default ones (optional).
 */
export interface NotificareInAppMessagePreviewProps {
  inAppMessage: NotificareInAppMessage;
  locale?: string;
  translations?: Partial<Record<NotificareInAppMessagingTranslationKey, string>>;
}
