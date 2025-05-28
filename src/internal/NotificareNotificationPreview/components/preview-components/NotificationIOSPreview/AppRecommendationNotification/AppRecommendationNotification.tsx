import './AppRecommendationNotification.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import LayerGroupIcon from '../../../../../../assets/layer-group.svg';
import UserIcon from '../../../../../../assets/user.svg';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import Loading from '../../../shared-components/Loading/Loading';
import PreviewError from '../../../shared-components/PreviewError/PreviewError';
import StarRating from './StarRating/StarRating';

export default function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const content = notification.content[0];

  const [status, setStatus] = useState<StatusState>({
    isLoading: true,
    hasError: false,
    error: '',
  });
  const [appStoreData, setAppStoreData] = useState<AppStoreApp>();

  useEffect(
    function loadAppData() {
      (async () => {
        updateComponentStatus(true, false, setStatus);

        if (content.type === 're.notifica.content.AppStore') {
          try {
            const url = new URL('/lookup', 'https://itunes.apple.com');
            url.searchParams.set('country', 'GB');
            url.searchParams.set('id', content.data.identifier);

            const response = await fetch(url);

            const data = await response.json();

            if (data.resultCount === 0) {
              updateComponentStatus(
                false,
                true,
                setStatus,
                'The app was not found. Check the identifier and try again.',
              );
            } else {
              setAppStoreData(data);
              updateComponentStatus(false, false, setStatus);
            }
          } catch (error) {
            console.error('Error while trying to get the app information:\n\n', error);
            updateComponentStatus(false, true, setStatus, 'Check console for more details.');
          }
        } else {
          updateComponentStatus(false, true, setStatus);
        }
      })();
    },
    [content.data],
  );

  return (
    <div data-testid="ios-app-ui-app-recommendation-notification">
      <div className="notificare__push__ios__store__app-ui__bar">Done</div>
      <div className="notificare__push__ios__store__app-ui">
        {status.hasError ? (
          <PreviewError message={status.error} />
        ) : status.isLoading ? (
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

type StatusState = {
  isLoading: boolean;
  hasError: boolean;
  error: string;
};

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

type AppStoreApp = {
  resultCount: number;
  results: AppStoreAppData[];
};

type AppStoreAppData = {
  artworkUrl512: string;
  screenshotUrls: string[];
  averageUserRating: number;
  sellerName: string;
  trackName: string;
  primaryGenreName: string;
  currentVersionReleaseDate: string;
  releaseNotes: string;
  version: string;
  trackContentRating: string;
  userRatingCount: number;
};

/* Status update */

function updateComponentStatus(
  isLoading: boolean,
  hasError: boolean,
  setStatus: Dispatch<SetStateAction<StatusState>>,
  error?: string,
) {
  setStatus({ isLoading: isLoading, hasError: hasError, error: error || '' });
  return;
}
