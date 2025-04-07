import { ReactNode, useEffect } from 'react';
import './ToggleGroup.css';

export default function ToggleGroup<T extends string | undefined>({
  label,
  options,
  selected,
  setSelected,
}: NewToggleGroupProps<T>) {
  useEffect(() => {
    if (!selected) {
      setSelected(options[0].key);
    }
  }, []);

  return (
    <div className="notificare__preview-controls-toggle-group">
      <p className="notificare__preview-controls-toggle-group-label"> {label} </p>
      <div className="notificare__preview-controls-toggle-group-options">
        {options.map((option, index) => (
          <>
            <button
              key={option.key}
              className={`notificare__preview-controls-toggle-group-option ${selected === option.key && 'notificare__preview-controls-toggle-group-option--selected'}`}
              onClick={() => setSelected(option.key)}
              aria-label={`Button with option '${option.key}'`}
              data-testid={`toggle-option-${option.key}`}
            >
              <div
                className={`notificare__preview-controls-toggle-group-option-icon ${selected === option.key && 'notificare__preview-controls-toggle-group-option-icon--selected'}`}
              >
                {option.icon}
              </div>
            </button>
            {index !== options.length - 1 && (
              <div className="notificare__preview-controls-toggle-group-divisor" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

interface NewToggleGroupProps<T> {
  label: string;
  options: { key: T; icon: ReactNode }[];
  selected: T;
  setSelected: (value: T) => void;
}
