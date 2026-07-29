import { useMemo } from 'react';
import { Card } from '~/internal/components/pass/google/shared/card/Card';
import CardBarcode from '~/internal/components/pass/google/shared/card/card-barcode/CardBarcode';
import { CardHeader } from '~/internal/components/pass/google/shared/card/card-header/CardHeader';
import { CardHeroImage } from '~/internal/components/pass/google/shared/card/card-hero-image/CardHeroImage';
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

export function GoogleOfferFront({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  barcodeDesign,
  passData,
  barcode,
}: GoogleOfferFrontProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        hexBackgroundColor: { value: walletClass.hexBackgroundColor },
        issuerName: { value: walletClass.issuerName },
        title: { value: walletClass.title },
        titleImage: { value: walletClass.titleImage?.sourceUri?.uri },
        wideTitleImage: { value: walletClass.wideTitleImage?.sourceUri?.uri },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
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
          logo={passTemplateDataValues.titleImage}
          title={passTemplateDataValues.issuerName}
          wideLogo={passTemplateDataValues.wideTitleImage}
        />
        <CardSingleTopRow title={passTemplateDataValues.title} />
      </CardTitle>
      <CardSpacer />
      <CardBarcode format={barcodeDesign.format} barcode={barcode} text={barcode} />
      <CardHeroImage heroImage={passDataValues.heroImage} />
    </Card>
  );
}

interface GoogleOfferFrontProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  barcodeDesign: NotificarePassTemplateBarcodeDesign;
  passData?: NotificarePassDataFields;
  barcode: string;
}
