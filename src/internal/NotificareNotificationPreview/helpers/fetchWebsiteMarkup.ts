import { getPushAPIHost } from '../../../config/api';

export async function fetchWebsiteMarkup(apiKey: string, url: string) {
  try {
    const params = new URLSearchParams({ apiKey, url });
    const response = await fetch(`${getPushAPIHost()}/proxy/?${params.toString()}`);
    return response.text();
  } catch (error) {
    console.error('Error fetching website', error);
    return '';
  }
}
