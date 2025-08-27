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
        .then(setWebshotId)
        .catch((error: unknown) => {
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
            clearInterval(handler);
            const webshot = await fetchWebshotResult(webshotId, serviceKey);
            setState({ status: 'success', data: webshot });
          } else if (statusResponse.status === 'error') {
            clearInterval(handler);
            logError(
              statusResponse.result,
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
          }
        } catch (error) {
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
      };

      handler = setInterval(() => {
        void checkStatus();
      }, 3000);
      return () => {
        clearInterval(handler);
      };
    },
    [webshotId, serviceKey],
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
