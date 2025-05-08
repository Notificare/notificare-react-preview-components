export function getUrlMainDomain(url: string) {
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
