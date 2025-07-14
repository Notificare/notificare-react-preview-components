import { VerifiedInAppMessage } from '~/internal/schemas/notificare-in-app-message';

import './BannerMessage.css';

export function BannerMessage({ inAppMessage }: BannerMessageProps) {
  return (
    <div className="notificare__in-app__banner__wrapper">
      <div className="notificare__in-app__banner__window">
        {inAppMessage.image && (
          <img
            alt="App icon"
            className="notificare__in-app__banner__image"
            src={inAppMessage.image}
          />
        )}

        <div className="notificare__in-app__banner__text-content">
          <p className="notificare__in-app__banner__title">{inAppMessage.title}</p>
          <p className="notificare__in-app__banner__message">{inAppMessage.message}</p>
        </div>
      </div>
    </div>
  );
}

interface BannerMessageProps {
  inAppMessage: Extract<VerifiedInAppMessage, { type: 're.notifica.inappmessage.Banner' }>;
}
