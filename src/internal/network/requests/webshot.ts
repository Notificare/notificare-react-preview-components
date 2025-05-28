import { getPushAPIHost } from '../api';
import { NetworkRequestError } from '../errors';

export async function createWebshotRequest(
  url: string,
  width: number,
  height: number,
  platform: 'Android' | 'iOS' | 'Web',
  serviceKey: string,
): Promise<string> {
  const webshotUrl = new URL('/webshot', getPushAPIHost());
  webshotUrl.searchParams.set('apiKey', serviceKey);

  const response = await fetch(webshotUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: url,
      delay: 3000,
      platform: platform,
      type: 'png',
      params: {
        width: width,
        height: height,
      },
    }),
  });

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  const data = await response.json();
  return data.webshot.id;
}

export async function fetchWebshotRequestStatus(
  id: string,
  serviceKey: string,
): Promise<WebshotRequestStatusResponse> {
  const url = new URL(`/webshot/${encodeURIComponent(id)}`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const response = await fetch(url);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  const data = await response.json();
  return data.webshot;
}

export type WebshotRequestStatusResponse =
  | { status: 'finished' }
  | { status: 'error'; result: string };

export async function fetchWebshotResult(id: string, serviceKey: string): Promise<string> {
  const url = new URL(`/webshot/${encodeURIComponent(id)}/result`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const response = await fetch(url);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
