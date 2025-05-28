import { getPushAPIHost } from '../../../config/api';

export async function fetchWebsiteMarkup(serviceKey: string, websiteUrl: string) {
  const url = new URL('/proxy', getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);
  url.searchParams.set('url', websiteUrl);

  const response = await fetch(url);
  return response.text();
}
