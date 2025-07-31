import { FormattedMessage, useIntl } from 'react-intl';
import LayerGroupIcon from '~/assets/layer-group.svg';
import UserIcon from '~/assets/user.svg';
import { useStoreRequest } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/hooks';
import { Loading } from '~/internal/components/shared/Loading/Loading';
import { PreviewError } from '~/internal/components/shared/PreviewError/PreviewError';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { timeAgo } from '~/internal/utils/time-ago';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { StarRating } from './StarRating/StarRating';

import './AppRecommendationNotification.css';

export function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const contentList = notification.content;

  const intl = useIntl();
  const state = useStoreRequest({ contentList });

  return (
    <div data-testid="ios-app-ui-app-recommendation-notification">
      <div className="notificare__push__ios__store__app-ui__bar">
        <FormattedMessage
          id="preview.ios.store.appUi.done"
          defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.done']}
        />
      </div>
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
                <div className="notificare__push__ios__store__app-ui__page-install">
                  <FormattedMessage
                    id="preview.ios.store.appUi.install"
                    defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.install']}
                  />
                </div>
              </div>
            </div>

            <div className="notificare__push__ios__store__app-ui__page-other-app-info-wrapper">
              <div className="notificare__push__ios__store__app-ui__page-other-app-info">
                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                    <FormattedMessage
                      id="preview.ios.store.appUi.ratings"
                      defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.ratings']}
                      values={{ userRatingCount: state.data.userRatingCount }}
                    />
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                    {state.data.averageUserRating.toFixed(1)}
                  </p>

                  <StarRating rating={state.data.averageUserRating} />
                </div>

                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                    <FormattedMessage
                      id="preview.ios.store.appUi.age"
                      defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.age']}
                    />
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                    {state.data.trackContentRating}
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                    <FormattedMessage
                      id="preview.ios.store.appUi.yearsOld"
                      defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.yearsOld']}
                    />
                  </p>
                </div>
                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                    <FormattedMessage
                      id="preview.ios.store.appUi.category"
                      defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.category']}
                    />
                  </p>
                  <LayerGroupIcon className="notificare__push__ios__store__app-ui__page-info-block-icon" />
                  <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                    {state.data.primaryGenreName}
                  </p>
                </div>
                <div className="notificare__push__ios__store__app-ui__page-info-block">
                  <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                    <FormattedMessage
                      id="preview.ios.store.appUi.developer"
                      defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.developer']}
                    />
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
                <FormattedMessage
                  id="preview.ios.store.appUi.whatsNew"
                  defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.whatsNew']}
                />
              </p>
              <div className="notificare__push__ios__store__app-ui__page-history-version-last-update">
                <p className="notificare__push__ios__store__app-ui__page-history-version">
                  <FormattedMessage
                    id="preview.ios.store.appUi.historyVersion"
                    defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.historyVersion']}
                    values={{ version: state.data.version }}
                  />
                </p>
                <p className="notificare__push__ios__store__app-ui__page-history-last-update">
                  {timeAgo(state.data.currentVersionReleaseDate, intl.locale)}
                </p>
              </div>
              <p className="notificare__push__ios__store__app-ui__page-history-notes">
                {state.data.releaseNotes}
              </p>
            </div>

            <div className="notificare__push__ios__store__app-ui__page-previews">
              <p className="notificare__push__ios__store__app-ui__page-previews-title">
                <FormattedMessage
                  id="preview.ios.store.appUi.screenshots"
                  defaultMessage={PUSH_TRANSLATIONS['preview.ios.store.appUi.screenshots']}
                />
              </p>
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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Store' }>;
}
