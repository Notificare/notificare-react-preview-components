import './AndroidPhoneBackground.css';
import { ReactNode } from 'react';

interface AndroidPhoneBackgroundProps {
  children: ReactNode;
  theme: 'dark' | 'light';
}

export default function AndroidPhoneBackground({ children, theme }: AndroidPhoneBackgroundProps) {
  return (
    <div
      className={`notificare__android-phone-background ${theme === 'dark' && 'notificare__android-phone-background--dark'}`}
      data-testid="android-phone-background"
    >
      <div className="notificare__android-phone-background-camera" />
      <div className="notificare__android-phone-background-content">{children}</div>
    </div>
  );
}
