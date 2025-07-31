import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { ZodIssue } from 'zod';
import { UnavailablePreview } from '~/internal/components/shared/UnavailablePreview/UnavailablePreview';
import { NotificationSchema } from '~/internal/schemas/notificare-notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

import '~/preset.css';
import './NotificationValidationError.css';

export function NotificationValidationError({ errors }: NotificationValidationErrorProps) {
  const intl = useIntl();

  useEffect(
    function handleValidationErrors() {
      logErrors(errors);
    },
    [errors],
  );

  return (
    <UnavailablePreview
      message={intl.formatMessage({
        id: 'preview.error.invalidNotification',
        defaultMessage: PUSH_TRANSLATIONS['preview.error.invalidNotification'],
      })}
      showConsoleWarning={true}
    />
  );
}

export interface NotificationValidationErrorProps {
  errors: ZodIssue[];
}

function logErrors(errors: ZodIssue[]) {
  // Errors related to notification types and content types are handled manually here
  // discriminatedUnion() from Zod do not support custom messages when a discriminator doesn't correspond

  const invalidNotificationType = errors.find(
    (e) =>
      e.code === 'invalid_union_discriminator' &&
      e.path.includes('type') &&
      !e.path.includes('content'),
  );

  if (invalidNotificationType) {
    const validNotificationTypes = NotificationSchema.options.map(
      (schema) => schema.shape.type.value,
    );

    console.error(
      `Notification error:\n\nInvalid notification type. Expected one of: ${validNotificationTypes.join(', ')}\n`,
    );
  } else {
    const messages = errors.map((e) => {
      if (
        e.code === 'invalid_union_discriminator' &&
        e.path.includes('type') &&
        e.path.includes('content')
      ) {
        return `Invalid content type. Expected one of: ${e.options.join(', ')}\n`;
      }
      return e.message;
    });
    console.error('Notification errors:\n\n' + messages.join('\n'));
  }
}
