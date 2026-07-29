import { useMemo } from 'react';
import {
  CardBack,
  createImageFields,
  createTextFields,
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

export function GoogleEventTicketBack({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  passData,
}: GoogleEventTicketBackProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        eventName: { value: walletClass.eventName },
        venueName: { value: walletClass.venue?.name },
        venueAddress: { value: walletClass.venue?.address },
        doorsOpen: { value: walletClass.dateTime?.doorsOpen, format: 'date-time' },
        start: { value: walletClass.dateTime?.start, format: 'date-time' },
        end: { value: walletClass.dateTime?.end, format: 'date-time' },
        doorsOpenLabel: {
          value: walletClass.dateTime?.doorsOpenLabel,
          fallback: 'Doors open',
          replace: {
            DOORS_OPEN_LABEL_UNSPECIFIED: 'Doors open',
            DOORS_OPEN: 'Doors open',
            GATES_OPEN: 'Gates open',
          },
        },
        confirmationCodeLabel: {
          value: walletClass.confirmationCodeLabel,
          fallback: 'Confirmation code',
          replace: {
            CONFIRMATION_CODE_LABEL_UNSPECIFIED: 'Confirmation code',
            CONFIRMATION_CODE: 'Confirmation code',
            CONFIRMATION_NUMBER: 'Confirmation number',
            ORDER_NUMBER: 'Order number',
            RESERVATION_NUMBER: 'Reservation number',
          },
        },
        customDoorsOpenLabel: { value: walletClass.dateTime?.customDoorsOpenLabel },
        customConfirmationCodeLabel: { value: walletClass.customConfirmationCodeLabel },
        logo: { value: walletClass.logo },
        finePrint: { value: walletClass.finePrint },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
        ticketHolderName: { value: walletObject.ticketHolderName },
        faceValue: { value: walletObject.faceValue },
        ticketType: { value: walletObject.ticketType },
        ticketNumber: { value: walletObject.ticketNumber },
        confirmationCode: { value: walletObject.reservationInfo?.confirmationCode },
      },
      passTemplatePassData,
      passData,
    );
  }, [walletObject, passTemplatePassData, passData]);

  const modulesData = useMemo(() => {
    return computeModulesData(walletObject, passTemplatePassData, passData);
  }, [walletObject, passTemplatePassData, passData]);

  return (
    <CardBack
      icon={passTemplateDataValues.logo}
      title={passTemplateDataValues.eventName}
      fields={[
        ...createTextFields([
          {
            header: 'Ticket Holder',
            body: passDataValues.ticketHolderName,
          },
          {
            header: passTemplateDataValues.venueName,
            body: passTemplateDataValues.venueAddress,
          },
          {
            header:
              passTemplateDataValues.customDoorsOpenLabel || passTemplateDataValues.doorsOpenLabel,
            body: passTemplateDataValues.doorsOpen,
          },
          {
            header: 'Event Start Time',
            body: passTemplateDataValues.start,
          },
          {
            header: 'Event End Time',
            body: passTemplateDataValues.end,
          },
        ]),
        ...createImageFields([
          {
            image: modulesData.imageModulesDataMainImage,
          },
        ]),
        ...createTextFields([
          {
            header: 'Ticket Type',
            body: passDataValues.ticketType,
          },
          {
            header: 'Ticket Number',
            body: passDataValues.ticketNumber,
          },
          {
            header:
              passTemplateDataValues.customConfirmationCodeLabel ||
              passTemplateDataValues.confirmationCodeLabel,
            body: passDataValues.confirmationCode,
          },
          {
            header: 'Face Value',
            body: passDataValues.faceValue,
          },
          {
            header: 'Terms & Conditions',
            body: passTemplateDataValues.finePrint,
          },
          ...modulesData.messages,
          ...modulesData.textModulesData,
        ]),
      ]}
      urlActions={[...modulesData.linksModuleDataURIS]}
      customActions={[
        {
          header: 'Use event ticket across Google',
          description:
            'See event notifications and updates in places like Calendar, Assistant, and more',
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

interface GoogleEventTicketBackProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  passData?: NotificarePassDataFields;
}
