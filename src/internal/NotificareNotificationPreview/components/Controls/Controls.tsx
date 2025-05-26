import './Controls.css';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import AndroidIcon from '../../../../assets/android.svg';
import DesktopIcon from '../../../../assets/desktop.svg';
import HTML5Icon from '../../../../assets/html5.svg';
import IOSIcon from '../../../../assets/ios.svg';
import PhoneIcon from '../../../../assets/phone.svg';
import {
  NotificationPreviewModelDisplayMode,
  NotificationPreviewModelPlatform,
  NotificationPreviewModelWebDesktopOS,
  NotificationPreviewModelWebDevice,
  NotificationPreviewModelWebMobileType,
} from '../../types/notification-preview-model';
import Selector from './Selector/Selector';
import ToggleGroup from './ToggleGroup/ToggleGroup';

/* Toggle Groups data */

const platforms: OptionsGroup<NotificationPreviewModelPlatform>[] = [
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

const webDevices: OptionsGroup<NotificationPreviewModelWebDevice>[] = [
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

const webMobileTypes: OptionsGroup<NotificationPreviewModelWebMobileType>[] = [
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



export default function Controls({
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
          options={platforms.map((platform) => platform)}
          selected={platform}
          setSelected={setPlatform}
        />

        {platform === 'web' && (
          <>
            <ToggleGroup
              label="Form Factor"
              options={webDevices.map((webDevice) => webDevice)}
              selected={webDevice}
              setSelected={setWebDevice}
            />

            {webDevice === 'phone' && (
              <ToggleGroup
                label="Phone Model"
                options={webMobileTypes.map((webMobileType) => webMobileType)}
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

interface ControlsProps {
  platform?: NotificationPreviewModelPlatform;
  displayMode?: NotificationPreviewModelDisplayMode;
  webDevice?: NotificationPreviewModelWebDevice;
  webMobileType?: NotificationPreviewModelWebMobileType;
  webDesktopOS?: NotificationPreviewModelWebDesktopOS;
  setPlatform: Dispatch<SetStateAction<NotificationPreviewModelPlatform | undefined>>;
  setDisplayMode: Dispatch<SetStateAction<NotificationPreviewModelDisplayMode | undefined>>;
  setWebDevice: Dispatch<SetStateAction<NotificationPreviewModelWebDevice | undefined>>;
  setWebMobileType: Dispatch<SetStateAction<NotificationPreviewModelWebMobileType | undefined>>;
  setWebDesktopOS: Dispatch<SetStateAction<NotificationPreviewModelWebDesktopOS | undefined>>;
}

type OptionsGroup<T> = {
  key: T;
  icon: ReactNode;
};
