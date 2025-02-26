import './IOSPhoneBackground.css';

interface IosPhoneBackgroundProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
}

export default function IOSPhoneBackground(props: IosPhoneBackgroundProps) {
  const { children, theme } = props;

  return (
    <div
      className={`notificare__ios-phone-background ${theme === 'dark' && 'notificare__ios-phone-background--dark'}`}
    >
      <div className="notificare__ios-phone-background-camera" />
      <div className="notificare__ios-phone-background-content">{children}</div>
    </div>
  );
}
