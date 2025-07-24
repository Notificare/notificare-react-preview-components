import { VerifiedInAppMessage } from '~/internal/schemas/in-app-message';

import './BannerMessage.css';

export function BannerMessage({ inAppMessage }: BannerMessageProps) {
  return (
    <div
      className="notificare__in-app-messaging__banner__wrapper"
      data-testid="in-app-messaging-banner-preview-wrapper"
    >
      <div className="notificare__in-app-messaging__banner__window">
        {inAppMessage.image && (
          <img
            alt="App icon"
            className="notificare__in-app-messaging__banner__image"
            src={inAppMessage.image}
            data-testid="in-app-messaging-banner-preview-image"
          />
        )}

        <div className="notificare__in-app-messaging__banner__text-content">
          <p
            className="notificare__in-app-messaging__banner__title"
            data-testid="in-app-messaging-banner-preview-title"
          >
            {inAppMessage.title}
          </p>
          <p
            className="notificare__in-app-messaging__banner__message"
            data-testid="in-app-messaging-banner-preview-message"
          >
            {inAppMessage.message}
          </p>
        </div>
      </div>
    </div>
  );
}

interface BannerMessageProps {
  inAppMessage: Extract<VerifiedInAppMessage, { type: 're.notifica.inappmessage.Banner' }>;
}
