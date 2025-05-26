import './Controls.css';
import { ReactNode } from 'react';
import AndroidIcon from '../../../../assets/android.svg';
import DesktopIcon from '../../../../assets/desktop.svg';
import HTML5Icon from '../../../../assets/html5.svg';
import IOSIcon from '../../../../assets/ios.svg';
import PhoneIcon from '../../../../assets/phone.svg';
import { NotificationPreviewVariant } from '../../models/notification-preview-variant';
import Selector from './Selector/Selector';
import ToggleGroup from './ToggleGroup/ToggleGroup';

export default function Controls({
  platform,
  mobileVariant,
  webDevice,
  webMobileType,
  webDesktopOS,
  setPlatform,
  setMobileVariant,
  setWebDevice,
  setWebMobileType,
  setWebDesktopOS,
}: ControlsProps) {
  const platforms: OptionsGroup<typeof platform>[] = [
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

  const webDevices: OptionsGroup<typeof webDevice>[] = [
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

  const webMobileTypes: OptionsGroup<typeof webMobileType>[] = [
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
          selected={mobileVariant}
          setSelected={setMobileVariant}
        />
      )}

      {platform === 'web' && (
        <>
          {webDevice === 'phone' && (
            <Selector
              options={[{ key: 'app-ui', label: 'App UI' }]}
              selected={mobileVariant}
              setSelected={setMobileVariant}
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
  platform: NotificationPreviewVariant['platform'];
  mobileVariant: NotificationPreviewVariant['mobileVariant'];
  webDevice: NotificationPreviewVariant['webDevice'];
  webMobileType: NotificationPreviewVariant['webMobileType'];
  webDesktopOS: NotificationPreviewVariant['webDesktopOS'];
  setPlatform: (value: NotificationPreviewVariant['platform']) => void;
  setMobileVariant: (value: NotificationPreviewVariant['mobileVariant']) => void;
  setWebDevice: (value: NotificationPreviewVariant['webDevice']) => void;
  setWebMobileType: (value: NotificationPreviewVariant['webMobileType']) => void;
  setWebDesktopOS: (value: NotificationPreviewVariant['webDesktopOS']) => void;
}

type OptionsGroup<T> = {
  key: T;
  icon: ReactNode;
};
