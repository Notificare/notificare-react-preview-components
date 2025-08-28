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
  const intl = useIntl();
  const { url, platform, width, height, serviceKey } = useDebounce(
    { ...props, serviceKey: useOptions().serviceKey },
    500,
  );

  const [state, setState] = useState<WebshotState>({ status: 'idle' });
  const [webshotId, setWebshotId] = useState<string>();

  useEffect(
    function createRequest() {
      const controller = new AbortController();
      const signal = controller.signal;

      setWebshotId(undefined);

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

      createWebshotRequest(url, width, height, platform, serviceKey, signal)
        .then((id) => {
          if (signal.aborted) return;

          setWebshotId(id);
        })
        .catch((error: unknown) => {
          if (signal.aborted) return;

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
        controller.abort();
      };
    },
    [url, width, height, platform, serviceKey, intl],
  );

  useEffect(
    function loadWebshotResult() {
      if (!webshotId) return;

      const controller = new AbortController();
      const signal = controller.signal;

      // eslint-disable-next-line prefer-const
      let handler: NodeJS.Timeout;
      let isCheckingStatus = false;

      const checkStatusAndSetResult = async () => {
        if (isCheckingStatus) return;

        isCheckingStatus = true;

        try {
          const webshotRequestStatus = await fetchWebshotRequestStatus(
            webshotId,
            serviceKey,
            signal,
          );

          if (signal.aborted) return;

          switch (webshotRequestStatus.status) {
            case 'finished': {
              clearInterval(handler);
              const webshot = await fetchWebshotResult(webshotId, serviceKey, signal);

              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              if (signal.aborted) return;

              setState({ status: 'success', data: webshot });
              break;
            }

            case 'error': {
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
            }

            case 'queued':
              break;
          }
        } catch (error) {
          if (signal.aborted) return;

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
        controller.abort();
        clearInterval(handler);
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
