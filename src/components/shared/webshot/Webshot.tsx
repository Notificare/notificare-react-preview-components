import { useEffect, useState } from 'react';
import './Webshot.css';
import { CONFIG } from '../../../../config';
import { isValidUrl } from '../../../helpers/isValidUrl';
import LoadingIcon from '../loading-icon/LoadingIcon';
import PreviewError from '../preview-error/PreviewError';

interface WebshotProps {
  url: string;
  platform: 'Android' | 'iOS';
  width: number;
  height: number;
  onLoadingChange?: (isLoading: boolean) => void;
  canShow?: boolean;
}

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

export default function Webshot(props: WebshotProps) {
  const { url, platform, width, height, onLoadingChange, canShow = true } = props;

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
