import { FormattedMessage } from 'react-intl';
import AlertIcon from '~/assets/alert.svg';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

import './UnavailablePreview.css';

export function UnavailablePreview({ message, showConsoleWarning }: UnavailablePreviewProps) {
  return (
    <div className="notificare__unavailable-preview__wrapper" data-testid="unavailable-preview">
      <div className="notificare__unavailable-preview__warning">
        <AlertIcon className="notificare__unavailable-preview__alert-icon" />

        <div className="notificare__unavailable-preview__text-container">
          <div className="notificare__unavailable-preview__title">
            <FormattedMessage
              id="preview.error.notGeneratedPreview"
              defaultMessage={PUSH_TRANSLATIONS['preview.error.notGeneratedPreview']}
            />
          </div>
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
          <FormattedMessage
            id="preview.error.checkConsole"
            defaultMessage={PUSH_TRANSLATIONS['preview.error.checkConsole']}
          />
        </div>
      )}
    </div>
  );
}

export interface UnavailablePreviewProps {
  message: string;
  showConsoleWarning?: boolean;
}
