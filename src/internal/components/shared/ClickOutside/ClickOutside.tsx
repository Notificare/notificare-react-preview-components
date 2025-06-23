import { PropsWithChildren, useEffect, useRef } from 'react';

export function ClickOutside({ onClickOutside, children }: PropsWithChildren<ClickOutsideProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
}

export interface ClickOutsideProps {
  onClickOutside: () => void;
}
