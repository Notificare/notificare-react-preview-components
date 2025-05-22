import './TitleBar.css';
import OptionsIcon from '../../../../../../../.assets/options.svg';

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
        <OptionsIcon
          className="notificare__push__ios__app-ui__title-bar-options-button"
          data-testid="ios-app-ui-title-bar-options-button"
        />
      )}
    </div>
  );
}
