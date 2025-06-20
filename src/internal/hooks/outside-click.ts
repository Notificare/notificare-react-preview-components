import { useEffect, RefObject, useState } from 'react';

export function useOutsideClick(refs: RefObject<HTMLElement | null>[]) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOutside = refs.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      setClickedOutside(isOutside);
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs]);

  return clickedOutside;
}
