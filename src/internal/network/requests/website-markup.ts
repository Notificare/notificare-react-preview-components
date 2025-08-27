import { getPushAPIHost } from '../api';
import { fetchText } from '../fetch';

export async function fetchWebsiteMarkup(serviceKey: string, websiteUrl: string) {
  const url = new URL('/proxy', getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);
  url.searchParams.set('url', websiteUrl);

  return await fetchText(url);
}
