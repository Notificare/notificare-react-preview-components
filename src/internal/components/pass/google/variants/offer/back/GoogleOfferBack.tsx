import { useMemo } from 'react';
import { CardBack } from '~/internal/components/pass/google/shared/card-back/CardBack';
import {
  computePassTemplateDataValues,
  computeModulesData,
} from '~/internal/utils/pass/compute-data-values';
import { NotificarePassDataFields } from '~/models/pass/notificare-pass';
import {
  NotificarePassTemplateDataField,
  NotificarePassTemplateDesignGooglePayWalletClass,
  NotificarePassTemplateDesignGooglePayWalletObject,
  NotificarePassTemplatePassDataField,
} from '~/models/pass/notificare-pass-template';

export function GoogleOfferBack({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  passData,
}: GoogleOfferBackProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        titleImage: { value: walletClass.titleImage },
        title: { value: walletClass.title },
        provider: { value: walletClass.provider },
        details: { value: walletClass.details },
        finePrint: { value: walletClass.finePrint },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const modulesData = useMemo(() => {
    return computeModulesData(walletObject, passTemplatePassData, passData);
  }, [walletObject, passTemplatePassData, passData]);

  return (
    <CardBack
      icon={passTemplateDataValues.titleImage}
      title={passTemplateDataValues.title}
      fields={[
        {
          header: 'From',
          body: passTemplateDataValues.provider,
        },
        {
          image: modulesData.imageModulesDataMainImage,
        },
        {
          header: 'Details',
          body: passTemplateDataValues.details,
        },
        {
          header: 'Disclaimer',
          body: passTemplateDataValues.finePrint,
        },
        ...modulesData.messages,
        ...modulesData.textModulesData,
      ]}
      urlActions={[...modulesData.linksModuleDataURIS]}
      customActions={[
        {
          header: 'Use offer across Google',
          description: 'See offer alerts and notifications in places like Calendar, Maps, and more',
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

interface GoogleOfferBackProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  passData?: NotificarePassDataFields;
}
