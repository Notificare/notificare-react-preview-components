export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isSecureUrl(url: string): boolean {
  try {
    const protocol = new URL(url).protocol;
    return protocol === 'https:';
  } catch {
    return false;
  }
}

export function getTopLevelDomain(url: string) {
  try {
    const hostname = new URL(url).hostname;
    const parts = hostname.split('.');

    if (parts.length > 2) {
      return parts.slice(-2).join('.');
    }
    return hostname;
  } catch (e) {
    console.error('Invalid URL:', e);
    return '';
  }
}
