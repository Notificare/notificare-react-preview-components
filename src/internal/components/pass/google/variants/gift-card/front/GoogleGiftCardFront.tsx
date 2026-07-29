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

export function GoogleGiftCardFront({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  barcodeDesign,
  passData,
  barcode,
}: GoogleGiftCardFrontProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        hexBackgroundColor: { value: walletClass.hexBackgroundColor },
        programLogo: { value: walletClass.programLogo },
        wideProgramLogo: { value: walletClass.wideProgramLogo },
        merchantName: { value: walletClass.merchantName },
        issuerName: { value: walletClass.issuerName },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
        balance: { value: walletObject.balance },
        cardNumber: { value: walletObject.cardNumber },
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
        <CardSingleTopRow title={`Gift Card: ${passDataValues.balance}`} />
      </CardTitle>
      <CardSpacer />
      <CardBarcode
        format={barcodeDesign.format === 'none' ? 'code128' : barcodeDesign.format}
        barcode={barcode}
        text={
          barcodeDesign.format === 'none'
            ? barcode
            : barcodeDesign.showAltText
              ? barcode
              : passDataValues.cardNumber
        }
      />
      <CardHeroImage heroImage={passDataValues.heroImage} />
    </Card>
  );
}

interface GoogleGiftCardFrontProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  barcodeDesign: NotificarePassTemplateBarcodeDesign;
  passData?: NotificarePassDataFields;
  barcode: string;
}
