import ExpandButtonIcon from '~/assets/expand.svg';

import './ExpandButton.css';

export function ExpandButton(props: ExpandButtonProps) {
  const { open, disabled, onToggle } = props;

  return (
    <button
      disabled={disabled}
      className={`notificare__push__web__desktop__lock-screen__expand-button ${open ? 'notificare__push__web__desktop__lock-screen__expand-button--rotated' : ''}`}
      onClick={onToggle}
      data-testid="web-desktop-expand-button"
    >
      <ExpandButtonIcon className="notificare__push__web__desktop__lock-screen__expand-button-svg" />
    </button>
  );
}

export interface ExpandButtonProps {
  open: boolean;
  disabled: boolean;
  onToggle: () => void;
}
