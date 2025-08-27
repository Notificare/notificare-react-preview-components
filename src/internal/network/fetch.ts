import { NetworkRequestError } from './errors';

export async function fetchJson<T>(url: URL, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  return (await response.json()) as T;
}

export async function fetchBlob(url: URL, init?: RequestInit): Promise<Blob> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  return await response.blob();
}

export async function fetchText(url: URL, init?: RequestInit): Promise<string> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  return await response.text();
}
