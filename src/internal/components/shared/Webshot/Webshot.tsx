import { useEffect } from 'react';
import { Loading } from '~/internal/components/shared/Loading/Loading';
import { PreviewError } from '~/internal/components/shared/PreviewError/PreviewError';
import { useWebshotRequest } from '~/internal/components/shared/Webshot/hooks';

import './Webshot.css';

export function Webshot({
  url,
  platform,
  width,
  height,
  onLoadingChanged,
  canShow = true,
}: WebshotProps) {
  const state = useWebshotRequest({ url, platform, width, height });

  useEffect(
    function dispatchLoadingChange() {
      switch (state.status) {
        case 'idle':
        case 'loading':
          onLoadingChanged?.(true);
          break;
        case 'success':
        case 'error':
          onLoadingChanged?.(false);
          break;
      }
    },
    [state],
  );

  return (
    <div className="notificare__webshot__wrapper" style={{ width: width, height: height }}>
      {state.status === 'loading' && <Loading />}

      {state.status === 'success' && canShow && (
        <img src={state.data} alt="Webshot" data-testid="webshot" />
      )}

      {state.status === 'error' && <PreviewError message={state.error.message} />}
    </div>
  );
}

export interface WebshotProps {
  url: string;
  platform: 'Android' | 'iOS' | 'Web';
  width: number;
  height: number;
  onLoadingChanged?: (loading: boolean) => void;
  canShow?: boolean;
}
