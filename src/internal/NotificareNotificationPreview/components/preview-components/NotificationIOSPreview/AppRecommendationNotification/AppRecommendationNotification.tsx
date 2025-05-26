import './AppRecommendationNotification.css';
import { useEffect, useState } from 'react';
import LayerGroupIcon from '../../../../../../assets/layer-group.svg';
import UserIcon from '../../../../../../assets/user.svg';
import { AppStoreApp } from '../../../../models/app-store-app';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import Loading from '../../../shared-components/Loading/Loading';
import PreviewError from '../../../shared-components/PreviewError/PreviewError';
import StarRating from './StarRating/StarRating';

export default function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const content = notification.content[0];

  const [hasError, setHasError] = useState(false);
  const [appStoreData, setAppStoreData] = useState<AppStoreApp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      if (content.type === 're.notifica.content.AppStore' && typeof content.data !== 'string') {
        try {
          const response = await fetch(
            `https://itunes.apple.com/lookup?country=GB&id=${content.data.identifier}`,
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
    <div data-testid="ios-app-ui-app-recommendation-notification">
      <div className="notificare__push__ios__store__app-ui__bar">Done</div>
      <div className="notificare__push__ios__store__app-ui">
        {hasError ? (
          <PreviewError />
        ) : isLoading ? (
          <Loading />
        ) : (
          appStoreData && (
            <div className="notificare__push__ios__store__app-ui__page">
              <div className="notificare__push__ios__store__app-ui__page-header">
                <img
                  src={appStoreData.results[0].artworkUrl512}
                  className="notificare__push__ios__store__app-ui__app-icon"
                  alt="App icon"
                />
                <div className="notificare__push__ios__store__app-ui__page-app-info">
                  <div>
                    <p className="notificare__push__ios__store__app-ui__page-app-name">
                      {appStoreData.results[0].trackName}
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-app-category">
                      {appStoreData.results[0].primaryGenreName}
                    </p>
                  </div>
                  <div className="notificare__push__ios__store__app-ui__page-install">Install</div>
                </div>
              </div>

              <div className="notificare__push__ios__store__app-ui__page-other-app-info-wrapper">
                <div className="notificare__push__ios__store__app-ui__page-other-app-info">
                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      {formatNumber(appStoreData.results[0].userRatingCount)} RATINGS
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                      {appStoreData.results[0].averageUserRating.toFixed(1)}
                    </p>

                    <StarRating rating={appStoreData.results[0].averageUserRating} />
                  </div>

                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      AGE
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                      {appStoreData.results[0].trackContentRating}
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                      Years Old
                    </p>
                  </div>
                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      CATEGORY
                    </p>
                    <LayerGroupIcon className="notificare__push__ios__store__app-ui__page-info-block-icon" />
                    <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                      {appStoreData.results[0].primaryGenreName}
                    </p>
                  </div>
                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      DEVELOPER
                    </p>
                    <UserIcon className="notificare__push__ios__store__app-ui__page-info-block-icon" />
                    <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                      {appStoreData.results[0].sellerName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="notificare__push__ios__store__app-ui__page-history">
                <p className="notificare__push__ios__store__app-ui__page-history-title">
                  What&#39;s New
                </p>
                <div className="notificare__push__ios__store__app-ui__page-history-version-last-update">
                  <p className="notificare__push__ios__store__app-ui__page-history-version">
                    Version {appStoreData.results[0].version}
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-history-last-update">
                    {timeAgo(appStoreData.results[0].currentVersionReleaseDate)}
                  </p>
                </div>
                <p className="notificare__push__ios__store__app-ui__page-history-notes">
                  {appStoreData.results[0].releaseNotes}
                </p>
              </div>

              <div className="notificare__push__ios__store__app-ui__page-previews">
                <p className="notificare__push__ios__store__app-ui__page-previews-title">Preview</p>
                <div className="notificare__push__ios__store__app-ui__page-previews-images">
                  <img
                    src={appStoreData.results[0].screenshotUrls[0]}
                    className="notificare__push__ios__store__app-ui__page-preview-image"
                    alt="App preview"
                  />
                  <img
                    src={appStoreData.results[0].screenshotUrls[1]}
                    className="notificare__push__ios__store__app-ui__page-preview-image"
                    alt="App preview"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

interface AppRecommendationNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Store' }>;
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
