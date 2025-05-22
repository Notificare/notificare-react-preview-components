import './PreviewError.css';
import AlertIcon from '../../../../../../.assets/alert.svg';

export default function PreviewError({ message }: PreviewErrorProps) {
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

interface PreviewErrorProps {
  message?: string;
}
