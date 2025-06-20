import { Key, useEffect, useRef, useState } from 'react';
import ExpandIcon from '~/assets/expand.svg';

import './Selector.css';
import { useOutsideClick } from '~/internal/hooks/outside-click';

export function Selector<T extends Key>({
  label,
  options,
  value,
  onValueChanged,
  disabled = false,
}: SelectorProps<T>) {
  const [expanded, setExpanded] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const selectorButtonRef = useRef<HTMLButtonElement>(null);

  const clickedOutside = useOutsideClick([optionsRef, selectorButtonRef]);

  useEffect(() => {
    setExpanded(false);
  }, [clickedOutside]);

  return (
    <div className="notificare__push__preview-controls-selector">
      <p className="notificare__push__preview-controls-selector-label">{label}</p>
      <button
        className="notificare__push__preview-controls-selector-button"
        onClick={() => setExpanded(!expanded)}
        disabled={disabled}
        ref={selectorButtonRef}
      >
        {options.find((option) => option.value === value)?.label}
        <ExpandIcon className="notificare__push__preview-controls-selector-button-expand-icon" />
      </button>

      {expanded && (
        <div className="notificare__push__preview-controls-selector-options" ref={optionsRef}>
          {options.map((option) => (
            <button
              key={option.value}
              className={`notificare__push__preview-controls-selector-option-button ${value === option.value ? 'notificare__push__preview-controls-selector-option-button--selected' : ''}`}
              onClick={() => {
                onValueChanged?.(option.value);
                setExpanded(false);
              }}
              data-testid={`selector-option-${option.value}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export interface SelectorProps<T> {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onValueChanged?: (value: T) => void;
  disabled?: boolean;
}
