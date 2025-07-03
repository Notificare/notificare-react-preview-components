import { ReactNode } from 'react';
import { useIntl } from 'react-intl';
import AndroidIcon from '~/assets/android.svg';
import DesktopIcon from '~/assets/desktop.svg';
import HTML5Icon from '~/assets/html5.svg';
import IOSIcon from '~/assets/ios.svg';
import PhoneIcon from '~/assets/phone.svg';
import { Selector } from '~/internal/components/shared/Selector/Selector';
import { ToggleGroup } from '~/internal/components/shared/ToggleGroup/ToggleGroup';
import { PUSH_MESSAGES } from '~/locales/push/en';
import {
  NotificationPreviewDesktopOperatingSystem,
  NotificationPreviewDisplayMode,
  NotificationPreviewFormFactor,
  NotificationPreviewMobileOperatingSystem,
  NotificationPreviewPlatform,
  NotificationPreviewState,
} from '../notification-preview-state';

import './Controls.css';

export function Controls({ previewState, onPreviewStateChanged }: ControlsProps) {
  const intl = useIntl();

  function handlePlatformChanged(platform: NotificationPreviewPlatform) {
    if (previewState.platform === platform) return;

    switch (platform) {
      case 'android':
      case 'ios':
        onPreviewStateChanged({
          ...previewState,
          platform,
        });
        break;
      case 'web':
        onPreviewStateChanged({
          ...previewState,
          platform: 'web',
          formFactor: 'desktop',
          os: 'macos',
          // Reset the display mode to a value supported by the Web Desktop Notification component.
          displayMode: 'lockscreen',
        });
        break;
    }
  }

  function handleFormFactorChanged(formFactor: NotificationPreviewFormFactor) {
    if (previewState.platform !== 'web' || previewState.formFactor === formFactor) return;

    switch (formFactor) {
      case 'desktop':
        onPreviewStateChanged({
          ...previewState,
          formFactor,
          os: 'macos',
          // Reset the display mode to a value supported by the Web Desktop Notification component.
          displayMode: 'lockscreen',
        });
        break;
      case 'phone':
        onPreviewStateChanged({
          ...previewState,
          formFactor,
          os: 'android',
          // Reset the display mode to a value supported by the Web Mobile Notification component.
          displayMode: 'app-ui',
        });
        break;
    }
  }

  function handleOperatingSystemChanged(os: NotificationPreviewMobileOperatingSystem) {
    if (
      previewState.platform !== 'web' ||
      previewState.formFactor !== 'phone' ||
      previewState.os === os
    ) {
      return;
    }

    onPreviewStateChanged({
      ...previewState,
      os,
    });
  }

  function handleDisplayModeChanged(displayMode: NotificationPreviewDisplayMode) {
    if (previewState.displayMode === displayMode) return;

    onPreviewStateChanged({
      ...previewState,
      displayMode,
    });
  }

  return (
    <div className="notificare__push__preview-controls" data-testid="controls">
      <div className="notificare__push__preview-controls-toggle-groups">
        <ToggleGroup
          label={intl.formatMessage({
            id: 'controls.platform',
            defaultMessage: PUSH_MESSAGES['controls.platform'],
          })}
          options={PLATFORM_OPTIONS}
          value={previewState.platform}
          onValueChanged={handlePlatformChanged}
        />

        {previewState.platform === 'web' && (
          <ToggleGroup
            label={intl.formatMessage({
              id: 'controls.formFactor',
              defaultMessage: PUSH_MESSAGES['controls.formFactor'],
            })}
            options={FORM_FACTOR_OPTIONS}
            value={previewState.formFactor}
            onValueChanged={handleFormFactorChanged}
          />
        )}

        {previewState.platform === 'web' && previewState.formFactor === 'phone' && (
          <ToggleGroup
            label={intl.formatMessage({
              id: 'controls.operatingSystem',
              defaultMessage: PUSH_MESSAGES['controls.operatingSystem'],
            })}
            options={MOBILE_OPERATING_SYSTEM_OPTIONS}
            value={previewState.os}
            onValueChanged={handleOperatingSystemChanged}
          />
        )}
      </div>

      {(previewState.platform === 'android' || previewState.platform === 'ios') && (
        <Selector
          label={intl.formatMessage({
            id: 'controls.variant',
            defaultMessage: PUSH_MESSAGES['controls.variant'],
          })}
          options={DISPLAY_MODE_OPTIONS}
          value={previewState.displayMode}
          onValueChanged={handleDisplayModeChanged}
        />
      )}

      {previewState.platform === 'web' && previewState.formFactor === 'desktop' && (
        <Selector
          label={intl.formatMessage({
            id: 'controls.operatingSystem',
            defaultMessage: PUSH_MESSAGES['controls.operatingSystem'],
          })}
          options={DESKTOP_OPERATING_SYSTEM_OPTIONS}
          value={previewState.os}
          disabled
        />
      )}

      {previewState.platform === 'web' && previewState.formFactor === 'phone' && (
        <Selector
          label={intl.formatMessage({
            id: 'controls.variant',
            defaultMessage: PUSH_MESSAGES['controls.variant'],
          })}
          options={DISPLAY_MODE_OPTIONS}
          value="app-ui"
          disabled
        />
      )}
    </div>
  );
}

export interface ControlsProps {
  previewState: NotificationPreviewState;
  onPreviewStateChanged: (state: NotificationPreviewState) => void;
}

const PLATFORM_OPTIONS = [
  {
    value: 'android',
    icon: (
      <AndroidIcon
        key="platforms-android-icon"
        className="notificare__push__preview-controls-android-icon"
      />
    ),
  },
  {
    value: 'ios',
    icon: (
      <IOSIcon key="platform-ios-icon" className="notificare__push__preview-controls-ios-icon" />
    ),
  },
  {
    value: 'web',
    icon: (
      <HTML5Icon
        key="platform-html5-icon"
        className="notificare__push__preview-controls-html5-icon"
      />
    ),
  },
] satisfies Array<{ value: NotificationPreviewPlatform; icon: ReactNode }>;

const FORM_FACTOR_OPTIONS = [
  {
    value: 'desktop',
    icon: (
      <DesktopIcon
        key="form-factor-desktop-icon"
        className="notificare__push__preview-controls-desktop-icon"
      />
    ),
  },
  {
    value: 'phone',
    icon: (
      <PhoneIcon
        key="form-factor-phone-icon"
        className="notificare__push__preview-controls-phone-icon"
      />
    ),
  },
] satisfies Array<{ value: NotificationPreviewFormFactor; icon: ReactNode }>;

const MOBILE_OPERATING_SYSTEM_OPTIONS = [
  {
    value: 'android',
    icon: (
      <AndroidIcon
        key="device-android-icon"
        className="notificare__push__preview-controls-android-icon"
      />
    ),
  },
  {
    value: 'ios',
    icon: (
      <IOSIcon key="device-iphone-icon" className="notificare__push__preview-controls-ios-icon" />
    ),
  },
] satisfies Array<{ value: NotificationPreviewMobileOperatingSystem; icon: ReactNode }>;

const DESKTOP_OPERATING_SYSTEM_OPTIONS = [
  {
    value: 'macos',
    labelId: 'controls.operatingSystem.macos',
    defaultLabel: PUSH_MESSAGES['controls.operatingSystem.macos'],
  },
] satisfies Array<{
  value: NotificationPreviewDesktopOperatingSystem;
  labelId: string;
  defaultLabel: string;
}>;

const DISPLAY_MODE_OPTIONS = [
  {
    value: 'lockscreen',
    labelId: 'controls.displayMode.lockScreen',
    defaultLabel: PUSH_MESSAGES['controls.displayMode.lockScreen'],
  },
  {
    value: 'lockscreen-expanded',
    labelId: 'controls.displayMode.expandedLockScreen',
    defaultLabel: PUSH_MESSAGES['controls.displayMode.expandedLockScreen'],
  },
  {
    value: 'app-ui',
    labelId: 'controls.displayMode.appUi',
    defaultLabel: PUSH_MESSAGES['controls.displayMode.appUi'],
  },
] satisfies Array<{
  value: NotificationPreviewDisplayMode;
  labelId: string;
  defaultLabel: string;
}>;
