import { Fragment, Key, ReactNode } from 'react';

import './ToggleGroup.css';

export function ToggleGroup<T extends Key>({
  label,
  options,
  value,
  onValueChanged,
}: ToggleGroupProps<T>) {
  return (
    <div className="notificare__toggle-group__wrapper">
      <p className="notificare__toggle-group__label">{label}</p>
      <div className="notificare__toggle-group__options">
        {options.map((option, index) => (
          <Fragment key={option.value}>
            <button
              className={`notificare__toggle-group__option-button ${value === option.value ? 'notificare__toggle-group__option-button--selected' : ''}`}
              onClick={() => onValueChanged(option.value)}
              aria-label={`Button with option '${option.value}'`}
              data-testid={`toggle-group-option-${option.value}`}
            >
              <div
                className={`notificare__toggle-group__option-button-icon ${value === option.value ? 'notificare__toggle-group__option-button-icon--selected' : ''}`}
              >
                {option.icon}
              </div>
            </button>
            {index !== options.length - 1 && <div className="notificare__toggle-group__border" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export interface ToggleGroupProps<T> {
  label: string;
  options: { value: T; icon: ReactNode }[];
  value: T;
  onValueChanged: (value: T) => void;
}
