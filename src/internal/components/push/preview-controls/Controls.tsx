import { ReactNode, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AndroidIcon from '~/assets/android.svg';
import DesktopIcon from '~/assets/desktop.svg';
import HTML5Icon from '~/assets/html5.svg';
import IOSIcon from '~/assets/ios.svg';
import PhoneIcon from '~/assets/phone.svg';
import { Selector } from '~/internal/components/shared/Selector/Selector';
import { ToggleGroup } from '~/internal/components/shared/ToggleGroup/ToggleGroup';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import {
  getUrlResolverPreviewTypeByUrl,
  UrlResolverPreviewTypeResult,
} from '~/internal/utils/url-resolver';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import {
  NotificationPreviewDesktopOperatingSystem,
  NotificationPreviewDisplayMode,
  NotificationPreviewFormFactor,
  NotificationPreviewMobileOperatingSystem,
  NotificationPreviewPlatform,
  NotificationPreviewState,
} from '../notification-preview-state';

import './Controls.css';

export function Controls({ previewState, onPreviewStateChanged, notification }: ControlsProps) {
  const intl = useIntl();
  const [options, setOptions] = useState(getOptionsForNotification);

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

  function isPreviewStateValid() {
    if (!options.platformOptions.some((option) => option.value === previewState.platform))
      return false;

    if (!options.displayModeOptions.some((option) => option.value === previewState.displayMode))
      return false;

    if (previewState.platform === 'web') {
      if (!options.formFactorOptions.some((option) => option.value === previewState.formFactor))
        return false;

      if (
        !(
          options.desktopOperatingSystemOptions.some(
            (option) => option.value === previewState.os,
          ) ||
          options.mobileOperatingSystemOptions?.some((option) => option.value === previewState.os)
        )
      )
        return false;
    }

    return true;
  }

  function getOptionsForNotification() {
    const options = {
      platformOptions: PLATFORM_OPTIONS,
      formFactorOptions: FORM_FACTOR_OPTIONS,
      mobileOperatingSystemOptions: MOBILE_OPERATING_SYSTEM_OPTIONS,
      desktopOperatingSystemOptions: DESKTOP_OPERATING_SYSTEM_OPTIONS,
      displayModeOptions: DISPLAY_MODE_OPTIONS,
    };

    switch (notification.type) {
      case 're.notifica.notification.Alert':
      case 're.notifica.notification.Image':
      case 're.notifica.notification.Map':
      case 're.notifica.notification.URL':
      case 're.notifica.notification.Video':
      case 're.notifica.notification.WebView':
        return options;

      case 're.notifica.notification.InAppBrowser':
      case 're.notifica.notification.Passbook':
      case 're.notifica.notification.Rate':
      case 're.notifica.notification.Store':
        return {
          ...options,
          formFactorOptions: FORM_FACTOR_OPTIONS.filter((option) => option.value !== 'phone'),
          mobileOperatingSystemOptions: null,
        };

      case 're.notifica.notification.None':
      case 're.notifica.notification.URLScheme':
        return {
          ...options,
          formFactorOptions: FORM_FACTOR_OPTIONS.filter((option) => option.value !== 'phone'),
          mobileOperatingSystemOptions: null,
          displayModeOptions: DISPLAY_MODE_OPTIONS.filter((option) => option.value !== 'app-ui'),
        };

      case 're.notifica.notification.URLResolver': {
        const url = notification.content[0].data;
        const urlResolverResult = getUrlResolverPreviewTypeByUrl(url);

        switch (urlResolverResult) {
          case UrlResolverPreviewTypeResult.INVALID_URL:
          case UrlResolverPreviewTypeResult.DYNAMIC_LINK:
          case UrlResolverPreviewTypeResult.URL_SCHEME:
          case UrlResolverPreviewTypeResult.RELATIVE_URL:
            return {
              ...options,
              formFactorOptions: FORM_FACTOR_OPTIONS.filter((option) => option.value !== 'phone'),
              mobileOperatingSystemOptions: null,
              displayModeOptions: DISPLAY_MODE_OPTIONS.filter(
                (option) => option.value !== 'app-ui',
              ),
            };

          case UrlResolverPreviewTypeResult.IN_APP_BROWSER:
            return {
              ...options,
              formFactorOptions: FORM_FACTOR_OPTIONS.filter((option) => option.value !== 'phone'),
              mobileOperatingSystemOptions: null,
            };

          case UrlResolverPreviewTypeResult.WEB_VIEW:
            return options;
        }
      }
    }
  }

  useEffect(
    function updateOptionsWhenNotificationChanges() {
      setOptions(getOptionsForNotification);
    },
    [notification],
  );

  useEffect(
    function setDefaultPreviewStateIfInvalid() {
      if (!isPreviewStateValid()) {
        onPreviewStateChanged(DEFAULT_PREVIEW_STATE);
      }
    },
    [options, previewState],
  );

  if (!isPreviewStateValid()) return;

  return (
    <div className="notificare__push__preview-controls" data-testid="controls">
      <div className="notificare__push__preview-controls-toggle-groups">
        <ToggleGroup
          label={intl.formatMessage({
            id: 'controls.platform',
            defaultMessage: PUSH_TRANSLATIONS['controls.platform'],
          })}
          options={options.platformOptions}
          value={previewState.platform}
          onValueChanged={handlePlatformChanged}
        />

        {previewState.platform === 'web' && (
          <ToggleGroup
            label={intl.formatMessage({
              id: 'controls.formFactor',
              defaultMessage: PUSH_TRANSLATIONS['controls.formFactor'],
            })}
            options={options.formFactorOptions}
            value={previewState.formFactor}
            onValueChanged={handleFormFactorChanged}
          />
        )}

        {previewState.platform === 'web' &&
          previewState.formFactor === 'phone' &&
          options.mobileOperatingSystemOptions && (
            <ToggleGroup
              label={intl.formatMessage({
                id: 'controls.operatingSystem',
                defaultMessage: PUSH_TRANSLATIONS['controls.operatingSystem'],
              })}
              options={options.mobileOperatingSystemOptions}
              value={previewState.os}
              onValueChanged={handleOperatingSystemChanged}
            />
          )}
      </div>

      {(previewState.platform === 'android' || previewState.platform === 'ios') && (
        <Selector
          label={intl.formatMessage({
            id: 'controls.variant',
            defaultMessage: PUSH_TRANSLATIONS['controls.variant'],
          })}
          options={options.displayModeOptions}
          value={previewState.displayMode}
          onValueChanged={handleDisplayModeChanged}
        />
      )}

      {previewState.platform === 'web' && previewState.formFactor === 'desktop' && (
        <Selector
          label={intl.formatMessage({
            id: 'controls.operatingSystem',
            defaultMessage: PUSH_TRANSLATIONS['controls.operatingSystem'],
          })}
          options={options.desktopOperatingSystemOptions}
          value={previewState.os}
          disabled
        />
      )}

      {previewState.platform === 'web' && previewState.formFactor === 'phone' && (
        <Selector
          label={intl.formatMessage({
            id: 'controls.variant',
            defaultMessage: PUSH_TRANSLATIONS['controls.variant'],
          })}
          options={options.displayModeOptions}
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
  notification: VerifiedNotification;
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
] satisfies { value: NotificationPreviewPlatform; icon: ReactNode }[];

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
] satisfies { value: NotificationPreviewFormFactor; icon: ReactNode }[];

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
] satisfies { value: NotificationPreviewMobileOperatingSystem; icon: ReactNode }[];

const DESKTOP_OPERATING_SYSTEM_OPTIONS = [
  {
    value: 'macos',
    labelId: 'controls.operatingSystem.macos',
    defaultLabel: PUSH_TRANSLATIONS['controls.operatingSystem.macos'],
  },
] satisfies {
  value: NotificationPreviewDesktopOperatingSystem;
  labelId: string;
  defaultLabel: string;
}[];

const DISPLAY_MODE_OPTIONS = [
  {
    value: 'lockscreen',
    labelId: 'controls.displayMode.lockScreen',
    defaultLabel: PUSH_TRANSLATIONS['controls.displayMode.lockScreen'],
  },
  {
    value: 'lockscreen-expanded',
    labelId: 'controls.displayMode.expandedLockScreen',
    defaultLabel: PUSH_TRANSLATIONS['controls.displayMode.expandedLockScreen'],
  },
  {
    value: 'app-ui',
    labelId: 'controls.displayMode.appUi',
    defaultLabel: PUSH_TRANSLATIONS['controls.displayMode.appUi'],
  },
] satisfies {
  value: NotificationPreviewDisplayMode;
  labelId: string;
  defaultLabel: string;
}[];

const DEFAULT_PREVIEW_STATE: NotificationPreviewState = {
  platform: 'android',
  displayMode: 'lockscreen',
};
