import { ReactNode } from 'react';

import './IOSPhoneBackground.css';

export function IOSPhoneBackground({ children, theme }: IosPhoneBackgroundProps) {
  return (
    <div
      className={`notificare__ios-phone-background__wrapper ${theme === 'dark' ? 'notificare__ios-phone-background__wrapper--dark' : ''}`}
      data-testid="ios-phone-background"
    >
      <div className="notificare__ios-phone-background__camera" />
      <div className="notificare__ios-phone-background__content">{children}</div>
    </div>
  );
}

export interface IosPhoneBackgroundProps {
  children: ReactNode;
  theme: 'dark' | 'light';
}
