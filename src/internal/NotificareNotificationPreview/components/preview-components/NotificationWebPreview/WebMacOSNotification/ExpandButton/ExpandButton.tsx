import './ExpandButton.css';

interface ExpandButtonProps {
  open: boolean;
  disabled: boolean;
  onToggle: () => void;
}

export default function ExpandButton(props: ExpandButtonProps) {
  const { open, disabled, onToggle } = props;

  return (
    <button
      disabled={disabled}
      className={`notificare__push__web__desktop__lock-screen__expand-button ${open ? 'notificare__push__web__desktop__lock-screen__expand-button--rotated' : ''}`}
      onClick={onToggle}
      data-testid="web-desktop-expand-button"
    >
      <svg
        className="notificare__push__web__desktop__lock-screen__expand-button-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    </button>
  );
}
