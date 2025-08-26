import { IosStoreAppData } from '~/internal/components/push/platforms/ios/app-ui/AppRecommendationNotification/types/ios-store-app';
import { fetchJson } from '~/internal/network/fetch';

export async function fetchIosStoreApp(appId: string): Promise<IosStoreAppResponse> {
  const url = new URL('/lookup', 'https://itunes.apple.com');
  url.searchParams.set('country', 'NL');
  url.searchParams.set('id', appId);

  const timestamp = (Date.now() / 1000).toString();
  url.searchParams.set('x', timestamp);

  return await fetchJson<IosStoreAppResponse>(url);
}

interface IosStoreAppResponse {
  resultCount: number;
  results: IosStoreAppData[];
}
