import { useEffect, useState } from 'react';
import './Webshot.css';
import CONFIG from '../../../../config';
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

async function getWebshot(url: string, width: number, height: number, platform: string) {
  try {
    const response = await fetch(
      `/api/v2/webshot?application=${CONFIG.APPLICATION}&url=${url}&width=${width}&height=${height}&platform=${platform}&delay=3000`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${CONFIG.TOKEN}`,
        },
      },
    );

    const data = await response.json();
    return data.image;
  } catch (error) {
    console.error('Webshot error: ', error);
    return '';
  }
}

export default function Webshot(props: WebshotProps) {
  const { url, platform, width, height, onLoadingChange, canShow = true } = props;

  const [hasError, setHasError] = useState(false);
  const [pageImage, setPageImage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const image = await getWebshot(url, width, height, platform);
      setPageImage(image);

      if (!image) {
        setHasError(true);
      }

      setIsLoading(false);
      onLoadingChange?.(false);
    })();
  }, [url]);

  return (
    <div className="notificare__webshot-background" style={{ width: width, height: height }}>
      {hasError ? (
        <PreviewError />
      ) : isLoading || !canShow ? (
        <LoadingIcon />
      ) : (
        <img src={`data:image/png;base64,${pageImage}`} alt="Webshot" />
      )}
    </div>
  );
}
