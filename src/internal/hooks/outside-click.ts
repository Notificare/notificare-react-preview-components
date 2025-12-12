import { useEffect, RefObject } from 'react';

export function useOutsideClick({ refs, onClickOutside }: OutsideClickParams) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOutside = refs.every((ref) => {
        return !ref.current?.contains(event.target as Node);
      });

      if (isOutside) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs]);
}

export interface OutsideClickParams {
  refs: RefObject<HTMLElement | null>[];
  onClickOutside: () => void;
}
