import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Webshot.css';
import { getPushAPIHost } from '../../../../../config/api';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import Loading from '../Loading/Loading';
import PreviewError from '../PreviewError/PreviewError';

export default function Webshot({
  url,
  platform,
  width,
  height,
  notifyLoadingChange,
  canShow = true,
}: WebshotProps) {
  const { serviceKey } = useOptions().options;

  const [webshot, setWebshot] = useState('');
  const [status, setStatus] = useState<StatusState>({
    isLoading: true,
    hasError: false,
    error: '',
  });

  useEffect(() => {
    updateComponentStatus(true, false, setStatus, notifyLoadingChange);

    if (!serviceKey) {
      updateComponentStatus(
        false,
        true,
        setStatus,
        notifyLoadingChange,
        'The service key is missing.',
      );
      return;
    }

    if (!isValidUrl(url)) {
      updateComponentStatus(false, true, setStatus, notifyLoadingChange, 'The URL is invalid.');
      return;
    }

    let checkStatusLoop: NodeJS.Timeout;

    const debounce = setTimeout(async () => {
      try {
        const webshotId = await requestWebshot(url, width, height, platform, serviceKey);

        checkStatusLoop = setInterval(async () => {
          const webshotStatusData = await getWebshotStatusData(webshotId, serviceKey);

          if (webshotStatusData.status === 'error') {
            console.error('Webshot error:\n\n' + webshotStatusData.result);
            updateComponentStatus(false, true, setStatus, notifyLoadingChange);
            clearInterval(checkStatusLoop);
          } else if (webshotStatusData.status === 'finished') {
            const webshot = await getWebshot(webshotId, serviceKey);
            setWebshot(webshot);
            updateComponentStatus(false, false, setStatus, notifyLoadingChange);
            clearInterval(checkStatusLoop);
          }
        }, 3000);
      } catch (error) {
        console.error('Webshot error:\n\n' + error);
        updateComponentStatus(false, true, setStatus, notifyLoadingChange);
      }
    }, 3000);

    return () => {
      clearTimeout(debounce);
      clearInterval(checkStatusLoop);
    };
  }, [url]);

  return (
    <div className="notificare__push__webshot-background" style={{ width: width, height: height }}>
      {status.hasError ? (
        <PreviewError message={status.error} />
      ) : status.isLoading || !canShow ? (
        <Loading />
      ) : (
        <img src={webshot} alt="Webshot" data-testid="webshot" />
      )}
    </div>
  );
}

interface WebshotProps {
  url: string;
  platform: 'Android' | 'iOS' | 'Web';
  width: number;
  height: number;
  notifyLoadingChange?: Dispatch<SetStateAction<boolean>>;
  canShow?: boolean;
}

type StatusState = {
  isLoading: boolean;
  hasError: boolean;
  error: string;
};

/* Webshot requests */

async function requestWebshot(
  url: string,
  width: number,
  height: number,
  platform: 'Android' | 'iOS' | 'Web',
  serviceKey: string,
) {
  const response = await fetch(`${getPushAPIHost()}/webshot?apiKey=${serviceKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: url,
      delay: 3000,
      platform: platform,
      type: 'png',
      params: {
        width: width,
        height: height,
      },
    }),
  });

  const data = await response.json();
  return data.webshot.id;
}

async function getWebshotStatusData(id: string, serviceKey: string) {
  const response = await fetch(`${getPushAPIHost()}/webshot/${id}?apiKey=${serviceKey}`);
  const data = await response.json();
  return data.webshot;
}

async function getWebshot(id: string, serviceKey: string) {
  const response = await fetch(`${getPushAPIHost()}/webshot/${id}/result?apiKey=${serviceKey}`);

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

/* URL validation */

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/* Status update */

function updateComponentStatus(
  isLoading: boolean,
  hasError: boolean,
  setStatus: Dispatch<SetStateAction<StatusState>>,
  notifyLoadingChange?: Dispatch<SetStateAction<boolean>>,
  error?: string,
) {
  setStatus({ isLoading: isLoading, hasError: hasError, error: error || '' });
  notifyLoadingChange?.(isLoading);
  return;
}
