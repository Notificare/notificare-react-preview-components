import { Dispatch, Fragment, ReactNode, SetStateAction, useEffect } from 'react';
import './ToggleGroup.css';

export default function ToggleGroup<T extends string | undefined>({
  label,
  options,
  selected,
  setSelected,
}: NewToggleGroupProps<T>) {
  useEffect(function selectDefaultOption() {
    if (!selected) {
      setSelected(options[0].key);
    }
  }, []);

  return (
    <div className="notificare__push__preview-controls-toggle-group">
      <p className="notificare__push__preview-controls-toggle-group-label"> {label} </p>
      <div className="notificare__push__preview-controls-toggle-group-options">
        {options.map((option, index) => (
          <Fragment key={option.key}>
            <button
              className={`notificare__push__preview-controls-toggle-group-option ${selected === option.key ? 'notificare__push__preview-controls-toggle-group-option--selected' : ''}`}
              onClick={() => setSelected(option.key)}
              aria-label={`Button with option '${option.key}'`}
              data-testid={`toggle-option-${option.key}`}
            >
              <div
                className={`notificare__push__preview-controls-toggle-group-option-icon ${selected === option.key ? 'notificare__push__preview-controls-toggle-group-option-icon--selected' : ''}`}
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

interface NewToggleGroupProps<T> {
  label: string;
  options: { key: T; icon: ReactNode }[];
  selected: T;
  setSelected: Dispatch<SetStateAction<T>>;
}
