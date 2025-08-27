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
  }, [id]);

  return state;
}

export interface ApplicationLoaderParams {
  id: string | undefined;
  serviceKey: string;
}

export type ApplicationLoaderState = Exclude<RequestState<ApplicationInfo>, { status: 'error' }>;
