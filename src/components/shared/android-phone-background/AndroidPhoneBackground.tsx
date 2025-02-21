import React from 'react';
import './AndroidPhoneBackground.css';

interface AndroidPhoneBackgroundProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
}

export default function AndroidPhoneBackground(props: AndroidPhoneBackgroundProps) {
  const { children, theme } = props;

  return (
    <div
      className={`notificare__android-phone-background ${theme === 'dark' && 'notificare__android-phone-background--dark'}`}
    >
      <div className="notificare__android-phone-background-camera" />
      <div className="notificare__android-phone-background-content">{children}</div>
    </div>
  );
}
