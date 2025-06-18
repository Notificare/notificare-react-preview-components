import { useIntl } from 'react-intl';
import AlertIcon from '~/assets/alert.svg';

import './PreviewError.css';

export function PreviewError({ message }: PreviewErrorProps) {
  const intl = useIntl();

  return (
    <div className="notificare__push__preview-error" data-testid="preview-error">
      <AlertIcon className="notificare__push__preview-error-icon" />
      <p className="notificare__push__preview-error-text">
        {intl.formatMessage({ id: 'preview.error.notGeneratedPreview' })}
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
