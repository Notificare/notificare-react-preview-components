import LayerGroupIcon from '~/assets/layer-group.svg';
import UserIcon from '~/assets/user.svg';
import { useStoreRequest } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/hooks';
import { Loading } from '~/internal/components/shared/Loading/Loading';
import { PreviewError } from '~/internal/components/shared/PreviewError/PreviewError';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { StarRating } from './StarRating/StarRating';

import './AppRecommendationNotification.css';

export function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const contentList = notification.content;

  const state = useStoreRequest({ contentList });

  return (
    <div data-testid="ios-app-ui-app-recommendation-notification">
      <div className="notificare__push__ios__store__app-ui__bar">Done</div>
      <div className="notificare__push__ios__store__app-ui">
        {state.status === 'loading' && <Loading />}

        {state.status === 'error' && <PreviewError message={state.error.message} />}

        {state.status === 'success' && (
          <div className="notificare__push__ios__store__app-ui__page">
            <div className="notificare__push__ios__store__app-ui__page-header">
              <img
                src={state.data.artworkUrl512}
                className="notificare__push__ios__store__app-ui__app-icon"
                alt="App icon"
              />
              <div className="notificare__push__ios__store__app-ui__page-app-info">
                <div>
                  <p className="notificare__push__ios__store__app-ui__page-app-name">
                    {state.data.trackName}
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-app-category">
                    {state.data.primaryGenreName}
                  </p>
                </div>
                <div className="notificare__push__ios__store__app-ui__page-install">Install</div>
              </div>
            </div>

            <div className="notificare__push__ios__store__app-ui__page-other-app-info-wrapper">
              <div className="notificare__push__ios__store__app-ui__page-other-app-info">
                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                    {formatNumber(state.data.userRatingCount)} RATINGS
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                    {state.data.averageUserRating.toFixed(1)}
                  </p>

                  <StarRating rating={state.data.averageUserRating} />
                </div>

                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">AGE</p>
                  <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                    {state.data.trackContentRating}
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
                    {state.data.primaryGenreName}
                  </p>
                </div>
                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                    DEVELOPER
                  </p>
                  <UserIcon className="notificare__push__ios__store__app-ui__page-info-block-icon" />
                  <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                    {state.data.sellerName}
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
                  Version {state.data.version}
                </p>
                <p className="notificare__push__ios__store__app-ui__page-history-last-update">
                  {timeAgo(state.data.currentVersionReleaseDate)}
                </p>
              </div>
              <p className="notificare__push__ios__store__app-ui__page-history-notes">
                {state.data.releaseNotes}
              </p>
            </div>

            <div className="notificare__push__ios__store__app-ui__page-previews">
              <p className="notificare__push__ios__store__app-ui__page-previews-title">Preview</p>
              <div className="notificare__push__ios__store__app-ui__page-previews-images">
                <img
                  src={state.data.screenshotUrls[0]}
                  className="notificare__push__ios__store__app-ui__page-preview-image"
                  alt="App preview"
                />
                <img
                  src={state.data.screenshotUrls[1]}
                  className="notificare__push__ios__store__app-ui__page-preview-image"
                  alt="App preview"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export interface AppRecommendationNotificationProps {
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
