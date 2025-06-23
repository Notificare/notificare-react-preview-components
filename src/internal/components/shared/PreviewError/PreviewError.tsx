import AlertIcon from '~/assets/alert.svg';

import './PreviewError.css';

export function PreviewError({ message }: PreviewErrorProps) {
  return (
    <div className="notificare__preview-error__wrapper" data-testid="preview-error">
      <AlertIcon className="notificare__preview-error__icon" />
      <p className="notificare__preview-error__text">
        Preview could not be generated
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
