import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useOptions } from '~/internal/context/options';
import { useDebounce } from '~/internal/hooks';
import {
  createWebshotRequest,
  fetchWebshotRequestStatus,
  fetchWebshotResult,
} from '~/internal/network/requests/webshot';
import { RequestState } from '~/internal/network/state';
import { logError } from '~/internal/utils/error';
import { isValidUrl } from '~/internal/utils/url';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';

export function useWebshotRequest(props: UseWebshotRequestProps): WebshotState {
  const { serviceKey } = useOptions();
  const intl = useIntl();
  const { url, platform, width, height } = useDebounce(props, 500);

  const [state, setState] = useState<WebshotState>({ status: 'idle' });
  const [webshotId, setWebshotId] = useState<string>();

  useEffect(
    function createRequest() {
      let isCurrentEffect = true;

      if (!isValidUrl(url)) {
        setState({
          status: 'error',
          error: new Error(
            intl.formatMessage({
              id: 'preview.error.invalidUrl',
              defaultMessage: PUSH_TRANSLATIONS['preview.error.invalidUrl'],
            }),
          ),
        });
        return;
      }

      setState({ status: 'loading' });
      setWebshotId(undefined);

      createWebshotRequest(url, width, height, platform, serviceKey)
        .then((id) => {
          if (!isCurrentEffect) return;

          setWebshotId(id);
        })
        .catch((error: unknown) => {
          if (!isCurrentEffect) return;

          logError(error, 'An error has occurred while trying to create the webshot request:');
          setState({
            status: 'error',
            error: new Error(
              intl.formatMessage({
                id: 'preview.error.webshotFail',
                defaultMessage: PUSH_TRANSLATIONS['preview.error.webshotFail'],
              }),
            ),
          });
        });

      return () => {
        isCurrentEffect = false;
      };
    },
    [url, width, height, platform, serviceKey],
  );

  useEffect(
    function loadWebshotResult() {
      if (!webshotId) return;
      // eslint-disable-next-line prefer-const
      let handler: NodeJS.Timeout;
      let isCheckingStatus = false;
      let isCurrentEffect = true;

      const checkStatusAndSetResult = async () => {
        if (isCheckingStatus) return;

        isCheckingStatus = true;

        try {
          const webshotRequestStatus = await fetchWebshotRequestStatus(webshotId, serviceKey);

          if (!isCurrentEffect) return;

          switch (webshotRequestStatus.status) {
            case 'finished': {
              clearInterval(handler);
              const webshot = await fetchWebshotResult(webshotId, serviceKey);

              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              if (!isCurrentEffect) return;

              setState({ status: 'success', data: webshot });
              break;
            }

            case 'error':
              clearInterval(handler);
              logError(
                webshotRequestStatus.result,
                'An error has occurred while trying to get the webshot request status:',
              );
              setState({
                status: 'error',
                error: new Error(
                  intl.formatMessage({
                    id: 'preview.error.webshotFail',
                    defaultMessage: PUSH_TRANSLATIONS['preview.error.webshotFail'],
                  }),
                ),
              });
              break;

            case 'queued':
              break;
          }
        } catch (error) {
          if (!isCurrentEffect) return;

          clearInterval(handler);
          logError(error, 'Webshot error:');
          setState({
            status: 'error',
            error: new Error(
              intl.formatMessage({
                id: 'preview.error.webshotFail',
                defaultMessage: PUSH_TRANSLATIONS['preview.error.webshotFail'],
              }),
            ),
          });
        }

        isCheckingStatus = false;
      };

      void checkStatusAndSetResult();

      handler = setInterval(() => {
        void checkStatusAndSetResult();
      }, 3000);

      return () => {
        clearInterval(handler);
        isCurrentEffect = false;
      };
    },
    [webshotId],
  );

  return state;
}

export interface UseWebshotRequestProps {
  url: string;
  platform: 'Android' | 'iOS' | 'Web';
  width: number;
  height: number;
}

export type WebshotState = RequestState<string>;
