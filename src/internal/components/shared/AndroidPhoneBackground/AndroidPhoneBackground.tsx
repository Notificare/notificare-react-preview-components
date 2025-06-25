import { ReactNode } from 'react';

import './AndroidPhoneBackground.css';

export function AndroidPhoneBackground({ children, theme }: AndroidPhoneBackgroundProps) {
  return (
    <div
      className={`notificare__android-phone-background__wrapper ${theme === 'dark' ? 'notificare__android-phone-background__wrapper--dark' : ''}`}
      data-testid="android-phone-background"
    >
      <div className="notificare__android-phone-background__camera" />
      <div className="notificare__android-phone-background__content">{children}</div>
    </div>
  );
}

export interface AndroidPhoneBackgroundProps {
  children: ReactNode;
  theme: 'dark' | 'light';
}
