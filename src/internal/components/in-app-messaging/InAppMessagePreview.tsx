import { BannerMessage } from '~/internal/components/in-app-messaging/message-types/banner-message/BannerMessage';
import { CardMessage } from '~/internal/components/in-app-messaging/message-types/card-message/CardMessage';
import { FullscreenMessage } from '~/internal/components/in-app-messaging/message-types/fullscreen-message/FullscreenMessage';
import { AndroidPhoneBackground } from '~/internal/components/shared/AndroidPhoneBackground/AndroidPhoneBackground';
import { VerifiedInAppMessage } from '~/internal/schemas/notificare-in-app-message';

import './InAppMessagePreview.css';

export function InAppMessagePreview({ inAppMessage }: InAppMessagePreviewProps) {
  return (
    <div className="notificare__in-app__preview">
      <AndroidPhoneBackground theme="dark">
        {(() => {
          switch (inAppMessage.type) {
            case 're.notifica.inappmessage.Banner':
              return <BannerMessage inAppMessage={inAppMessage} />;
            case 're.notifica.inappmessage.Card':
              return <CardMessage inAppMessage={inAppMessage} />;
            case 're.notifica.inappmessage.Fullscreen':
              return <FullscreenMessage inAppMessage={inAppMessage} />;
          }
        })()}
      </AndroidPhoneBackground>
    </div>
  );
}

interface InAppMessagePreviewProps {
  inAppMessage: VerifiedInAppMessage;
}
