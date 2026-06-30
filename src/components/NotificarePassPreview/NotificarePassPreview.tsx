import '~/preset.css';
import { GooglePassPreview } from '~/internal/components/pass/google/GooglePassPreview';
import { NotificarePass } from '~/models/pass/notificare-pass';
import { NotificarePassTemplate } from '~/models/pass/notificare-pass-template';

export function NotificarePassPreview({
  passTemplate,
  pass,
  variant = 'google',
}: NotificarePassPreviewProps) {
  return (
    <div className="notificare">
      {variant === 'google' && <GooglePassPreview passTemplate={passTemplate} pass={pass} />}
    </div>
  );
}

export interface NotificarePassPreviewProps {
  passTemplate: NotificarePassTemplate;
  pass?: NotificarePass;
  variant?: 'google' | 'apple';
}
