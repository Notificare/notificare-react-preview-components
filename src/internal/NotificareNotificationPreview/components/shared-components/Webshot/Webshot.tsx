import { useEffect, useState } from 'react';
import './Webshot.css';
import { getPushAPIHost } from '../../../../../config/api';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import PreviewError from '../PreviewError/PreviewError';

export default function Webshot({
  url,
  platform,
  width,
  height,
  onLoadingChange,
  canShow = true,
}: WebshotProps) {
  const { serviceKey } = useOptions().options;

  const [webshot, setWebshot] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!serviceKey) {
      setHasError(true);
      console.error('The service key is missing');
      return;
    }

    if (!isValidUrl(url)) {
      setHasError(true);
      console.error('The URL is invalid');
      return;
    }

    setIsLoading(true);
    onLoadingChange?.(true);
    setHasError(false);

    let checkStatusLoop: NodeJS.Timeout;

    const debounce = setTimeout(async () => {
      try {
        const webshotId = await requestWebshot(url, width, height, platform, serviceKey);

        checkStatusLoop = setInterval(async () => {
          const webshotStatus = await getWebshotStatus(webshotId, serviceKey);

          if (webshotStatus === 'error') {
            setHasError(true);
            setIsLoading(false);
            onLoadingChange?.(false);
            clearInterval(checkStatusLoop);
          } else if (webshotStatus === 'finished') {
            const webshot = await getWebshot(webshotId, serviceKey);
            setWebshot(webshot);
            setIsLoading(false);
            onLoadingChange?.(false);
            clearInterval(checkStatusLoop);
          }
        }, 3000);
      } catch (error) {
        console.error(error);
        setHasError(true);
        setIsLoading(false);
        onLoadingChange?.(false);
      }
    }, 3000);

    return () => {
      clearTimeout(debounce);
      clearInterval(checkStatusLoop);
    };
  }, [url]);

  return (
    <div className="notificare__push__webshot-background" style={{ width: width, height: height }}>
      {hasError ? (
        <PreviewError />
      ) : isLoading || !canShow ? (
        <LoadingIcon />
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
  onLoadingChange?: (isLoading: boolean) => void;
  canShow?: boolean;
}

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

async function getWebshotStatus(id: string, serviceKey: string) {
  const response = await fetch(`${getPushAPIHost()}/webshot/${id}?apiKey=${serviceKey}`);
  const data = await response.json();
  return data.webshot.status;
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
