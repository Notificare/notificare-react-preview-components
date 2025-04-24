import './AndroidPhoneBackground.css';
import { ReactNode } from 'react';

interface AndroidPhoneBackgroundProps {
  children: ReactNode;
  theme: 'dark' | 'light';
}

export default function AndroidPhoneBackground({ children, theme }: AndroidPhoneBackgroundProps) {
  return (
    <div
      className={`notificare__push__android__phone-background ${theme === 'dark' ? 'notificare__push__android__phone-background--dark' : ''}`}
      data-testid="android-phone-background"
    >
      <div className="notificare__push__android__phone-background-camera" />
      <div className="notificare__push__android__phone-background-content">{children}</div>
    </div>
  );
}
