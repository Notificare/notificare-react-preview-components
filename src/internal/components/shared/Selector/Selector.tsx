import { Key, useRef, useState } from 'react';
import ExpandIcon from '~/assets/expand.svg';
import { ClickOutside } from '~/internal/components/shared/ClickOutside/ClickOutside';

import './Selector.css';

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

  return (
    <div className="notificare__selector__wrapper">
      <p className="notificare__selector__label">{label}</p>
      <ClickOutside onClickOutside={() => setExpanded(false)}>
        <button
          className="notificare__selector__button"
          onClick={() => setExpanded(!expanded)}
          disabled={disabled}
          ref={selectorButtonRef}
        >
          {options.find((option) => option.value === value)?.label}
          <ExpandIcon className="notificare__selector__button-expand-icon" />
        </button>

        {expanded && (
          <div className="notificare__selector__options" ref={optionsRef}>
            {options.map((option) => (
              <button
                key={option.value}
                className={`notificare__selector__option-button ${value === option.value ? 'notificare__push__preview-controls-selector-option-button--selected' : ''}`}
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
      </ClickOutside>
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
