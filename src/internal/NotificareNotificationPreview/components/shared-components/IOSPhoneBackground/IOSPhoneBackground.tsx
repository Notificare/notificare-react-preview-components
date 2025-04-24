import './IOSPhoneBackground.css';
import { ReactNode } from 'react';

interface IosPhoneBackgroundProps {
  children: ReactNode;
  theme: 'dark' | 'light';
}

export default function IOSPhoneBackground({ children, theme }: IosPhoneBackgroundProps) {
  return (
    <div
      className={`notificare__push__ios__phone-background ${theme === 'dark' ? 'notificare__push__ios__phone-background--dark' : ''}`}
      data-testid="ios-phone-background"
    >
      <div className="notificare__push__ios__phone-background-camera" />
      <div className="notificare__push__ios__phone-background-content">{children}</div>
    </div>
  );
}
