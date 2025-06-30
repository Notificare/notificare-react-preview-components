import { IosStoreApp } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/types/ios-store-app';
import { NetworkRequestError } from '~/internal/network/errors';

export async function fetchIosStoreApp(appId: string): Promise<IosStoreApp> {
  const url = new URL('/lookup', 'https://itunes.apple.com');
  url.searchParams.set('country', 'NL');
  url.searchParams.set('id', appId);

  const timestamp = (Date.now() / 1000).toString();
  url.searchParams.set('x', timestamp);

  const response = await fetch(url);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  return await response.json();
}
