import { useEffect, useState } from 'react';
import { fetchApplication } from '~/internal/network/requests/application';
import { RequestState } from '~/internal/network/state';
import { ApplicationInfo } from '~/internal/types/application-info';

const DEFAULT_APPLICATION = {
  name: 'My app',
  androidPackageName: 'com.example.app',
  websitePushConfig: {
    icon: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
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
      .catch((error) => {
        console.error('Error fetching the application: ', error);
        setState({ status: 'success', data: DEFAULT_APPLICATION });
      });
  }, [id]);

  return state;
}

export type ApplicationLoaderParams = {
  id: string | undefined;
  serviceKey: string;
};

export type ApplicationLoaderState = Exclude<RequestState<ApplicationInfo>, { status: 'error' }>;
