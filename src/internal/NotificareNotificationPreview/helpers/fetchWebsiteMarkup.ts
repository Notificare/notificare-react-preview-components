import { DASHBOARD_API } from '../../api';

export async function fetchWebsiteMarkup(url: string) {
  try {
    const response = await fetch(`${DASHBOARD_API}/api/v2/proxy/?url=${url}`);
    return response.text();
  } catch (error) {
    console.error('Error fetching website', error);
    return '';
  }
}
