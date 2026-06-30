import { useMemo } from 'react';
import { Card } from '~/internal/components/pass/google/shared/card/Card';
import CardBarcode from '~/internal/components/pass/google/shared/card/card-barcode/CardBarcode';
import { CardHeader } from '~/internal/components/pass/google/shared/card/card-header/CardHeader';
import { CardHeroImage } from '~/internal/components/pass/google/shared/card/card-hero-image/CardHeroImage';
import { CardRow } from '~/internal/components/pass/google/shared/card/card-row/CardRow';
import { CardSingleTopRow } from '~/internal/components/pass/google/shared/card/card-single-top-row/CardSingleTopRow';
import { CardSpacer } from '~/internal/components/pass/google/shared/card/card-spacer/CardSpacer';
import { CardTitle } from '~/internal/components/pass/google/shared/card/card-title/CardTitle';
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

export function GoogleLoyaltyCardFront({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  barcodeDesign,
  passData,
}: GoogleLoyaltyCardFrontProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        hexBackgroundColor: { value: walletClass.hexBackgroundColor },
        programLogo: { value: walletClass.programLogo },
        wideProgramLogo: { value: walletClass.wideProgramLogo },
        issuerName: { value: walletClass.issuerName },
        programName: { value: walletClass.programName },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
        loyaltyPointsLabel: {
          value: walletObject.loyaltyPoints?.label,
          fallback: 'Points',
        },
        loyaltyPoints: {
          value: walletObject.loyaltyPoints?.balance,
        },
        secondaryLoyaltyPointsLabel: {
          value: walletObject.secondaryLoyaltyPoints?.label,
          fallback: 'Rewards',
        },
        secondaryLoyaltyPoints: {
          value: walletObject.secondaryLoyaltyPoints?.balance,
        },
        accountId: {
          value: walletObject.accountId,
        },
        heroImage: {
          value: walletObject.heroImage?.sourceUri?.uri,
        },
      },
      passTemplatePassData,
      passData,
    );
  }, [walletObject, passTemplatePassData, passData]);

  return (
    <Card hexBackgroundColor={passTemplateDataValues.hexBackgroundColor}>
      <CardTitle>
        <CardHeader
          logo={passTemplateDataValues.programLogo}
          title={passTemplateDataValues.issuerName}
          wideLogo={passTemplateDataValues.wideProgramLogo}
        />

        <CardSingleTopRow title={passTemplateDataValues.programName} />
      </CardTitle>
      <CardSpacer />
      <CardRow
        fields={[
          {
            header: passDataValues.loyaltyPointsLabel,
            body: passDataValues.loyaltyPoints,
          },
          {
            header: passDataValues.secondaryLoyaltyPointsLabel,
            body: passDataValues.secondaryLoyaltyPoints,
          },
        ]}
      />
      <CardSpacer />
      <CardBarcode
        format={barcodeDesign.format}
        showBarcodeValue={barcodeDesign.showAltText}
        alternateText={passDataValues.accountId}
      />
      <CardHeroImage heroImage={passDataValues.heroImage} />
    </Card>
  );
}

interface GoogleLoyaltyCardFrontProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  barcodeDesign: NotificarePassTemplateBarcodeDesign;
  passData?: NotificarePassDataFields;
}
