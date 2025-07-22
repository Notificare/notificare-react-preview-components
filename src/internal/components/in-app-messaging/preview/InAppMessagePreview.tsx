import {
  BannerMessage,
  CardMessage,
  FullscreenMessage,
} from '~/internal/components/in-app-messaging/message-types';
import { AndroidPhoneBackground } from '~/internal/components/shared';
import { VerifiedInAppMessage } from '~/internal/schemas/in-app-message';

import './InAppMessagePreview.css';

export function InAppMessagePreview({ inAppMessage }: InAppMessagePreviewProps) {
  return (
    <div className="notificare__in-app-messaging__preview">
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
