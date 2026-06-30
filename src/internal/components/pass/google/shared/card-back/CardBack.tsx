import './CardBack.css';
import { PropsWithChildren, ReactNode } from 'react';
import ArrowUpRightFromSquareIcon from '~/assets/arrow-up-right-from-square.svg';
import BoxArchiveIcon from '~/assets/box-archive.svg';
import PencilIcon from '~/assets/pencil.svg';
import TrashCanIcon from '~/assets/trash-can.svg';
import WorldIcon from '~/assets/world.svg';

export function CardBack({ icon, title, fields, urlActions, customActions }: CardBackProps) {
  return (
    <div className="notificare__pass__google__back">
      <div className="notificare__pass__google__back-toolbar" />
      <div className="notificare__pass__google__back-details">
        <div className="notificare__pass__google__back-header">
          <img className="notificare__pass__google__back-header-image" src={icon} />
          <div className="notificare__pass__google__back-header-title"> {title} </div>
        </div>
        {fields.map((field, index) => (
          <>
            {'image' in field && field.image && (
              <img
                key={index}
                className="notificare__pass__google__back-image-field"
                src={field.image}
              />
            )}

            {'header' in field && 'body' in field && field.header && field.body && (
              <div key={index} className="notificare__pass__google__back-text-field">
                <div className="notificare__pass__google__back-text-field-label">
                  {field.header}
                </div>
                <div className="notificare__pass__google__back-text-field-value">{field.body}</div>
              </div>
            )}
          </>
        ))}

        {urlActions.map((title, index) => (
          <CardBackSection key={index}>
            <CardBackButtonAction icon={<WorldIcon />} title={title} />
          </CardBackSection>
        ))}

        <CardBackSection>
          <CardBackButtonAction icon={<PencilIcon />} title="Add a nickname" />
        </CardBackSection>

        <CardBackSection>
          {customActions.map((action, index) => (
            <CardBackCustomAction key={index} action={action} />
          ))}
        </CardBackSection>

        <CardBackSection>
          <CardBackButtonAction icon={<BoxArchiveIcon />} title="Archive" />
          <CardBackButtonAction icon={<TrashCanIcon />} title="Remove" />
        </CardBackSection>
      </div>
    </div>
  );
}

interface CardBackProps {
  icon: string;
  title: string;
  fields: CardBackField[];
  urlActions: string[];
  customActions: CardBackCustomAction[];
}

function CardBackCustomAction({ action }: CardBackCustomActionProps) {
  return (
    <div
      className={`notificare__pass__google__back-section-custom-action ${action.type === 'share' ? 'notificare__pass__google__back-section-custom-action--share' : ''}`}
    >
      <div className="notificare__pass__google__back-section-custom-action-text-area">
        <div className="notificare__pass__google__back-section-custom-action-title">
          {action.header}
        </div>
        <div className="notificare__pass__google__back-section-custom-action-description">
          {action.description}
        </div>
      </div>

      {action.type === 'switch' && (
        <div className="notificare__pass__google__back-section-custom-action-switch-area">
          <input
            className="notificare__pass__google__back-section-custom-action-switch"
            type="checkbox"
          />
        </div>
      )}

      {action.type === 'share' && (
        <div className="notificare__pass__google__back-section-custom-action-icon-area">
          <ArrowUpRightFromSquareIcon />
        </div>
      )}
    </div>
  );
}

interface CardBackCustomActionProps {
  action: CardBackCustomAction;
}

function CardBackButtonAction({ icon, title }: CardBackButtonActionProps) {
  return (
    <div className="notificare__pass__google__back-section-button-action">
      <div className="notificare__pass__google__back-section-action-icon notificare__pass__google__back-section-action-icon--button-action">
        {icon}
      </div>
      {title}
    </div>
  );
}

interface CardBackButtonActionProps {
  icon: ReactNode;
  title: string;
}

function CardBackSection({ children }: PropsWithChildren) {
  return <div className="notificare__pass__google__back-section"> {children} </div>;
}

export type CardBackField = CardBackTextField | CardBackImageField;

interface CardBackTextField {
  header: string;
  body: string;
}

interface CardBackImageField {
  image?: string;
}

export interface CardBackCustomAction {
  header: string;
  description: string;
  type: 'share' | 'switch';
}
