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
import { isValidUrl } from '~/internal/utils/url';
import { MESSAGES } from '~/locales/push/en';

export function useWebshotRequest(props: UseWebshotRequestProps): WebshotState {
  const { serviceKey } = useOptions();
  const intl = useIntl();
  const { url, platform, width, height } = useDebounce(props, 500);

  const [state, setState] = useState<WebshotState>({ status: 'idle' });
  const [webshotId, setWebshotId] = useState<string>();

  useEffect(
    function createRequest() {
      if (!isValidUrl(url)) {
        setState({
          status: 'error',
          error: new Error(
            intl.formatMessage({
              id: 'preview.error.invalidUrl',
              defaultMessage: MESSAGES['preview.error.invalidUrl'],
            }),
          ),
        });
        return;
      }

      setState({ status: 'loading' });
      setWebshotId(undefined);

      createWebshotRequest(url, width, height, platform, serviceKey)
        .then(setWebshotId)
        .catch((error) => {
          console.error('Webshot error:\n\n' + error);

          setState({
            status: 'error',
            error: new Error(
              intl.formatMessage({
                id: 'preview.error.webshotFail',
                defaultMessage: MESSAGES['preview.error.webshotFail'],
              }),
            ),
          });
        });
    },
    [url, width, height, platform, serviceKey],
  );

  useEffect(
    function loadWebshotResult() {
      if (!webshotId) return;

      // eslint-disable-next-line prefer-const
      let handler: NodeJS.Timeout;

      const checkStatus = async () => {
        try {
          const statusResponse = await fetchWebshotRequestStatus(webshotId, serviceKey);

          if (statusResponse.status === 'finished') {
            const webshot = await fetchWebshotResult(webshotId, serviceKey);
            setState({ status: 'success', data: webshot });

            clearInterval(handler);
          } else if (statusResponse.status === 'error') {
            console.error('Webshot error:\n\n' + statusResponse.result);

            setState({
              status: 'error',
              error: new Error(
                intl.formatMessage({
                  id: 'preview.error.webshotFail',
                  defaultMessage: MESSAGES['preview.error.webshotFail'],
                }),
              ),
            });

            clearInterval(handler);
          }
        } catch (error) {
          console.error('Webshot error:\n\n' + error);

          setState({
            status: 'error',
            error: new Error(
              intl.formatMessage({
                id: 'preview.error.webshotFail',
                defaultMessage: MESSAGES['preview.error.webshotFail'],
              }),
            ),
          });

          clearInterval(handler);
        }
      };

      handler = setInterval(checkStatus, 3000);
      return () => clearInterval(handler);
    },
    [webshotId, serviceKey],
  );

  return state;
}

export type UseWebshotRequestProps = {
  url: string;
  platform: 'Android' | 'iOS' | 'Web';
  width: number;
  height: number;
};

export type WebshotState = RequestState<string>;
