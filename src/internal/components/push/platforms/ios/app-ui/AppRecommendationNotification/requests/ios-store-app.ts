import {
  IosStoreApps,
  IosStoreAppData,
} from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/types/ios-store-apps';
import { NetworkRequestError } from '~/internal/network/errors';

export async function fetchIosStoreApp(appId: string): Promise<IosStoreAppData> {
  const url = new URL('/lookup', 'https://itunes.apple.com');
  url.searchParams.set('country', 'GB');
  url.searchParams.set('id', appId);

  const response = await fetch(url);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  const data: IosStoreApps = await response.json();

  if (data.resultCount === 0) {
    throw new Error('The app was not found. Check the identifier and try again.');
  }

  return data.results[0];
}
