import { useMemo } from 'react';
import {
  CardBack,
  createTextFields,
  createImageFields,
  createTripField,
} from '~/internal/components/pass/google/shared/card-back/CardBack';
import {
  computePassTemplateDataValues,
  computeModulesData,
  computePassDataValues,
} from '~/internal/utils/pass/compute-data-values';
import { NotificarePassDataFields } from '~/models/pass/notificare-pass';
import {
  NotificarePassTemplateDataField,
  NotificarePassTemplateDesignGooglePayWalletClass,
  NotificarePassTemplateDesignGooglePayWalletObject,
  NotificarePassTemplatePassDataField,
} from '~/models/pass/notificare-pass-template';

export function GoogleTransitPassBack({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  passData,
}: GoogleTransitPassBackProps) {
  const enableSingleLegItinerary = walletClass.enableSingleLegItinerary;

  const passTemplateDataValues = useMemo(
    () => resolvePassTemplateDataValues(walletClass, passTemplateData),
    [walletClass, passTemplateData],
  );

  const passDataValues = useMemo(
    () =>
      resolvePassDataValues(walletObject, passTemplatePassData, passData, enableSingleLegItinerary),
    [enableSingleLegItinerary, walletObject, passTemplatePassData, passData],
  );

  const modulesData = useMemo(() => {
    return computeModulesData(walletObject, passTemplatePassData, passData);
  }, [walletObject, passTemplatePassData, passData]);

  return (
    <CardBack
      icon={passTemplateDataValues.logo}
      title={`${passDataValues.ticketLegs[0]?.originName} to ${passDataValues.ticketLegs[passDataValues.ticketLegs.length - 1]?.destinationName}`}
      fields={[
        ...(!enableSingleLegItinerary
          ? [
              createTripField({
                transitType: passTemplateDataValues.transitType,
                coachLabel: passTemplateDataValues.coachLabel,
                seatLabel: passTemplateDataValues.seatLabel,
                platformLabel: passTemplateDataValues.platformLabel,
                hexBackgroundColor: passDataValues.hexBackgroundColor,
                ticketLegs: passDataValues.ticketLegs,
              }),
            ]
          : []),
        ...createTextFields([
          {
            header: passTemplateDataValues.ticketNumberLabel,
            body: passDataValues.ticketNumber,
          },
          {
            header: 'Ticket Status',
            body: passDataValues.ticketStatus || passDataValues.customTicketStatus,
          },
        ]),
        ...(enableSingleLegItinerary
          ? createTextFields([
              {
                header: 'Departure',
                body: passDataValues.ticketLegs[0]?.departureDateTime,
              },
              { header: 'Arrival', body: passDataValues.ticketLegs[0]?.arrivalDateTime },
              {
                header: passTemplateDataValues.fareNameLabel,
                body: passDataValues.ticketLegs[0]?.fareName,
              },
              {
                header: passTemplateDataValues.platformLabel,
                body: passDataValues.ticketLegs[0]?.platform,
              },
              {
                header: passTemplateDataValues.zoneLabel,
                body: passDataValues.ticketLegs[0]?.zone,
              },
              {
                header: passTemplateDataValues.fareClassLabel,
                body:
                  passDataValues.ticketLegs[0]?.ticketSeats[0]?.fareClass ||
                  passDataValues.ticketLegs[0]?.ticketSeats[0]?.customFareClass,
              },
            ])
          : []),
        ...createTextFields([
          {
            header: passTemplateDataValues.concessionCategoryLabel,
            body: passDataValues.concessionCategory || passDataValues.customConcessionCategory,
          },
          {
            header: passTemplateDataValues.routeRestrictionsLabel,
            body: passDataValues.routeRestrictions,
          },
          {
            header: passTemplateDataValues.routeRestrictionsDetailsLabel,
            body: passDataValues.routeRestrictionsDetails,
          },
          {
            header: passTemplateDataValues.timeRestrictionsLabel,
            body: passDataValues.timeRestrictions,
          },
          {
            header: passTemplateDataValues.otherRestrictionsLabel,
            body: passDataValues.otherRestrictions,
          },
          {
            header: passTemplateDataValues.purchaseReceiptNumberLabel,
            body: passDataValues.purchaseReceiptNumber,
          },
          { header: 'Purchase Date', body: passDataValues.purchaseDateTime },
          { header: 'Account ID', body: passDataValues.accountId },
          {
            header: passTemplateDataValues.confirmationCodeLabel,
            body: passDataValues.confirmationCode,
          },
          {
            header: passTemplateDataValues.purchaseFaceValueLabel,
            body: passDataValues.faceValue,
          },
          {
            header: passTemplateDataValues.purchasePriceLabel,
            body: passDataValues.purchasePrice,
          },
          {
            header: passTemplateDataValues.discountMessageLabel,
            body: passDataValues.discountMessage,
          },
        ]),
        ...createImageFields([
          {
            image: modulesData.imageModulesDataMainImage,
          },
        ]),
        ...createTextFields([...modulesData.messages, ...modulesData.textModulesData]),
      ]}
      urlActions={[...modulesData.linksModuleDataURIS]}
      customActions={[
        {
          header: 'Use pass across Google',
          description: 'See your pass in places like Maps, Chrome and more',
          type: 'switch',
        },
        {
          header: 'Notifications',
          description: 'Get updates, offers, and more',
          type: 'switch',
        },
        {
          header: 'Can be shared',
          description: 'Learn more about sharing',
          type: 'share',
        },
      ]}
    />
  );
}

interface GoogleTransitPassBackProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  passData?: NotificarePassDataFields;
}

function resolvePassDataValues(
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject,
  passTemplatePassData: NotificarePassTemplatePassDataField[],
  passData?: NotificarePassDataFields,
  enableSingleLegItinerary?: boolean | null,
) {
  const commonPassDataValues = computePassDataValues(
    {
      hexBackgroundColor: { value: walletObject.hexBackgroundColor },
      tripType: { value: walletObject.tripType },
      ticketNumber: { value: walletObject.ticketNumber },
      ticketStatus: {
        value: walletObject.ticketStatus,
        replace: { USED: 'Used', REFUNDED: 'Refunded', EXCHANGED: 'Exchanged' },
      },
      customTicketStatus: { value: walletObject.customTicketStatus },
      concessionCategory: {
        value: walletObject.concessionCategory,
        replace: { ADULT: 'Adult', CHILD: 'Child', SENIOR: 'Senior' },
      },
      customConcessionCategory: { value: walletObject.customConcessionCategory },
      routeRestrictions: { value: walletObject.ticketRestrictions?.routeRestrictions },
      routeRestrictionsDetails: {
        value: walletObject.ticketRestrictions?.routeRestrictionsDetails,
      },
      timeRestrictions: { value: walletObject.ticketRestrictions?.timeRestrictions },
      otherRestrictions: { value: walletObject.ticketRestrictions?.otherRestrictions },
      purchaseReceiptNumber: { value: walletObject.purchaseDetails?.purchaseReceiptNumber },
      purchaseDateTime: {
        value: walletObject.purchaseDetails?.purchaseDateTime,
        format: 'date-time',
      },
      accountId: { value: walletObject.purchaseDetails?.accountId },
      confirmationCode: { value: walletObject.purchaseDetails?.confirmationCode },
      faceValue: { value: walletObject.purchaseDetails?.ticketCost.faceValue },
      purchasePrice: { value: walletObject.purchaseDetails?.ticketCost.purchasePrice },
      discountMessage: { value: walletObject.purchaseDetails?.ticketCost.discountMessage },
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
          departureDateTime: { value: ticketLeg.departureDateTime, format: 'date-time' },
          arrivalDateTime: { value: ticketLeg.arrivalDateTime, format: 'date-time' },
          departureTime: { value: ticketLeg.departureDateTime, format: 'time' },
          arrivalTime: { value: ticketLeg.arrivalDateTime, format: 'time' },
          transitOperatorName: { value: ticketLeg.transitOperatorName },
          fareName: { value: ticketLeg.fareName },
          platform: { value: ticketLeg.platform },
          zone: { value: ticketLeg.zone },
        },
        passTemplatePassData,
        passData,
      ),
      ticketSeats: ticketLeg.ticketSeats.map((ticketSeat) =>
        computePassDataValues(
          {
            coach: { value: ticketSeat.coach },
            seat: { value: ticketSeat.seat },
            fareClass: {
              value: ticketSeat.fareClass,
              replace: { ECONOMY: 'Economy', FIRST: 'First', BUSINESS: 'Business' },
            },
            customFareClass: { value: ticketSeat.customFareClass },
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
      logo: { value: walletClass.logo },
      transitType: { value: walletClass.transitType },
      ticketNumberLabel: {
        value: walletClass.customTicketNumberLabel,
        fallback: 'Ticket Number',
      },
      fareNameLabel: { value: walletClass.customFareNameLabel, fallback: 'Fare name' },
      platformLabel: { value: walletClass.customPlatformLabel, fallback: 'Platform' },
      zoneLabel: { value: walletClass.customZoneLabel, fallback: 'Zone' },
      fareClassLabel: { value: walletClass.customFareClassLabel, fallback: 'Fare class' },
      concessionCategoryLabel: {
        value: walletClass.customConcessionCategoryLabel,
        fallback: 'Concession Category',
      },
      routeRestrictionsLabel: {
        value: walletClass.customRouteRestrictionsLabel,
        fallback: 'Route Restrictions',
      },
      routeRestrictionsDetailsLabel: {
        value: walletClass.customRouteRestrictionsDetailsLabel,
        fallback: 'Route Restrictions Details',
      },
      timeRestrictionsLabel: {
        value: walletClass.customTimeRestrictionsLabel,
        fallback: 'Time Restrictions',
      },
      otherRestrictionsLabel: {
        value: walletClass.customOtherRestrictionsLabel,
        fallback: 'Other Restrictions',
      },
      purchaseReceiptNumberLabel: {
        value: walletClass.customPurchaseReceiptNumberLabel,
        fallback: 'Receipt Number',
      },
      confirmationCodeLabel: {
        value: walletClass.customConfirmationCodeLabel,
        fallback: 'Confirmation Code',
      },
      purchaseFaceValueLabel: {
        value: walletClass.customPurchaseFaceValueLabel,
        fallback: 'Face Value',
      },
      purchasePriceLabel: {
        value: walletClass.customPurchasePriceLabel,
        fallback: 'Price',
      },
      discountMessageLabel: {
        value: walletClass.customDiscountMessageLabel,
        fallback: 'Discount Message',
      },
      coachLabel: {
        value: walletClass.customCoachLabel,
        fallback: 'Coach',
      },
      seatLabel: {
        value: walletClass.customSeatLabel,
        fallback: 'Seat',
      },
    },
    passTemplateData,
  );
}
