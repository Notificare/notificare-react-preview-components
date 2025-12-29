import ThinXMark from '~/assets/thin-x-mark.svg';
import { VerifiedInAppMessage } from '~/internal/schemas/in-app-message';

import './CardMessage.css';

export function CardMessage({ inAppMessage }: CardMessageProps) {
  return (
    <div
      className="notificare__in-app-messaging__card__wrapper"
      data-testid="in-app-messaging-card-preview-wrapper"
    >
      <div className="notificare__in-app-messaging__card__window">
        <div className="notificare__in-app-messaging__card__header">
          <button
            className={`notificare__in-app-messaging__card__close-button ${inAppMessage.image ? 'notificare__in-app-messaging__card__close-button--with-image' : ''}`}
            type="button"
          >
            <ThinXMark className="notificare__in-app-messaging__card__close-button-icon" />
          </button>
          {inAppMessage.image && (
            <img
              className="notificare__in-app-messaging__card__image"
              src={inAppMessage.image}
              data-testid="in-app-messaging-card-preview-image"
            />
          )}
        </div>
        <div className="notificare__in-app-messaging__card__text-content">
          <p
            className="notificare__in-app-messaging__card__title"
            data-testid="in-app-messaging-card-preview-title"
          >
            {inAppMessage.title}
          </p>
          <p
            className="notificare__in-app-messaging__card__message"
            data-testid="in-app-messaging-card-preview-message"
          >
            {inAppMessage.message}
          </p>
        </div>

        <div className="notificare__in-app-messaging__card__actions">
          <button
            className={`notificare__in-app-messaging__card__action-button notificare__in-app-messaging__card__action-button--primary ${inAppMessage.primaryAction.destructive ? 'notificare__in-app-messaging__card__action-button--destructive' : ''}`}
            type="button"
            data-testid="in-app-messaging-card-preview-primary-action-label"
          >
            {inAppMessage.primaryAction.label}
          </button>

          {inAppMessage.secondaryAction && (
            <button
              className={`notificare__in-app-messaging__card__action-button notificare__in-app-messaging__card__action-button--secondary ${inAppMessage.secondaryAction.destructive ? 'notificare__in-app-messaging__card__action-button--destructive' : ''}`}
              type="button"
              data-testid="in-app-messaging-card-preview-secondary-action-label"
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
