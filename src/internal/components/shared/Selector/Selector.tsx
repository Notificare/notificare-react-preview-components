import { Key, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import ExpandIcon from '~/assets/expand.svg';

import './Selector.css';

export function Selector<T extends Key>({
  label,
  options,
  value,
  onValueChanged,
  disabled = false,
}: SelectorProps<T>) {
  const intl = useIntl();

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentOptionLabel, setCurrentOptionLabel] = useState<string>(loadDefaultOptionLabel);
  const optionsRef = useRef<HTMLDivElement>(null);

  function loadDefaultOptionLabel() {
    const option = options.find((option) => option.value === value);

    if (!option) {
      throw new Error(`Value "${String(value)}" not found in the Selector options.`);
    }

    return loadOptionLabel(option.label, option.translateLabel);
  }

  function loadOptionLabel(label: string, translate?: boolean) {
    return translate ? intl.formatMessage({ id: label }) : label;
  }

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
      <div className="notificare__push__preview-controls-selector">
        <p className="notificare__push__preview-controls-selector-label">{label}</p>
        <button
          className="notificare__push__preview-controls-selector-button"
          onClick={() => setIsExpanded(!isExpanded)}
          disabled={disabled}
        >
          {currentOptionLabel}
          <ExpandIcon className="notificare__push__preview-controls-selector-button-expand-icon" />
        </button>

        {isExpanded && (
          <div className="notificare__push__preview-controls-selector-options" ref={optionsRef}>
            {options.map((option) => (
              <button
                key={option.value}
                className={`notificare__push__preview-controls-selector-option-button ${value === option.value ? 'notificare__push__preview-controls-selector-option-button--selected' : ''}`}
                onClick={() => {
                  onValueChanged?.(option.value);
                  setIsExpanded(false);
                  setCurrentOptionLabel(loadOptionLabel(option.label, option.translateLabel));
                }}
                data-testid={`selector-option-${option.value}`}
              >
                {loadOptionLabel(option.label, option.translateLabel)}
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
  options: { value: T; label: string; translateLabel?: boolean }[];
  value: T;
  onValueChanged?: (value: T) => void;
  disabled?: boolean;
}
