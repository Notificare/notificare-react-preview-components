import ThinXMark from '~/assets/thin-x-mark.svg';
import { VerifiedInAppMessage } from '~/internal/schemas/in-app-message';

import './FullscreenMessage.css';

export function FullscreenMessage({ inAppMessage }: FullscreenMessageProps) {
  return (
    <div
      className="notificare__in-app-messaging__fullscreen__wrapper"
      data-testid="in-app-messaging-fullscreen-preview-wrapper"
    >
      <div className="notificare__in-app-messaging__fullscreen__window">
        <img
          alt="App icon"
          className="notificare__in-app-messaging__fullscreen__background-image"
          src={inAppMessage.image}
          data-testid="in-app-messaging-fullscreen-preview-image"
        />
        <button className="notificare__in-app-messaging__fullscreen__close-button" type="button">
          <ThinXMark className="notificare__in-app-messaging__fullscreen__close-button-icon" />
        </button>
        <div className="notificare__in-app-messaging__fullscreen__text-content">
          <div
            className="notificare__in-app-messaging__fullscreen__title"
            data-testid="in-app-messaging-fullscreen-preview-title"
          >
            {inAppMessage.title}
          </div>
          <div
            className="notificare__in-app-messaging__fullscreen__message"
            data-testid="in-app-messaging-fullscreen-preview-message"
          >
            {inAppMessage.message}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FullscreenMessageProps {
  inAppMessage: Extract<VerifiedInAppMessage, { type: 're.notifica.inappmessage.Fullscreen' }>;
}
