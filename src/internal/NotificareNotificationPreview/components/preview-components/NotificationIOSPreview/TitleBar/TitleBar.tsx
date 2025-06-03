import './TitleBar.css';
import OptionsIcon from '../../../../../../assets/options.svg';

export function TitleBar({ title, showOptions }: TitleBarProps) {
  return (
    <div className="notificare__push__ios__app-ui__title-bar">
      <div className="notificare__push__ios__app-ui__title-bar-text">{title}</div>

      {showOptions && (
        <OptionsIcon
          className="notificare__push__ios__app-ui__title-bar-options-button"
          data-testid="ios-app-ui-title-bar-options-button"
        />
      )}
    </div>
  );
}

export interface TitleBarProps {
  title: string;
  showOptions: boolean;
}
