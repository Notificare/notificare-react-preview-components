import './PreviewError.css';
import AlertIcon from '../../../../assets/alert.svg';

export function PreviewError({ message }: PreviewErrorProps) {
  return (
    <div className="notificare__push__preview-error" data-testid="preview-error">
      <AlertIcon className="notificare__push__preview-error-icon" />
      <p className="notificare__push__preview-error-text">
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
