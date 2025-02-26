import './TitleBar.css';

interface TitleBarProps {
  appName: string;
  title?: string;
  hasActions: boolean;
}

export default function TitleBar(props: TitleBarProps) {
  const { appName, title, hasActions } = props;

  return (
    <div className="notificare__ios-app-push-ui-title-bar">
      <div className="notificare__ios-app-push-ui-title-bar-text">{title || appName}</div>

      {hasActions && (
        <svg
          className="notificare__ios-app-push-ui-title-bar-actions-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>
      )}
    </div>
  );
}
