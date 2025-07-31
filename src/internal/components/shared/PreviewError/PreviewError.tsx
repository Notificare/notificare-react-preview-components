import { useIntl } from 'react-intl';
import AlertIcon from '~/assets/alert.svg';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

import './PreviewError.css';

export function PreviewError({ message }: PreviewErrorProps) {
  const intl = useIntl();

  return (
    <div className="notificare__preview-error__wrapper" data-testid="preview-error">
      <AlertIcon className="notificare__preview-error__icon" />
      <p className="notificare__preview-error__text">
        {intl.formatMessage({
          id: 'preview.error.notGeneratedPreview',
          defaultMessage: PUSH_TRANSLATIONS['preview.error.notGeneratedPreview'],
        })}
        {message && (
          <>
            <br /> <br /> {message}
          </>
        )}
      </p>
    </div>
  );
}

export interface PreviewErrorProps {
  message?: string;
}
