import './TitleBar.css';

interface TitleBarProps {
  appName: string;
  title?: string;
  showOptions: boolean;
}

export default function TitleBar({ appName, title, showOptions }: TitleBarProps) {
  return (
    <div className="notificare__push__ios__app-ui__title-bar">
      <div className="notificare__push__ios__app-ui__title-bar-text">{title || appName}</div>

      {showOptions && (
        <svg
          className="notificare__push__ios__app-ui__title-bar-options-button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-testid="ios-app-ui-title-bar-options-button"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>
      )}
    </div>
  );
}
