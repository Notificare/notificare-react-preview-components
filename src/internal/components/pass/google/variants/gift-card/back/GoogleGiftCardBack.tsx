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

export function GoogleGiftCardBack({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  passData,
}: GoogleGiftCardBackProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        programLogo: { value: walletClass.programLogo },
        pinLabel: { value: walletClass.pinLabel, fallback: 'PIN' },
        eventNumberLabel: { value: walletClass.eventNumberLabel, fallback: 'Event Number' },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
        balance: { value: walletObject.balance },
        balanceUpdateTime: { value: walletObject.balanceUpdateTime },
        pin: { value: walletObject.pin },
        eventNumber: { value: walletObject.eventNumber },
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
      icon={passTemplateDataValues.programLogo}
      title={`Gift Card: ${passDataValues.balance}`}
      fields={[
        ...createTextFields([
          {
            header: 'Updated',
            body: passDataValues.balanceUpdateTime,
          },
          {
            header: passTemplateDataValues.pinLabel,
            body: passDataValues.pin,
          },
          {
            header: passTemplateDataValues.eventNumberLabel,
            body: passDataValues.eventNumber,
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
          header: 'Use gift card across Google',
          description: 'See your gift card balance in places like Maps, Shopping, and more',
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

interface GoogleGiftCardBackProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  passData?: NotificarePassDataFields;
}
