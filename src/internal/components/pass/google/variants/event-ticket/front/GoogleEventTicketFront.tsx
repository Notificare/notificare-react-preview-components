import { useMemo } from 'react';
import { Card } from '~/internal/components/pass/google/shared/card/Card';
import CardBarcode from '~/internal/components/pass/google/shared/card/card-barcode/CardBarcode';
import { CardHeader } from '~/internal/components/pass/google/shared/card/card-header/CardHeader';
import { CardHeroImage } from '~/internal/components/pass/google/shared/card/card-hero-image/CardHeroImage';
import { CardRow } from '~/internal/components/pass/google/shared/card/card-row/CardRow';
import { CardRowDivider } from '~/internal/components/pass/google/shared/card/card-row-divider/CardRowDivider';
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

export function GoogleEventTicketFront({
  walletClass,
  passTemplateData,
  walletObject,
  passTemplatePassData,
  barcodeDesign,
  passData,
  barcode,
}: GoogleEventTicketFrontProps) {
  const passTemplateDataValues = useMemo(() => {
    return computePassTemplateDataValues(
      {
        issuerName: { value: walletClass.issuerName },
        eventName: { value: walletClass.eventName },
        venueName: { value: walletClass.venue?.name },
        startDate: { value: walletClass.dateTime?.start, format: 'date' },
        endTime: { value: walletClass.dateTime?.start, format: 'time' },
        gateLabel: {
          value: walletClass.gateLabel,
          fallback: 'Gate',
          replace: {
            GATE_LABEL_UNSPECIFIED: 'Gate',
            GATE: 'Gate',
            DOOR: 'Door',
            ENTRANCE: 'Entrance',
          },
        },
        sectionLabel: {
          value: walletClass.sectionLabel,
          fallback: 'Section',
          replace: {
            SECTION_LABEL_UNSPECIFIED: 'Section',
            SECTION: 'Section',
            THEATRE: 'Theatre',
          },
        },
        customGateLabel: { value: walletClass.customGateLabel },
        customSectionLabel: { value: walletClass.customSectionLabel },
        customRowLabel: { value: walletClass.customRowLabel, fallback: 'Row' },
        customSeatLabel: { value: walletClass.customSeatLabel, fallback: 'Seat' },
        logo: { value: walletClass.logo },
        wideLogo: { value: walletClass.wideLogo },
      },
      passTemplateData,
    );
  }, [walletClass, passTemplateData]);

  const passDataValues = useMemo(() => {
    return computePassDataValues(
      {
        hexBackgroundColor: { value: walletObject.hexBackgroundColor, fallback: '#fff' },
        gate: { value: walletObject.seatInfo?.gate },
        section: { value: walletObject.seatInfo?.section },
        row: { value: walletObject.seatInfo?.row },
        seat: { value: walletObject.seatInfo?.seat },
        ticketNumber: { value: walletObject.ticketNumber },
        heroImage: {
          value: walletObject.heroImage?.sourceUri?.uri,
        },
      },
      passTemplatePassData,
      passData,
    );
  }, [walletObject, passTemplatePassData, passData]);

  return (
    <Card hexBackgroundColor={passDataValues.hexBackgroundColor}>
      <CardTitle>
        <CardHeader
          logo={passTemplateDataValues.logo}
          title={passTemplateDataValues.issuerName}
          wideLogo={passTemplateDataValues.wideLogo}
        />
        <CardSingleTopRow
          title={passTemplateDataValues.eventName}
          header={passTemplateDataValues.venueName}
        />
      </CardTitle>
      <CardSpacer />
      <CardRow
        fields={[
          {
            header: 'Date',
            body: passTemplateDataValues.startDate,
          },
          {
            header: 'Time',
            body: passTemplateDataValues.endTime,
          },
        ]}
      />
      <CardRowDivider />
      <CardRow
        fields={[
          {
            header: passTemplateDataValues.customGateLabel || passTemplateDataValues.gateLabel,
            body: passDataValues.gate,
          },
          {
            header:
              passTemplateDataValues.customSectionLabel || passTemplateDataValues.sectionLabel,
            body: passDataValues.gate,
          },
          resolveRowAndSeatField(
            passTemplateDataValues.customRowLabel,
            passTemplateDataValues.customSeatLabel,
            passDataValues.row,
            passDataValues.seat,
          ),
        ]}
      />
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

interface GoogleEventTicketFrontProps {
  walletClass: NotificarePassTemplateDesignGooglePayWalletClass;
  passTemplateData: NotificarePassTemplateDataField[];
  walletObject: NotificarePassTemplateDesignGooglePayWalletObject;
  passTemplatePassData: NotificarePassTemplatePassDataField[];
  barcodeDesign: NotificarePassTemplateBarcodeDesign;
  passData?: NotificarePassDataFields;
  barcode: string;
}

function resolveRowAndSeatField(rowLabel: string, seatLabel: string, row: string, seat: string) {
  if (row && seat) {
    return {
      header: `${rowLabel} / ${seatLabel}`,
      body: `${row} / ${seat}`,
    };
  }

  if (!row && seat) {
    return {
      header: seatLabel,
      body: seat,
    };
  }

  if (row && !seat) {
    return {
      header: rowLabel,
      body: row,
    };
  }

  return {
    header: '',
    body: '',
  };
}
