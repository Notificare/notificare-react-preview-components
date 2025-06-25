import { Key, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();

  const [expanded, setExpanded] = useState(false);
  const [currentOptionLabel, setCurrentOptionLabel] = useState<string>(loadDefaultOptionLabel);
  const optionsRef = useRef<HTMLDivElement>(null);
  const selectorButtonRef = useRef<HTMLButtonElement>(null);

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

  useOutsideClick({
    refs: [optionsRef, selectorButtonRef],
    onClickOutside: () => setExpanded(false),
  });

  return (
    <div className="notificare__selector__wrapper">
      <p className="notificare__selector__label">{label}</p>

      <button
        className="notificare__selector__button"
        onClick={() => setExpanded(!expanded)}
        disabled={disabled}
        ref={selectorButtonRef}
      >
        {currentOptionLabel}
        <ExpandIcon className="notificare__selector__button-expand-icon" />
      </button>

      {expanded && (
        <div className="notificare__selector__options" ref={optionsRef}>
          {options.map((option) => (
            <button
              key={option.value}
              className={`notificare__selector__option-button ${value === option.value ? 'notificare__selector__option-button--selected' : ''}`}
              onClick={() => {
                onValueChanged?.(option.value);
                setExpanded(false);
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

export interface SelectorProps<T> {
  label: string;
  options: { value: T; label: string; translateLabel?: boolean }[];
  value: T;
  onValueChanged?: (value: T) => void;
  disabled?: boolean;
}
