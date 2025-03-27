import { useEffect, useState } from 'react';
import './AppRecommendation.css';
import { AppStoreResponse } from '../../../../../models/app-store-response';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import LoadingIcon from '../../../../shared-components/loading-icon/LoadingIcon';
import PreviewError from '../../../../shared-components/preview-error/PreviewError';
import StarRating from '../star-rating/StarRating';

export default function AppRecommendation(props: AppRecommendationProps) {
  const { content } = props;

  const [hasError, setHasError] = useState(false);
  const [appStoreData, setAppStoreData] = useState<AppStoreResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      if (content.type === 're.notifica.content.AppStore' && typeof content.data !== 'string') {
        try {
          const response = await fetch(
            `/api/v2/proxy/?url=https%3A%2F%2Fitunes.apple.com/lookup?country%3DGB%26id%3D${content.data.identifier}`,
          );

          const data = await response.json();
          setAppStoreData(data);

          if (appStoreData?.resultCount === 0) {
            setHasError(true);
          }
        } catch {
          setHasError(true);
        }
      } else {
        setHasError(true);
      }

      setIsLoading(false);
    })();
  }, [content.data]);

  return (
    <div className="notificare__ios-app-push-ui-app-recommendation">
      {hasError ? (
        <PreviewError />
      ) : isLoading ? (
        <LoadingIcon />
      ) : (
        appStoreData && (
          <div className="notificare__ios-app-push-ui-app-recommendation-page">
            <div className="notificare__ios-app-push-ui-app-recommendation-page-header">
              <img
                src={appStoreData.results[0].artworkUrl512}
                className="notificare__ios-app-push-ui-app-recommendation-app-icon"
                alt="App icon"
              />
              <div className="notificare__ios-app-push-ui-app-recommendation-page-app-info">
                <div>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-app-name">
                    {appStoreData.results[0].trackName}
                  </p>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-app-category">
                    {appStoreData.results[0].primaryGenreName}
                  </p>
                </div>
                <div className="notificare__ios-app-push-ui-app-recommendation-page-install">
                  Install
                </div>
              </div>
            </div>

            <div className="notificare__ios-app-push-ui-app-recommendation-page-other-app-info-wrapper">
              <div className="notificare__ios-app-push-ui-app-recommendation-page-other-app-info">
                <div className="notificare__ios-app-push-ui-app-recommendation-page-info-block">
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-title">
                    {formatNumber(appStoreData.results[0].userRatingCount)} RATINGS
                  </p>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-value">
                    {appStoreData.results[0].averageUserRating.toFixed(1)}
                  </p>

                  <StarRating rating={appStoreData.results[0].averageUserRating} />
                </div>

                <div className="notificare__ios-app-push-ui-app-recommendation-page-info-block">
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-title">
                    AGE
                  </p>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-value">
                    {appStoreData.results[0].trackContentRating}
                  </p>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-bottom-text">
                    Years Old
                  </p>
                </div>
                <div className="notificare__ios-app-push-ui-app-recommendation-page-info-block">
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-title">
                    CATEGORY
                  </p>
                  <svg
                    className="notificare__ios-app-push-ui-app-recommendation-page-info-block-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                  </svg>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-bottom-text">
                    {appStoreData.results[0].primaryGenreName}
                  </p>
                </div>
                <div className="notificare__ios-app-push-ui-app-recommendation-page-info-block">
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-title">
                    DEVELOPER
                  </p>
                  <svg
                    className="notificare__ios-app-push-ui-app-recommendation-page-info-block-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                  </svg>
                  <p className="notificare__ios-app-push-ui-app-recommendation-page-info-block-bottom-text">
                    {appStoreData.results[0].sellerName}
                  </p>
                </div>
              </div>
            </div>

            <div className="notificare__ios-app-push-ui-app-recommendation-page-history">
              <p className="notificare__ios-app-push-ui-app-recommendation-page-history-title">
                What&#39;s New
              </p>
              <div className="notificare__ios-app-push-ui-app-recommendation-page-history-version-last-update">
                <p className="notificare__ios-app-push-ui-app-recommendation-page-history-version">
                  Version {appStoreData.results[0].version}
                </p>
                <p className="notificare__ios-app-push-ui-app-recommendation-page-history-last-update">
                  {timeAgo(appStoreData.results[0].currentVersionReleaseDate)}
                </p>
              </div>
              <p className="notificare__ios-app-push-ui-app-recommendation-page-history-notes">
                {appStoreData.results[0].releaseNotes}
              </p>
            </div>

            <div className="notificare__ios-app-push-ui-app-recommendation-page-previews">
              <p className="notificare__ios-app-push-ui-app-recommendation-page-previews-title">
                Preview
              </p>
              <div className="notificare__ios-app-push-ui-app-recommendation-page-previews-images">
                <img
                  src={appStoreData.results[0].screenshotUrls[0]}
                  className="notificare__ios-app-push-ui-app-recommendation-page-preview-image"
                  alt="App preview"
                />
                <img
                  src={appStoreData.results[0].screenshotUrls[1]}
                  className="notificare__ios-app-push-ui-app-recommendation-page-preview-image"
                  alt="App preview"
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

interface AppRecommendationProps {
  content: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Store' }
  >['content'][number];
}

function timeAgo(isoDate: string) {
  const date = new Date(isoDate);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { value: number; label: string }[] = [
    { value: 60, label: 'second' },
    { value: 60 * 60, label: 'minute' },
    { value: 60 * 60 * 24, label: 'hour' },
    { value: 60 * 60 * 24 * 7, label: 'day' },
    { value: 60 * 60 * 24 * 30, label: 'week' },
    { value: 60 * 60 * 24 * 365, label: 'month' },
    { value: Infinity, label: 'year' },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const { value, label } = intervals[i];
    if (diffInSeconds < value) {
      const count = Math.floor(diffInSeconds / (intervals[i - 1]?.value || 1));
      return count <= 1 ? `a ${label} ago` : `${count} ${label}s ago`;
    }
  }

  return 'a long time ago';
}

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  }
  return num.toString();
}
