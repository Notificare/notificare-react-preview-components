import { Key, useEffect, useRef, useState } from 'react';
import ExpandIcon from '~/assets/expand.svg';

import './Selector.css';

export function Selector<T extends Key>({
  label,
  options,
  value,
  onValueChanged,
  disabled = false,
}: SelectorProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  // TODO: refactor to a separate ClickOutside component.
  useEffect(function closeSelectorWhenClickingOutside() {
    function handleClickOutside(event: MouseEvent) {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // TODO: you should always return an element inside a component. even if it's a fragment.
  if (options.length > 0) {
    return (
      <div className="notificare__selector__wrapper">
        <p className="notificare__selector__label">{label}</p>
        <button
          className="notificare__selector__button"
          onClick={() => setIsExpanded(!isExpanded)}
          disabled={disabled}
        >
          {options.find((option) => option.value === value)?.label}
          <ExpandIcon className="notificare__selector__button-expand-icon" />
        </button>

        {isExpanded && (
          <div className="notificare__selector__options" ref={optionsRef}>
            {options.map((option) => (
              <button
                key={option.value}
                className={`notificare__selector__option-button ${value === option.value ? 'notificare__push__preview-controls-selector-option-button--selected' : ''}`}
                onClick={() => {
                  onValueChanged?.(option.value);
                  setIsExpanded(false);
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
}

export interface SelectorProps<T> {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onValueChanged?: (value: T) => void;
  disabled?: boolean;
}
