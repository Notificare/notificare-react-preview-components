import { Fragment, Key, ReactNode } from 'react';

import './ToggleGroup.css';

export function ToggleGroup<T extends Key>({
  label,
  options,
  value,
  onValueChanged,
}: ToggleGroupProps<T>) {
  return (
    <div className="notificare__push__preview-controls-toggle-group">
      <p className="notificare__push__preview-controls-toggle-group-label">{label}</p>
      <div className="notificare__push__preview-controls-toggle-group-options">
        {options.map((option, index) => (
          <Fragment key={option.value}>
            <button
              className={`notificare__push__preview-controls-toggle-group-option ${value === option.value ? 'notificare__push__preview-controls-toggle-group-option--selected' : ''}`}
              onClick={() => onValueChanged(option.value)}
              aria-label={`Button with option '${option.value}'`}
              data-testid={`toggle-option-${option.value}`}
            >
              <div
                className={`notificare__push__preview-controls-toggle-group-option-icon ${value === option.value ? 'notificare__push__preview-controls-toggle-group-option-icon--selected' : ''}`}
              >
                {option.icon}
              </div>
            </button>
            {index !== options.length - 1 && (
              <div className="notificare__push__preview-controls-toggle-group-divisor" />
            )}
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
