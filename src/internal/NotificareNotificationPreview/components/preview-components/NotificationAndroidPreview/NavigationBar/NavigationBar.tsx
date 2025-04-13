import './NavigationBar.css';

export default function NavigationBar({ appName, title, showOptions }: NavigationBarProps) {
  return (
    <div className="notificare__android-app-ui-navigation-bar">
      <svg
        className="notificare__android-app-ui-navigation-bar-arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
      <div className="notificare__android-app-ui-navigation-bar-title">{title || appName}</div>

      {showOptions && (
        <svg
          className="notificare__android-app-ui-navigation-bar-options-button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 512"
          data-testid="android-app-ui-navigation-bar-options-button"
        >
          <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
        </svg>
      )}
    </div>
  );
}

interface NavigationBarProps {
  appName: string;
  title?: string;
  showOptions: boolean;
}
