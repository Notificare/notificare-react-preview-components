import { useEffect, useState } from 'react';
import './Webshot.css';
import { CONFIG } from '../../../../../../config';
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
  const [webshot, setWebshot] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    onLoadingChange?.(true);
    setHasError(false);

    if (!isValidUrl(url)) {
      setHasError(true);
      setIsLoading(false);
      onLoadingChange?.(false);
      return;
    }

    let checkStatusLoop: NodeJS.Timeout;

    const debounce = setTimeout(async () => {
      try {
        const webshotId = await requestWebshot(url, width, height, platform);

        checkStatusLoop = setInterval(async () => {
          const webshotStatus = await getWebshotStatus(webshotId);

          if (webshotStatus === 'error') {
            setHasError(true);
            setIsLoading(false);
            onLoadingChange?.(false);
            clearInterval(checkStatusLoop);
          } else if (webshotStatus === 'finished') {
            const webshot = await getWebshot(webshotId);
            setWebshot(webshot);
            setIsLoading(false);
            onLoadingChange?.(false);
            clearInterval(checkStatusLoop);
          }
        }, 3000);
      } catch {
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
    <div className="notificare__webshot-background" style={{ width: width, height: height }}>
      {hasError ? (
        <PreviewError />
      ) : isLoading || !canShow ? (
        <LoadingIcon />
      ) : (
        <img src={webshot} alt="Webshot" />
      )}
    </div>
  );
}

interface WebshotProps {
  url: string;
  platform: 'Android' | 'iOS';
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
) {
  const response = await fetch(`https://push-test.notifica.re/webshot?apiKey=${CONFIG.API_KEY}`, {
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

async function getWebshotStatus(id: string) {
  const response = await fetch(
    `https://push-test.notifica.re/webshot/${id}?apiKey=${CONFIG.API_KEY}`,
  );

  const data = await response.json();
  return data.webshot.status;
}

async function getWebshot(id: string) {
  const response = await fetch(
    `https://push-test.notifica.re/webshot/${id}/result?apiKey=${CONFIG.API_KEY}`,
  );

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
