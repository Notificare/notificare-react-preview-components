import { useEffect, useState } from 'react';
import { fetchIosStoreApp } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/requests/ios-store-app';
import { IosStoreAppData } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/types/ios-store-apps';
import { useDebounce } from '~/internal/hooks';
import { RequestState } from '~/internal/network/state';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';

export function useStoreRequest(props: UseStoreRequestProps): StoreState {
  const { contentList } = useDebounce(props, 500);
  const [state, setState] = useState<StoreState>({ status: 'idle' });

  useEffect(
    function loadAppData() {
      (async () => {
        const appId = getAppId(contentList);

        if (!appId) {
          setState({ status: 'error', error: new Error('No valid content object was provided') });
          return;
        }

        setState({ status: 'loading' });

        fetchIosStoreApp(appId)
          .then((iosStoreApp) => setState({ status: 'success', data: iosStoreApp }))
          .catch((error) => {
            console.error('Error getting App Store app:\n\n' + error);

            setState({
              status: 'error',
              error: new Error(
                'The App Store app failed to be loaded. Check console for more details.',
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
