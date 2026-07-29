import './GooglePassPreview.css';
import { useState } from 'react';
import LeftArrowIcon from '~/assets/left-arrow.svg';
import OptionsIcon from '~/assets/options.svg';
import ShareNodesIcon from '~/assets/share-nodes.svg';
import StarIcon from '~/assets/star.svg';
import { GoogleEventTicketBack } from '~/internal/components/pass/google/variants/event-ticket/back/GoogleEventTicketBack';
import { GoogleEventTicketFront } from '~/internal/components/pass/google/variants/event-ticket/front/GoogleEventTicketFront';
import { GoogleGiftCardBack } from '~/internal/components/pass/google/variants/gift-card/back/GoogleGiftCardBack';
import { GoogleGiftCardFront } from '~/internal/components/pass/google/variants/gift-card/front/GoogleGiftCardFront';
import { GoogleLoyaltyCardBack } from '~/internal/components/pass/google/variants/loyalty-card/back/GoogleLoyaltyCardBack';
import { GoogleLoyaltyCardFront } from '~/internal/components/pass/google/variants/loyalty-card/front/GoogleLoyaltyCardFront';
import { GoogleOfferBack } from '~/internal/components/pass/google/variants/offer/back/GoogleOfferBack';
import { GoogleOfferFront } from '~/internal/components/pass/google/variants/offer/front/GoogleOfferFront';
import { GoogleTransitPassBack } from '~/internal/components/pass/google/variants/transit-pass/back/GoogleTransitPassBack';
import { GoogleTransitPassFront } from '~/internal/components/pass/google/variants/transit-pass/front/GoogleTransitPassFront';
import { NotificarePass } from '~/models/pass/notificare-pass';
import { NotificarePassTemplate } from '~/models/pass/notificare-pass-template';

export function GooglePassPreview({ passTemplate, pass }: GooglePassPreviewProps) {
  const [showBack, setShowBack] = useState(false);

  const commonProps = {
    walletClass: passTemplate.templateDesign.googlePay.walletClass,
    passTemplateData: passTemplate.templateData,
    walletObject: passTemplate.templateDesign.googlePay.walletObject,
    passTemplatePassData: passTemplate.passData,
    passData: pass?.data.fields,
  };

  const frontProps = {
    ...commonProps,
    barcodeDesign: passTemplate.barcodeDesign,
    barcode: pass?.barcode ?? 'ABC1234567890',
  };

  const backProps = commonProps;

  if (!showBack) {
    return (
      <>
        <div className="notificare__pass__google__toolbar">
          <div className="notificare__pass__google__toolbar-button notificare__pass__google__toolbar-button--favorite">
            <StarIcon className="notificare__pass__google__toolbar-button-icon" />
          </div>

          <div className="notificare__pass__google__toolbar-button">
            <ShareNodesIcon className="notificare__pass__google__toolbar-button-icon" />
          </div>

          <a
            className="notificare__pass__google__toolbar-button notificare__pass__google__toolbar-button--show-back-front"
            onClick={() => setShowBack(true)}
          >
            <OptionsIcon className="notificare__pass__google__toolbar-button-icon" />
          </a>
        </div>

        {passTemplate.type === 'loyalty' && <GoogleLoyaltyCardFront {...frontProps} />}

        {passTemplate.type === 'offer' && <GoogleOfferFront {...frontProps} />}

        {passTemplate.type === 'giftCard' && <GoogleGiftCardFront {...frontProps} />}

        {passTemplate.type === 'eventTicket' && <GoogleEventTicketFront {...frontProps} />}

        {passTemplate.type === 'transit' && <GoogleTransitPassFront {...frontProps} />}
      </>
    );
  }

  return (
    <>
      <div className="notificare__pass__google__toolbar--back">
        <a
          className="notificare__pass__google__toolbar-button notificare__pass__google__toolbar-button--show-back-front"
          onClick={() => setShowBack(false)}
        >
          <LeftArrowIcon className="notificare__pass__google__toolbar-button-icon" />
        </a>
      </div>

      {passTemplate.type === 'loyalty' && <GoogleLoyaltyCardBack {...backProps} />}

      {passTemplate.type === 'offer' && <GoogleOfferBack {...backProps} />}

      {passTemplate.type === 'giftCard' && <GoogleGiftCardBack {...backProps} />}

      {passTemplate.type === 'eventTicket' && <GoogleEventTicketBack {...backProps} />}

      {passTemplate.type === 'transit' && <GoogleTransitPassBack {...backProps} />}
    </>
  );
}

interface GooglePassPreviewProps {
  passTemplate: NotificarePassTemplate;
  pass?: NotificarePass;
}
