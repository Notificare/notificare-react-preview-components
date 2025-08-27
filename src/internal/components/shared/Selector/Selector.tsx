import { Key, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import ExpandIcon from '~/assets/expand.svg';
import { useOutsideClick } from '~/internal/hooks';

import './Selector.css';

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

    return intl.formatMessage({ id: option.labelId, defaultMessage: option.defaultLabel });
  }

  useOutsideClick({
    refs: [optionsRef, selectorButtonRef],
    onClickOutside: () => {
      setExpanded(false);
    },
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
                setCurrentOptionLabel(
                  intl.formatMessage({ id: option.labelId, defaultMessage: option.defaultLabel }),
                );
              }}
              data-testid={`selector-option-${option.value.toString()}`}
            >
              {intl.formatMessage({ id: option.labelId, defaultMessage: option.defaultLabel })}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export interface SelectorProps<T> {
  label: string;
  options: { value: T; labelId: string; defaultLabel: string }[];
  value: T;
  onValueChanged?: (value: T) => void;
  disabled?: boolean;
}
