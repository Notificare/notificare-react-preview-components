import { useRef, useEffect } from 'react';

export function useIsFirstRender() {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
}
