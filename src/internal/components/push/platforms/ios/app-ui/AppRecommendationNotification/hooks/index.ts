import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { fetchIosStoreApp } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/requests/ios-store-app';
import { IosStoreAppData } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/types/ios-store-app';
import { useDebounce } from '~/internal/hooks';
import { RequestState } from '~/internal/network/state';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { PUSH_MESSAGES } from '~/locales/push/en';

export function useStoreRequest(props: UseStoreRequestProps): StoreState {
  const { contentList } = useDebounce(props, 500);

  const intl = useIntl();
  const [state, setState] = useState<StoreState>({ status: 'idle' });

  useEffect(
    function loadAppData() {
      (async () => {
        const appId = getAppId(contentList);

        if (!appId) {
          setState({
            status: 'error',
            error: new Error(
              intl.formatMessage({
                id: 'preview.error.noValidContentObject',
                defaultMessage: PUSH_MESSAGES['preview.error.noValidContentObject'],
              }),
            ),
          });
          return;
        }

        setState({ status: 'loading' });

        fetchIosStoreApp(appId)
          .then((app) => {
            if (app.resultCount === 0) {
              setState({
                status: 'error',
                error: new Error(
                  intl.formatMessage({
                    id: 'preview.error.iosStoreAppNotFound',
                    defaultMessage: PUSH_MESSAGES['preview.error.iosStoreAppNotFound'],
                  }),
                ),
              });
              return;
            }

            setState({ status: 'success', data: app.results[0] });
          })
          .catch((error) => {
            console.error('Error getting App Store app:\n\n' + error);

            setState({
              status: 'error',
              error: new Error(
                intl.formatMessage({
                  id: 'preview.error.iosStoreAppLoadFailure',
                  defaultMessage: PUSH_MESSAGES['preview.error.iosStoreAppLoadFailure'],
                }),
              ),
            });
          });
      })();
    },
    [contentList],
  );

  return state;
}

export type UseStoreRequestProps = {
  contentList: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Store' }
  >['content'];
};

export type StoreState = RequestState<IosStoreAppData>;

function getAppId(
  contentList: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Store' }
  >['content'],
) {
  for (const content of contentList) {
    if (content.type === 're.notifica.content.AppStore') {
      return content.data.identifier;
    }
  }

  return null;
}
