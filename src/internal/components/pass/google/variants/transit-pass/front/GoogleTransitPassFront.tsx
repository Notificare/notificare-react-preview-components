import { useMemo } from 'react';
import { Card } from '~/internal/components/pass/google/shared/card/Card';
import CardBarcode from '~/internal/components/pass/google/shared/card/card-barcode/CardBarcode';
import { CardHeader } from '~/internal/components/pass/google/shared/card/card-header/CardHeader';
import { CardHeroImage } from '~/internal/components/pass/google/shared/card/card-hero-image/CardHeroImage';
import { CardRow } from '~/internal/components/pass/google/shared/card/card-row/CardRow';
import { CardRowDivider } from '~/internal/components/pass/google/shared/card/card-row-divider/CardRowDivider';
import { CardSpacer } from '~/internal/components/pass/google/shared/card/card-spacer/CardSpacer';
import { CardTitle } from '~/internal/components/pass/google/shared/card/card-title/CardTitle';
import { CardTripRow } from '~/internal/components/pass/google/shared/card/card-trip-row/CardTripRow';
import {
  computePassDataValues,
  computePassTemplateDataValues,
} from '~/internal/utils/pass/compute-data-values';
import { NotificarePassDataFields } from '~/models/pass/notificare-pass';
import {
  NotificarePassTemplateBarcodeDesign,
  NotificarePassTemplateDataField,
  NotificarePassTemplateDesignGooglePayWalletClass,
  NotificarePassTemplateDesignGooglePayWalletObject,
  NotificarePassTemplatePassDataField,
} from '~/models/pass/notificare-pass-template';

export function GoogleTransitPassFront({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  barcodeDesign,
  passData,
  barcode,
}: GoogleTransitPassFrontProps) {
  const enableSingleLegItinerary = walletClass.enableSingleLegItinerary;

  const passTemplateDataValues = useMemo(
    () => resolvePassTemplateDataValues(walletClass, passTemplateData),
    [walletClass, passTemplateData],
  );

  const passDataValues = useMemo(
    () =>
      resolvePassDataValues(walletObject, passTemplatePassData, passData, enableSingleLegItinerary),
    [walletObject, passTemplatePassData, passData, enableSingleLegItinerary],
  );

  return (
    <Card hexBackgroundColor={passDataValues.hexBackgroundColor}>
      <CardTitle>
        <CardHeader
          logo={passTemplateDataValues.logo}
          title={passTemplateDataValues.issuerName}
          wideLogo={passTemplateDataValues.wideLogo}
        />
        <CardTripRow
          originCode={passDataValues.ticketLegs[0]?.originStationCode}
          originName={passDataValues.ticketLegs[0]?.originName}
          destinationCode={
            passDataValues.ticketLegs[passDataValues.ticketLegs.length - 1]?.destinationStationCode
          }
          destinationName={
            passDataValues.ticketLegs[passDataValues.ticketLegs.length - 1]?.destinationName
          }
          tripType={passDataValues.tripType}
        />
      </CardTitle>
      <CardSpacer />
      {enableSingleLegItinerary ? (
        <>
          <CardRow
            fields={[
              {
                header: 'Departure',
                body: passDataValues.ticketLegs[0]?.departureDateTime,
              },
              {
                header: 'Arriving At',
                body: passDataValues.ticketLegs[0]?.arrivalDateTime,
              },
            ]}
          />
          <CardRowDivider />
          <CardRow
            fields={[
              {
                header: passDataValues.passengerType,
                body: passDataValues.passengerNames,
              },
              {
                header: passTemplateDataValues.customCarriageLabel,
                body: passDataValues.ticketLegs[0]?.carriage,
              },
              ...(passDataValues.ticketLegs[0]?.ticketSeats.length === 1
                ? [
                    {
                      header: passTemplateDataValues.customCoachLabel,
                      body: passDataValues.ticketLegs[0]?.ticketSeats[0]?.coach,
                      secondaryHeader: passTemplateDataValues.customSeatLabel,
                      secondaryBody: passDataValues.ticketLegs[0]?.ticketSeats[0]?.seat,
                    },
                  ]
                : []),
            ]}
          />
        </>
      ) : (
        <CardRow
          fields={[
            {
              header: passDataValues.passengerType,
              body: passDataValues.passengerNames,
            },
          ]}
        />
      )}
      <CardSpacer />
      <CardBarcode
        format={barcodeDesign.format}
        barcode={barcode}
        text={barcodeDesign.showAltText ? barcode : undefined}
        alternateText={passDataValues.ticketNumber}
      />
      <CardHeroImage heroImage={passDataValues.heroImage} />
    </Card>
  );
}

interface GoogleTransitPassFrontProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  barcodeDesign: NotificarePassTemplateBarcodeDesign;
  passData?: NotificarePassDataFields;
  barcode: string;
}

function resolvePassDataValues(
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject,
  passTemplatePassData: NotificarePassTemplatePassDataField[],
  passData?: NotificarePassDataFields,
  enableSingleLegItinerary?: boolean | null,
) {
  const commonPassDataValues = computePassDataValues(
    {
      hexBackgroundColor: { value: walletObject.hexBackgroundColor, fallback: '#fff' },
      tripType: { value: walletObject.tripType },
      passengerNames: { value: walletObject.passengerNames },
      passengerType: {
        value: walletObject.passengerType,
        replace: {
          SINGLE_PASSENGER: 'Passenger',
          MULTIPLE_PASSENGERS: 'Passengers',
        },
      },
      ticketNumber: { value: walletObject.ticketNumber },
      heroImage: {
        value: walletObject.heroImage?.sourceUri?.uri,
      },
    },
    passTemplatePassData,
    passData,
  );

  const ticketLegs =
    enableSingleLegItinerary && walletObject.ticketLeg
      ? [walletObject.ticketLeg]
      : !enableSingleLegItinerary && walletObject.ticketLegs
        ? walletObject.ticketLegs
        : [];

  return {
    ...commonPassDataValues,
    ticketLegs: ticketLegs.map((ticketLeg) => ({
      ...computePassDataValues(
        {
          originName: { value: ticketLeg.originName },
          destinationName: { value: ticketLeg.destinationName },
          originStationCode: { value: ticketLeg.originStationCode },
          destinationStationCode: { value: ticketLeg.destinationStationCode },
          departureDateTime: {
            value: ticketLeg.departureDateTime,
            format: 'date-time',
          },
          arrivalDateTime: { value: ticketLeg.arrivalDateTime, format: 'time' },
          carriage: { value: ticketLeg.carriage },
        },
        passTemplatePassData,
        passData,
      ),
      ticketSeats: ticketLeg.ticketSeats.map((ticketSeat) =>
        computePassDataValues(
          {
            coach: { value: ticketSeat.coach },
            seat: { value: ticketSeat.seat },
          },
          passTemplatePassData,
          passData,
        ),
      ),
    })),
  };
}

function resolvePassTemplateDataValues(
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass,
  passTemplateData: NotificarePassTemplateDataField[],
) {
  return computePassTemplateDataValues(
    {
      issuerName: { value: walletClass.issuerName },
      customCarriageLabel: { value: walletClass.customCarriageLabel, fallback: 'Carriage' },
      customCoachLabel: { value: walletClass.customCoachLabel, fallback: 'Coach' },
      customSeatLabel: { value: walletClass.customSeatLabel, fallback: 'Seat' },
      logo: { value: walletClass.logo },
      wideLogo: { value: walletClass.wideLogo },
    },
    passTemplateData,
  );
}
