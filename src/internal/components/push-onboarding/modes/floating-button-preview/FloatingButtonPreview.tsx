import BellIconDenied from '~/assets/bell-icon-denied.svg';
import BellIconGranted from '~/assets/bell-icon-granted.svg';
import BellIcon from '~/assets/bell-icon.svg';
import { NotificarePushOnboardingFloatingButtonOptions } from '~/models/push-onboarding/notificare-push-onboarding-application-info';
import { NotificarePushOnboardingPermissionStatus } from '~/models/push-onboarding/notificare-push-onboarding-permission-status';

import './FloatingButtonPreview.css';

export function FloatingButtonPreview({ permissionStatus, options }: ButtonPreviewProps) {
  return (
    <div
      className="notificare__push-onboarding__floating-button__wrapper"
      data-testid="push-onboarding-floating-button-preview-wrapper"
    >
      <div
        className={`notificare__push-onboarding__floating-button ${options.alignment.horizontal === 'start' ? `notificare__push-onboarding__floating-button--start` : `notificare__push-onboarding__floating-button--end`} ${options.alignment.vertical === 'top' ? `notificare__push-onboarding__floating-button--top` : `notificare__push-onboarding__floating-button--bottom`}`}
        data-testid="push-onboarding-floating-button-preview"
      >
        {permissionStatus === 'default' && (
          <BellIcon className="notificare__push-onboarding__floating-button__icon" />
        )}

        {permissionStatus === 'granted' && (
          <BellIconGranted className="notificare__push-onboarding__floating-button__icon" />
        )}

        {permissionStatus === 'denied' && (
          <BellIconDenied className="notificare__push-onboarding__floating-button__icon" />
        )}

        <div
          className="notificare__push-onboarding__floating-button-tooltip"
          data-testid="push-onboarding-floating-button-preview-tooltip"
        >
          {permissionStatus === 'default' && options.permissionTexts.default}
          {permissionStatus === 'granted' && options.permissionTexts.granted}
          {permissionStatus === 'denied' && options.permissionTexts.denied}
        </div>
      </div>
    </div>
  );
}

interface ButtonPreviewProps {
  permissionStatus: NotificarePushOnboardingPermissionStatus;
  options: NotificarePushOnboardingFloatingButtonOptions;
}
