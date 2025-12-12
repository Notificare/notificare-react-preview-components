import { fetchJson, fetchBlob } from '~/internal/network/fetch';
import { getPushAPIHost } from '../api';

export async function createWebshotRequest(
  url: string,
  width: number,
  height: number,
  platform: 'Android' | 'iOS' | 'Web',
  serviceKey: string,
  signal?: AbortSignal,
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
    signal: signal,
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
  signal?: AbortSignal,
): Promise<WebshotRequestState> {
  const url = new URL(`/webshot/${encodeURIComponent(id)}`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const { webshot } = await fetchJson<WebshotRequestStateResponse>(url, { signal });

  return webshot;
}

export type WebshotRequestState =
  | { status: 'finished' }
  | { status: 'error'; result: string }
  | { status: 'queued' };

interface WebshotRequestStateResponse {
  webshot: WebshotRequestState;
}

export async function fetchWebshotResult(
  id: string,
  serviceKey: string,
  signal?: AbortSignal,
): Promise<string> {
  const url = new URL(`/webshot/${encodeURIComponent(id)}/result`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const blob = await fetchBlob(url, { signal });

  return URL.createObjectURL(blob);
}
