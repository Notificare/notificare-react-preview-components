import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import LayerGroupIcon from '~/assets/layer-group.svg';
import UserIcon from '~/assets/user.svg';
import { Loading } from '~/internal/components/shared/Loading/Loading';
import { PreviewError } from '~/internal/components/shared/PreviewError/PreviewError';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { timeAgo } from '~/internal/utils/time-ago';
import { StarRating } from './StarRating/StarRating';

import './AppRecommendationNotification.css';

export function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const content = notification.content[0];
  const intl = useIntl();

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
                intl.formatMessage({ id: 'preview.error.appleStoreAppNotFound' }),
              );
            } else {
              setAppStoreData(data);
              updateComponentStatus(false, false, setStatus);
            }
          } catch (error) {
            console.error('Error while trying to get the app information:\n\n', error);
            updateComponentStatus(
              false,
              true,
              setStatus,
              intl.formatMessage({ id: 'preview.error.checkConsole' }),
            );
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
      <div className="notificare__push__ios__store__app-ui__bar">
        <FormattedMessage id="preview.ios.store.appUi.done" />
      </div>
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
                  <div className="notificare__push__ios__store__app-ui__page-install">
                    <FormattedMessage id="preview.ios.store.appUi.install" />
                  </div>
                </div>
              </div>

              <div className="notificare__push__ios__store__app-ui__page-other-app-info-wrapper">
                <div className="notificare__push__ios__store__app-ui__page-other-app-info">
                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      <FormattedMessage
                        id="preview.ios.store.appUi.ratings"
                        values={{
                          userRatingCount: (
                            <FormattedNumber
                              value={appStoreData.results[0].userRatingCount}
                              notation="compact"
                              compactDisplay="short"
                              maximumFractionDigits={1}
                            />
                          ),
                        }}
                      />
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                      {appStoreData.results[0].averageUserRating.toFixed(1)}
                    </p>

                    <StarRating rating={appStoreData.results[0].averageUserRating} />
                  </div>

                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      <FormattedMessage id="preview.ios.store.appUi.age" />
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-info-block-value">
                      {appStoreData.results[0].trackContentRating}
                    </p>
                    <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                      <FormattedMessage id="preview.ios.store.appUi.yearsOld" />
                    </p>
                  </div>
                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      <FormattedMessage id="preview.ios.store.appUi.category" />
                    </p>
                    <LayerGroupIcon className="notificare__push__ios__store__app-ui__page-info-block-icon" />
                    <p className="notificare__push__ios__store__app-ui__page-info-block-bottom-text">
                      {appStoreData.results[0].primaryGenreName}
                    </p>
                  </div>
                  <div className="notificare__push__ios__store__app-ui__page-info-block">
                    <p className="notificare__push__ios__store__app-ui__page-info-block-title">
                      <FormattedMessage id="preview.ios.store.appUi.developer" />
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
                  <FormattedMessage id="preview.ios.store.appUi.whatsNew" />
                </p>
                <div className="notificare__push__ios__store__app-ui__page-history-version-last-update">
                  <p className="notificare__push__ios__store__app-ui__page-history-version">
                    <FormattedMessage
                      id="preview.ios.store.appUi.historyVersion"
                      values={{ version: appStoreData.results[0].version }}
                    />
                  </p>
                  <p className="notificare__push__ios__store__app-ui__page-history-last-update">
                    {timeAgo(appStoreData.results[0].currentVersionReleaseDate, intl.locale)}
                  </p>
                </div>
                <p className="notificare__push__ios__store__app-ui__page-history-notes">
                  {appStoreData.results[0].releaseNotes}
                </p>
              </div>

              <div className="notificare__push__ios__store__app-ui__page-previews">
                <p className="notificare__push__ios__store__app-ui__page-previews-title">
                  <FormattedMessage id="preview.ios.store.appUi.screenshots" />
                </p>
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

export interface AppRecommendationNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Store' }>;
}

type StatusState = {
  isLoading: boolean;
  hasError: boolean;
  error: string;
};

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
