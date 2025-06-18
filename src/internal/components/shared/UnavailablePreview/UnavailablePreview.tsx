import { FormattedMessage } from 'react-intl';
import AlertIcon from '~/assets/alert.svg';

import './UnavailablePreview.css';

export function UnavailablePreview({ message, showConsoleWarning }: UnavailablePreviewProps) {
  return (
    <div
      className="notificare__push__unavailable-preview-warning-wrapper"
      data-testid="notificare-push-unavailable-preview"
    >
      <div className="notificare__push__unavailable-preview-warning">
        <AlertIcon className="notificare__push__unavailable-preview-alert-icon" />

        <div className="notificare__push__unavailable-preview-text-container">
          <div className="notificare__push__unavailable-preview-title">
            <FormattedMessage id="preview.error.notGeneratedPreview" />
          </div>
          <div
            className="notificare__push__unavailable-preview-reason-text"
            data-testid="notificare-push-unavailable-preview-reason-text"
          >
            {message}
          </div>
        </div>
      </div>

      {showConsoleWarning && (
        <div className="notificare__push__unavailable-preview-check-console-text">
          <FormattedMessage id="preview.error.checkConsole" />
        </div>
      )}
    </div>
  );
}

export interface UnavailablePreviewProps {
  message: string;
  showConsoleWarning: boolean;
}
