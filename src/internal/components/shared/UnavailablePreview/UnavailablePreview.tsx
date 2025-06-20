import AlertIcon from '~/assets/alert.svg';

import './UnavailablePreview.css';

export function UnavailablePreview({ message, showConsoleWarning }: UnavailablePreviewProps) {
  return (
    <div data-testid="unavailable-preview">
      <div className="notificare__unavailable-preview__wrapper">
        <AlertIcon className="notificare__unavailable-preview__alert-icon" />

        <div className="notificare__unavailable-preview__text-container">
          <div className="notificare__unavailable-preview__title">Preview could not be loaded</div>
          <div
            className="notificare__unavailable-preview__reason-text"
            data-testid="unavailable-preview-reason-text"
          >
            {message}
          </div>
        </div>
      </div>

      {showConsoleWarning && (
        <div className="notificare__unavailable-preview__check-console-text">
          Check console for more information
        </div>
      )}
    </div>
  );
}

export interface UnavailablePreviewProps {
  message: string;
  showConsoleWarning: boolean;
}
