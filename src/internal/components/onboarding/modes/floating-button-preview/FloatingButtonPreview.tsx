import BellIconDenied from '~/assets/bell-icon-denied.svg';
import BellIconGranted from '~/assets/bell-icon-granted.svg';
import BellIcon from '~/assets/bell-icon.svg';
import { NotificareOnboardingFloatingButtonOptions } from '~/models/onboarding/notificare-onboarding-application-info';
import { NotificareOnboardingPermissionStatus } from '~/models/onboarding/notificare-onboarding-permission-status';

import './FloatingButtonPreview.css';

export function FloatingButtonPreview({ permissionStatus, options }: ButtonPreviewProps) {
  return (
    <div
      className="notificare__onboarding__floating-button__wrapper"
      data-testid="onboarding-floating-button-preview-wrapper"
    >
      <div
        className={`notificare__onboarding__floating-button ${options.alignment.horizontal === 'start' ? `notificare__onboarding__floating-button--start` : `notificare__onboarding__floating-button--end`} ${options.alignment.vertical === 'top' ? `notificare__onboarding__floating-button--top` : `notificare__onboarding__floating-button--bottom`}`}
        data-testid="onboarding-floating-button-preview"
      >
        {permissionStatus === 'default' && (
          <BellIcon className="notificare__onboarding__floating-button__icon" />
        )}

        {permissionStatus === 'granted' && (
          <BellIconGranted className="notificare__onboarding__floating-button__icon" />
        )}

        {permissionStatus === 'denied' && (
          <BellIconDenied className="notificare__onboarding__floating-button__icon" />
        )}

        <div
          className="notificare__onboarding__floating-button-tooltip"
          data-testid="onboarding-floating-button-preview-tooltip"
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
  permissionStatus: NotificareOnboardingPermissionStatus;
  options: NotificareOnboardingFloatingButtonOptions;
}
