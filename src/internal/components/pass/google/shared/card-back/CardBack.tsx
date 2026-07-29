import './CardBack.css';
import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import ArrowUpRightFromSquareIcon from '~/assets/arrow-up-right-from-square.svg';
import BoatIcon from '~/assets/boat.svg';
import BoxArchiveIcon from '~/assets/box-archive.svg';
import BusIcon from '~/assets/bus.svg';
import PencilIcon from '~/assets/pencil.svg';
import StationTransferIcon from '~/assets/station-transfer.svg';
import TrainIcon from '~/assets/train.svg';
import TrashCanIcon from '~/assets/trash-can.svg';
import WorldIcon from '~/assets/world.svg';

export function CardBack({ icon, title, fields, urlActions, customActions }: CardBackProps) {
  return (
    <div className="notificare__pass__google__back">
      <div className="notificare__pass__google__back-toolbar" />
      <div className="notificare__pass__google__back-details">
        <div className="notificare__pass__google__back-header">
          {icon && <img className="notificare__pass__google__back-header-image" src={icon} />}
          {title && <div className="notificare__pass__google__back-header-title"> {title} </div>}
        </div>
        {fields.map((field, fieldIndex) => (
          <>
            {field.type === 'text' && (
              <div key={fieldIndex} className="notificare__pass__google__back-text-field">
                <div className="notificare__pass__google__back-text-field-label">
                  {field.header}
                </div>
                <div className="notificare__pass__google__back-text-field-value">{field.body}</div>
              </div>
            )}

            {field.type === 'image' && (
              <img
                key={fieldIndex}
                className="notificare__pass__google__back-image-field"
                src={field.image}
              />
            )}

            {field.type === 'trip' && (
              <>
                {field.ticketLegs.map((ticketLeg, ticketLegIndex) => (
                  <>
                    <div className="notificare__pass__google__back-trip-field" key={ticketLegIndex}>
                      <div className="notificare__pass__google__back-trip-field-transit-type-area">
                        <div className="notificare__pass__google__back-trip-field-transit-type-top">
                          {(field.transitType === 'TRAM' || field.transitType === 'RAIL') && (
                            <TrainIcon />
                          )}

                          {field.transitType === 'BUS' && <BusIcon />}

                          {field.transitType === 'FERRY' && <BoatIcon />}
                        </div>
                        <div
                          className="notificare__pass__google__back-trip-field-transit-type-center"
                          style={{
                            backgroundColor: field.hexBackgroundColor,
                          }}
                        />
                        <div className="notificare__pass__google__back-trip-field-transit-type-bottom" />
                      </div>
                      <div className="notificare__pass__google__back-trip-field-info-area">
                        <CardBackTripFieldRow
                          startText={ticketLeg.originName}
                          endText={ticketLeg.departureTime}
                        />

                        <CardBackTripFieldRow
                          startText={ticketLeg.transitOperatorName}
                          secondary={true}
                        />

                        {ticketLeg.ticketSeats.length === 0 ? (
                          <CardBackTripFieldRow endText="Unassigned" secondary={true} />
                        ) : (
                          ticketLeg.ticketSeats.map((ticketSeat, index) => (
                            <CardBackTripFieldRow
                              key={index}
                              startText={`${field.coachLabel} ${ticketSeat.coach}`}
                              endText={`${field.seatLabel} ${ticketSeat.seat}`}
                              secondary={true}
                            />
                          ))
                        )}

                        <div className="notificare__pass__google__back-trip-field-spacer" />

                        <CardBackTripFieldRow
                          startText={ticketLeg.destinationName}
                          endText={ticketLeg.arrivalTime}
                        />
                      </div>
                    </div>
                    {ticketLegIndex < field.ticketLegs.length - 1 && (
                      <div className="notificare__pass__google__back-trip-field-transfer-area">
                        <div className="notificare__pass__google__back-trip-field-transfer-icon-wrapper">
                          <StationTransferIcon />
                        </div>
                        <div className="notificare__pass__google__back-trip-field-transfer-text-area">
                          <div className="notificare__pass__google__back-trip-field-transfer-text-area-border" />
                          <div className="notificare__pass__google__back-trip-field-transfer-text">
                            {field.ticketLegs[ticketLegIndex + 1].platform
                              ? `Transfer to: ${field.platformLabel} ${field.ticketLegs[ticketLegIndex + 1].platform}`
                              : 'Transfer'}
                          </div>
                          <div className="notificare__pass__google__back-trip-field-transfer-text-area-border" />
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </>
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
  const headerElementRef = useRef<HTMLDivElement>(null);
  const descriptionElementRef = useRef<HTMLDivElement>(null);

  const [wrapped, setWrapped] = useState<boolean>(false);

  useEffect(() => {
    const hasWrapped = (el: HTMLElement | null) => {
      if (!el) return false;

      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);

      return el.scrollHeight > lineHeight + 1;
    };

    setWrapped(hasWrapped(headerElementRef.current) || hasWrapped(descriptionElementRef.current));
  }, [action]);

  return (
    <div
      className={`notificare__pass__google__back-section-custom-action ${!wrapped ? 'notificare__pass__google__back-section-custom-action--align-items-center' : ''}`}
    >
      <div className="notificare__pass__google__back-section-custom-action-text-area">
        <div
          className="notificare__pass__google__back-section-custom-action-title"
          ref={headerElementRef}
        >
          {action.header}
        </div>
        <div
          className="notificare__pass__google__back-section-custom-action-description"
          ref={descriptionElementRef}
        >
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

function CardBackTripFieldRow({ startText, endText, secondary }: CardBackRowProps) {
  if (!startText && !endText) return;

  return (
    <div className="notificare__pass__google__back-trip-field-row">
      {startText && (
        <div
          className={
            secondary
              ? 'notificare__pass__google__back-trip-field-secondary-text'
              : 'notificare__pass__google__back-trip-field-text'
          }
        >
          {startText}
        </div>
      )}

      {endText && (
        <div
          className={
            secondary
              ? 'notificare__pass__google__back-trip-field-secondary-text notificare__pass__google__back-trip-field-secondary-text--end'
              : 'notificare__pass__google__back-trip-field-text notificare__pass__google__back-trip-field-text--end'
          }
        >
          {endText}
        </div>
      )}
    </div>
  );
}

interface CardBackRowProps {
  startText?: string;
  endText?: string;
  secondary?: boolean;
}

export type CardBackField = CardBackTextField | CardBackImageField | CardBackTripField;

interface CardBackTextField {
  type: 'text';
  header: string;
  body: string;
}

interface CardBackImageField {
  type: 'image';
  image?: string;
}

interface CardBackTripField {
  type: 'trip';
  transitType: string;
  coachLabel: string;
  seatLabel: string;
  platformLabel: string;
  hexBackgroundColor: string;
  ticketLegs: {
    originName: string;
    destinationName: string;
    departureTime: string;
    arrivalTime: string;
    transitOperatorName: string;
    platform: string;
    ticketSeats: {
      coach: string;
      seat: string;
    }[];
  }[];
}

export interface CardBackCustomAction {
  header: string;
  description: string;
  type: 'share' | 'switch';
}

export function createTextFields(texts: Omit<CardBackTextField, 'type'>[]): CardBackTextField[] {
  return texts.map((text) => ({
    type: 'text',
    ...text,
  }));
}

export function createImageFields(
  images: Omit<CardBackImageField, 'type'>[],
): CardBackImageField[] {
  return images.map((image) => ({
    type: 'image',
    ...image,
  }));
}

export function createTripField(trip: Omit<CardBackTripField, 'type'>): CardBackTripField {
  return {
    type: 'trip',
    ...trip,
  };
}
