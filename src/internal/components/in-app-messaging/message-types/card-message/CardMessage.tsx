import ThinXMark from '~/assets/thin-x-mark.svg';
import { VerifiedInAppMessage } from '~/internal/schemas/notificare-in-app-message';

import './CardMessage.css';

export function CardMessage({ inAppMessage }: CardMessageProps) {
  return (
    <div className="notificare__in-app__card__wrapper">
      <div className="notificare__in-app__card__window">
        <div className="notificare__in-app__card__header">
          <button className="notificare__in-app__card__close-button">
            <ThinXMark className="notificare__in-app__card__close-button-icon" />
          </button>
          <img
            alt="App icon"
            className="notificare__in-app__card__image"
            src={inAppMessage.image}
          />
        </div>
        <div className="notificare__in-app__card__text-content">
          <p className="notificare__in-app__card__title">{inAppMessage.title}</p>
          <p className="notificare__in-app__card__message">{inAppMessage.message}</p>
        </div>

        <div className="notificare__in-app__card__actions">
          <button
            className={`notificare__in-app__card__action-button notificare__in-app__card__action-button--primary ${inAppMessage.primaryAction.destructive ? 'notificare__in-app__card__action-button--destructive' : ''}`}
            data-testid="in-app-card-primary-action"
          >
            {inAppMessage.primaryAction.label}
          </button>

          {inAppMessage.secondaryAction && (
            <button
              className={`notificare__in-app__card__action-button notificare__in-app__card__action-button--secondary ${inAppMessage.secondaryAction.destructive ? 'notificare__in-app__card__action-button--destructive' : ''}`}
              data-testid="in-app-card-secondary-action"
            >
              {inAppMessage.secondaryAction.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface CardMessageProps {
  inAppMessage: Extract<VerifiedInAppMessage, { type: 're.notifica.inappmessage.Card' }>;
}
