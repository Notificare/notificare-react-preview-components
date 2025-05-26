import './Selector.css';
import { useEffect, useRef, useState } from 'react';
import ExpandIcon from '../../../../../assets/expand.svg';

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
      <div className="notificare__push__preview-controls-selector">
        <p className="notificare__push__preview-controls-selector-label">Variant</p>
        <button
          className="notificare__push__preview-controls-selector-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {options.find((option) => option.key === selected)?.label}
          <ExpandIcon className="notificare__push__preview-controls-selector-button-expand-icon" />
        </button>

        {isExpanded && (
          <div className="notificare__push__preview-controls-selector-options" ref={optionsRef}>
            {options.map((option) => (
              <button
                key={option.key}
                className={`notificare__push__preview-controls-selector-option-button ${selected === option.key ? 'notificare__push__preview-controls-selector-option-button--selected' : ''}`}
                onClick={() => {
                  setSelected(option.key);
                  setIsExpanded(false);
                }}
                data-testid={`selector-option-${option.key}`}
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
