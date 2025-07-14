import ThinXMark from '~/assets/thin-x-mark.svg';
import { VerifiedInAppMessage } from '~/internal/schemas/notificare-in-app-message';

import './FullscreenMessage.css';

export function FullscreenMessage({ inAppMessage }: FullscreenMessageProps) {
  return (
    <div className="notificare__in-app__fullscreen__wrapper">
      <div className="notificare__in-app__fullscreen__window">
        <img
          alt="App icon"
          className="notificare__in-app__fullscreen__background-image"
          src={inAppMessage.image}
        />
        <button className="notificare__in-app__fullscreen__close-button">
          <ThinXMark className="notificare__in-app__fullscreen__close-button-icon" />
        </button>
        <div className="notificare__in-app__fullscreen__text-content">
          <div className="notificare__in-app__fullscreen__title">{inAppMessage.title}</div>
          <div className="notificare__in-app__fullscreen__message">{inAppMessage.message}</div>
        </div>
      </div>
    </div>
  );
}

interface FullscreenMessageProps {
  inAppMessage: Extract<VerifiedInAppMessage, { type: 're.notifica.inappmessage.Fullscreen' }>;
}
