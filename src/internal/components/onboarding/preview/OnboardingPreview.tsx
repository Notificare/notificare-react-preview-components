import { DialogPreview } from '~/internal/components/onboarding/modes/dialog-preview/DialogPreview';
import { FloatingButtonPreview } from '~/internal/components/onboarding/modes/floating-button-preview/FloatingButtonPreview';
import { AndroidPhoneBackground } from '~/internal/components/shared';
import { NotificareOnboardingApplicationInfo } from '~/models/onboarding/notificare-onboarding-application-info';
import { NotificareOnboardingPermissionStatus } from '~/models/onboarding/notificare-onboarding-permission-status';

export function OnboardingPreview({
  permissionStatus,
  applicationInfo,
  applicationId,
  serviceKey,
}: OnboardingPreviewProps) {
  return (
    <AndroidPhoneBackground theme="dark">
      {applicationInfo.websitePushConfig.launchConfig.autoOnboardingOptions ? (
        <DialogPreview
          applicationId={applicationId}
          applicationInfo={applicationInfo}
          serviceKey={serviceKey}
        />
      ) : (
        applicationInfo.websitePushConfig.launchConfig.floatingButtonOptions && (
          <FloatingButtonPreview
            permissionStatus={permissionStatus}
            options={applicationInfo.websitePushConfig.launchConfig.floatingButtonOptions}
          />
        )
      )}
    </AndroidPhoneBackground>
  );
}

interface OnboardingPreviewProps {
  permissionStatus: NotificareOnboardingPermissionStatus;
  applicationInfo: NotificareOnboardingApplicationInfo;
  applicationId?: string;
  serviceKey?: string;
}
