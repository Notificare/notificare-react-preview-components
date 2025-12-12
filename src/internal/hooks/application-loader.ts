import { useEffect, useState } from 'react';
import { fetchApplication } from '~/internal/network/requests/application';
import { RequestState } from '~/internal/network/state';
import { ApplicationInfo } from '~/internal/types/application-info';

const DEFAULT_APPLICATION = {
  name: 'My app',
  icon: undefined,
  androidPackageName: 'com.example.app',
  websitePushConfig: {
    icon: undefined,
    allowedDomains: ['https://my-app.com/'],
  },
} satisfies ApplicationInfo;

export function useApplicationLoader({ id, serviceKey }: ApplicationLoaderParams) {
  const [state, setState] = useState<ApplicationLoaderState>({ status: 'idle' });

  useEffect(() => {
    if (!id) {
      console.warn('An application ID was not provided. Using default application instead.');
      setState({ status: 'success', data: DEFAULT_APPLICATION });
      return;
    }

    if (!serviceKey) {
      console.warn(
        'An application ID was provided, but a service key is missing. Using default application instead.',
      );
      setState({ status: 'success', data: DEFAULT_APPLICATION });
      return;
    }

    fetchApplication(id, serviceKey)
      .then((application) => {
        setState({ status: 'success', data: application });
      })
      .catch((error: unknown) => {
        console.error('Error fetching the application: ', error);
        setState({ status: 'success', data: DEFAULT_APPLICATION });
      });
  }, [id, serviceKey]);

  return state;
}

export interface ApplicationLoaderParams {
  id: string | undefined;
  serviceKey: string | undefined;
}

export type ApplicationLoaderState = Exclude<RequestState<ApplicationInfo>, { status: 'error' }>;
