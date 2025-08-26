import { fetchJson, fetchBlob } from '~/internal/network/fetch';
import { getPushAPIHost } from '../api';

export async function createWebshotRequest(
  url: string,
  width: number,
  height: number,
  platform: 'Android' | 'iOS' | 'Web',
  serviceKey: string,
): Promise<string> {
  const webshotUrl = new URL('/webshot', getPushAPIHost());
  webshotUrl.searchParams.set('apiKey', serviceKey);

  const { webshot } = await fetchJson<CreateWebshotRequestResponse>(webshotUrl, {
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

  return webshot.id;
}

interface CreateWebshotRequestResponse {
  webshot: {
    id: string;
  };
}

export async function fetchWebshotRequestStatus(
  id: string,
  serviceKey: string,
): Promise<WebshotRequestStatus> {
  const url = new URL(`/webshot/${encodeURIComponent(id)}`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const { webshot } = await fetchJson<WebshotRequestStatusResponse>(url);

  return webshot;
}

export type WebshotRequestStatus =
  | { status: 'finished' }
  | { status: 'error'; result: string }
  | { status: 'queued' };

interface WebshotRequestStatusResponse {
  webshot: WebshotRequestStatus;
}

export async function fetchWebshotResult(id: string, serviceKey: string): Promise<string> {
  const url = new URL(`/webshot/${encodeURIComponent(id)}/result`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const blob = await fetchBlob(url);

  return URL.createObjectURL(blob);
}
