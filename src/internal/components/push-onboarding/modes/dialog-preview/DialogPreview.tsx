import DefaultAppIcon from '~/assets/default-app-icon.svg';
import { Loading } from '~/internal/components/shared';
import { useApplicationLoader } from '~/internal/hooks';
import { NotificarePushOnboardingApplicationInfo } from '~/models';

import './DialogPreview.css';

export function DialogPreview({ applicationId, applicationInfo, serviceKey }: DialogPreviewProps) {
  const fetchedApplicationState = useApplicationLoader({
    id: applicationId,
    serviceKey,
  });

  return (() => {
    switch (fetchedApplicationState.status) {
      case 'idle':
      case 'loading':
        return <Loading />;
      case 'success': {
        const icon =
          applicationInfo.websitePushConfig.icon ??
          fetchedApplicationState.data.websitePushConfig?.icon;

        const applicationName =
          applicationInfo.websitePushConfig.launchConfig.applicationName ??
          applicationInfo.name ??
          fetchedApplicationState.data.name;

        const autoOnboardingOptions =
          applicationInfo.websitePushConfig.launchConfig.autoOnboardingOptions;

        return (
          <div
            className="notificare__push-onboarding__dialog__wrapper"
            data-testid="push-onboarding-dialog-preview-wrapper"
          >
            <div className="notificare__push-onboarding__dialog__window">
              <div className="notificare__push-onboarding__dialog__content">
                {icon ? (
                  <img
                    className="notificare__push-onboarding__dialog__icon"
                    src={icon}
                    data-testid="push-onboarding-dialog-preview-icon"
                  />
                ) : (
                  <div className="notificare__push-onboarding__dialog__default-icon-container">
                    <DefaultAppIcon className="notificare__push-onboarding__dialog__default-icon" />
                  </div>
                )}

                <div className="notificare__push-onboarding__dialog__text-content">
                  <p
                    className="notificare__push-onboarding__dialog__title"
                    data-testid="push-onboarding-dialog-preview-title"
                  >
                    {applicationName}
                  </p>
                  <p
                    className="notificare__push-onboarding__dialog__message"
                    data-testid="push-onboarding-dialog-preview-message"
                  >
                    {autoOnboardingOptions?.message}
                  </p>
                </div>
              </div>

              <div className="notificare__push-onboarding__dialog__footer">
                <div className="notificare__push-onboarding__dialog__actions">
                  <button
                    className="notificare__push-onboarding__dialog__action-button notificare__push-onboarding__dialog__action-button--cancel"
                    data-testid="push-onboarding-dialog-cancel-button"
                  >
                    {autoOnboardingOptions?.cancelButton}
                  </button>
                  <button
                    className="notificare__push-onboarding__dialog__action-button notificare__push-onboarding__dialog__action-button--accept"
                    data-testid="push-onboarding-dialog-accept-button"
                  >
                    {autoOnboardingOptions?.acceptButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  })();
}

interface DialogPreviewProps {
  applicationId?: string;
  applicationInfo: NotificarePushOnboardingApplicationInfo;
  serviceKey?: string;
}
