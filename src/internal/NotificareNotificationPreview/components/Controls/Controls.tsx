import './Controls.css';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import AndroidIcon from '../../../../assets/android.svg';
import DesktopIcon from '../../../../assets/desktop.svg';
import HTML5Icon from '../../../../assets/html5.svg';
import IOSIcon from '../../../../assets/ios.svg';
import PhoneIcon from '../../../../assets/phone.svg';
import {
  NotificationPreviewDisplayMode,
  NotificationPreviewPlatform,
  NotificationPreviewWebDesktopOS,
  NotificationPreviewWebDevice,
  NotificationPreviewWebMobileType,
} from '../../types/notification-preview-model';
import { Selector } from './Selector/Selector';
import { ToggleGroup } from './ToggleGroup/ToggleGroup';

/* Toggle Groups data */

const platforms: OptionsGroup<NotificationPreviewPlatform>[] = [
  {
    key: 'android',
    icon: (
      <AndroidIcon
        key="platforms-android-icon"
        className="notificare__push__preview-controls-android-icon"
      />
    ),
  },
  {
    key: 'ios',
    icon: (
      <IOSIcon key="platform-ios-icon" className="notificare__push__preview-controls-ios-icon" />
    ),
  },
  {
    key: 'web',
    icon: (
      <HTML5Icon
        key="platform-html5-icon"
        className="notificare__push__preview-controls-html5-icon"
      />
    ),
  },
];

const webDevices: OptionsGroup<NotificationPreviewWebDevice>[] = [
  {
    key: 'desktop',
    icon: (
      <DesktopIcon
        key="form-factor-desktop-icon"
        className="notificare__push__preview-controls-desktop-icon"
      />
    ),
  },
  {
    key: 'phone',
    icon: (
      <PhoneIcon
        key="form-factor-phone-icon"
        className="notificare__push__preview-controls-phone-icon"
      />
    ),
  },
];

const webMobileTypes: OptionsGroup<NotificationPreviewWebMobileType>[] = [
  {
    key: 'android',
    icon: (
      <AndroidIcon
        key="device-android-icon"
        className="notificare__push__preview-controls-android-icon"
      />
    ),
  },
  {
    key: 'iphone',
    icon: (
      <IOSIcon key="device-iphone-icon" className="notificare__push__preview-controls-ios-icon" />
    ),
  },
];

export function Controls({
  platform,
  displayMode,
  webDevice,
  webMobileType,
  webDesktopOS,
  setPlatform,
  setDisplayMode,
  setWebDevice,
  setWebMobileType,
  setWebDesktopOS,
}: ControlsProps) {
  return (
    <div className="notificare__push__preview-controls" data-testid="controls">
      <div className="notificare__push__preview-controls-toggle-groups">
        <ToggleGroup
          label="Platform"
          options={platforms}
          selected={platform}
          setSelected={setPlatform}
        />

        {platform === 'web' && (
          <>
            <ToggleGroup
              label="Form Factor"
              options={webDevices}
              selected={webDevice}
              setSelected={setWebDevice}
            />

            {webDevice === 'phone' && (
              <ToggleGroup
                label="Phone Model"
                options={webMobileTypes}
                selected={webMobileType}
                setSelected={setWebMobileType}
              />
            )}
          </>
        )}
      </div>

      {(platform === 'ios' || platform === 'android') && (
        <Selector
          options={[
            { key: 'lockscreen', label: 'Lock Screen' },
            { key: 'lockscreen-expanded', label: 'Lock Screen Expanded' },
            { key: 'app-ui', label: 'App UI' },
          ]}
          selected={displayMode}
          setSelected={setDisplayMode}
        />
      )}

      {platform === 'web' && (
        <>
          {webDevice === 'phone' && (
            <Selector
              options={[{ key: 'app-ui', label: 'App UI' }]}
              selected={displayMode}
              setSelected={setDisplayMode}
            />
          )}

          {webDevice === 'desktop' && (
            <Selector
              options={[{ key: 'macOS', label: 'macOS' }]}
              selected={webDesktopOS}
              setSelected={setWebDesktopOS}
            />
          )}
        </>
      )}
    </div>
  );
}

export interface ControlsProps {
  platform?: NotificationPreviewPlatform;
  displayMode?: NotificationPreviewDisplayMode;
  webDevice?: NotificationPreviewWebDevice;
  webMobileType?: NotificationPreviewWebMobileType;
  webDesktopOS?: NotificationPreviewWebDesktopOS;
  setPlatform: Dispatch<SetStateAction<NotificationPreviewPlatform | undefined>>;
  setDisplayMode: Dispatch<SetStateAction<NotificationPreviewDisplayMode | undefined>>;
  setWebDevice: Dispatch<SetStateAction<NotificationPreviewWebDevice | undefined>>;
  setWebMobileType: Dispatch<SetStateAction<NotificationPreviewWebMobileType | undefined>>;
  setWebDesktopOS: Dispatch<SetStateAction<NotificationPreviewWebDesktopOS | undefined>>;
}

type OptionsGroup<T> = {
  key: T;
  icon: ReactNode;
};
