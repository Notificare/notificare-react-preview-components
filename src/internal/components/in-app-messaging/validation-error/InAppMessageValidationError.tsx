import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { ZodIssue } from 'zod';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { InAppMessageSchema } from '~/internal/schemas/notificare-in-app-message';
import { IN_APP_TRANSLATIONS } from '~/locales/in-app-messaging/en';

export function InAppMessageValidationError({ errors }: InAppMessageValidationErrorProps) {
  const intl = useIntl();

  useEffect(() => {
    showInAppMessageErrors(errors);
  }, [errors]);

  return (
    <UnavailablePreview
      message={intl.formatMessage({
        id: 'preview.error.invalidInAppMessage',
        defaultMessage: IN_APP_TRANSLATIONS['preview.error.invalidInAppMessage'],
      })}
      showConsoleWarning={true}
    />
  );
}

export interface InAppMessageValidationErrorProps {
  errors: ZodIssue[];
}

function showInAppMessageErrors(errors: ZodIssue[]) {
  // Errors related to in-app message types are handled manually here
  // discriminatedUnion() from Zod do not support custom messages when a discriminator doesn't correspond

  const invalidInAppMessageType = errors.find(
    (e) => e.code === 'invalid_union_discriminator' && e.path.includes('type'),
  );

  if (invalidInAppMessageType) {
    const validInAppMessageTypes = InAppMessageSchema.options.map(
      (schema) => schema.shape.type.value,
    );

    console.error(
      `In-app message error:\n\nInvalid type. Expected one of: ${validInAppMessageTypes.join(', ')}`,
    );
  } else {
    const messages = errors.map(({ message }) => message);

    console.error(`In-app message errors:\n\n' + ${messages.join('\n')}`);
  }
}
