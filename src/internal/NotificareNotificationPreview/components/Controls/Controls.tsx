import './Controls.css';
import { Dispatch, ReactNode, SetStateAction } from 'react';
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
      <svg key="Android Icon" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
      </svg>
    ) as ReactNode,
  },
  {
    key: 'ios',
    icon: (
      <svg key="iOS Icon" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    ) as ReactNode,
  },
  {
    key: 'web',
    icon: (
      <svg key="Web Icon" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
      </svg>
    ) as ReactNode,
  },
];

const webDevices: OptionsGroup<NotificationPreviewModelWebDevice>[] = [
  {
    key: 'desktop',
    icon: (
      <svg key="Desktop Icon" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z" />
      </svg>
    ) as ReactNode,
  },
  {
    key: 'phone',
    icon: (
      <svg key="Phone Icon" width="19px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" />
      </svg>
    ) as ReactNode,
  },
];

const webMobileTypes: OptionsGroup<NotificationPreviewModelWebMobileType>[] = [
  {
    key: 'android',
    icon: (
      <svg key="Android Icon" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
      </svg>
    ) as ReactNode,
  },
  {
    key: 'iphone',
    icon: (
      <svg key="iOS Icon" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    ) as ReactNode,
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
