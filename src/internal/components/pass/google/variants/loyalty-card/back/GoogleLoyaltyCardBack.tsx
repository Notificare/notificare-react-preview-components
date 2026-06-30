import { useMemo } from 'react';
import { CardBack } from '~/internal/components/pass/google/shared/card-back/CardBack';
import {
  computePassTemplateDataValues,
  computePassDataValues,
  computeModulesData,
} from '~/internal/utils/pass/compute-data-values';
import { NotificarePassDataFields } from '~/models/pass/notificare-pass';
import {
  NotificarePassTemplateDataField,
  NotificarePassTemplateDesignGooglePayWalletClass,
  NotificarePassTemplateDesignGooglePayWalletObject,
  NotificarePassTemplatePassDataField,
} from '~/models/pass/notificare-pass-template';

export function GoogleLoyaltyCardBack({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  passData,
}: GoogleLoyaltyCardBackProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        programName: { value: walletClass.programName },
        accountNameLabel: { value: walletClass.accountNameLabel, fallback: 'Member Name' },
        accountIdLabel: { value: walletClass.accountIdLabel, fallback: 'Member ID' },
        rewardsTierLabel: { value: walletClass.rewardsTierLabel, fallback: 'Rewards Tier' },
        rewardsTier: { value: walletClass.rewardsTier },
        secondaryRewardsTierLabel: {
          value: walletClass.secondaryRewardsTierLabel,
          fallback: 'Secondary Rewards Tier',
        },
        secondaryRewardsTier: { value: walletClass.secondaryRewardsTier },
        programLogo: { value: walletClass.programLogo },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
        accountName: { value: walletObject.accountName },
        accountId: { value: walletObject.accountId },
        mainImage: { value: walletObject.imageModulesData[0]?.mainImage },
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
      title={passTemplateDataValues.programName}
      fields={[
        {
          header: passTemplateDataValues.accountNameLabel,
          body: passDataValues.accountName,
        },
        {
          header: passTemplateDataValues.accountIdLabel,
          body: passDataValues.accountId,
        },
        {
          header: passTemplateDataValues.rewardsTierLabel,
          body: passTemplateDataValues.rewardsTier,
        },
        {
          header: passTemplateDataValues.secondaryRewardsTierLabel,
          body: passTemplateDataValues.secondaryRewardsTier,
        },
        {
          header: passTemplateDataValues.accountNameLabel,
          body: passDataValues.accountName,
        },
        {
          image: modulesData.imageModulesDataMainImage,
        },
        ...modulesData.messages,
        ...modulesData.textModulesData,
      ]}
      urlActions={[...modulesData.linksModuleDataURIS]}
      customActions={[
        {
          header: 'Use loyalty card across Google',
          description:
            'See your point balance and loyalty benefits in places like Maps, Shopping, and more',
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

interface GoogleLoyaltyCardBackProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  passData?: NotificarePassDataFields;
}
