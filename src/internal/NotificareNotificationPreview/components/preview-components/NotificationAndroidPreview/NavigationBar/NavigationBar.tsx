import './NavigationBar.css';
import LeftArrowIcon from '../../../../../../assets/left-arrow.svg';
import OptionsIcon from '../../../../../../assets/options.svg';

export function NavigationBar({ title, showOptions }: NavigationBarProps) {
  return (
    <div className="notificare__push__android__app-ui__navigation-bar">
      <LeftArrowIcon className="notificare__push__android__app-ui__navigation-bar-arrow-icon" />
      <div className="notificare__push__android__app-ui__navigation-bar-title">{title}</div>
      {showOptions && (
        <OptionsIcon
          data-testid="android-app-ui-navigation-bar-options-button"
          className="notificare__push__android__app-ui__navigation-bar-options-button"
        />
      )}
    </div>
  );
}

export interface NavigationBarProps {
  title: string;
  showOptions: boolean;
}
