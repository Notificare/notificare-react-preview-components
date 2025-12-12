import { DialogPreview } from '~/internal/components/push-onboarding/modes/dialog-preview/DialogPreview';
import { FloatingButtonPreview } from '~/internal/components/push-onboarding/modes/floating-button-preview/FloatingButtonPreview';
import { AndroidPhoneBackground } from '~/internal/components/shared';
import { NotificarePushOnboardingApplicationInfo } from '~/models/push-onboarding/notificare-push-onboarding-application-info';
import { NotificarePushOnboardingPermissionStatus } from '~/models/push-onboarding/notificare-push-onboarding-permission-status';

export function PushOnboardingPreview({
  permissionStatus,
  applicationInfo,
  applicationId,
  serviceKey,
}: PushOnboardingPreviewProps) {
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

interface PushOnboardingPreviewProps {
  permissionStatus: NotificarePushOnboardingPermissionStatus;
  applicationInfo: NotificarePushOnboardingApplicationInfo;
  applicationId?: string;
  serviceKey?: string;
}
