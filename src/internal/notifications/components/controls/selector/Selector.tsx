import './Selector.css';
import { useEffect, useRef, useState } from 'react';

export default function Selector<T extends string | undefined>({
  options,
  selected,
  setSelected,
}: SelectorProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsExpanded(false);

    if (!options.find((option) => option.key === selected) || !selected) {
      setSelected(options[0].key);
    }
  }, []);

  useEffect(() => {
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

  if (options.length > 0) {
    return (
      <div className="notificare__preview-controls-selector">
        <button
          className="notificare__preview-controls-selector-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {options.find((option) => option.key === selected)?.label}
          <svg
            className="notificare__preview-controls-selector-button-expand-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>

        {isExpanded && (
          <div className="notificare__preview-controls-selector-options" ref={optionsRef}>
            {options.map((option) => (
              <button
                key={option.key}
                className={`notificare__preview-controls-selector-option-button ${selected === option.key && 'notificare__preview-controls-selector-option-button--selected'}`}
                onClick={() => {
                  setSelected(option.key);
                  setIsExpanded(false);
                }}
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

interface SelectorProps<T> {
  options: { key: T; label: string }[];
  selected: T;
  setSelected: (value: T) => void;
}
