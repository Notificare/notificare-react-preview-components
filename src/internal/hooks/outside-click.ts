import { useEffect, RefObject } from 'react';

export function useOutsideClick({ refs, onClickOutside }: OutsideClickParams) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOutside = refs.every((ref) => {
        return !ref.current || !ref.current.contains(event.target as Node);
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

export type OutsideClickParams = {
  refs: RefObject<HTMLElement | null>[];
  onClickOutside: () => void;
};
