export function isSecureUrl(url: string): boolean {
  try {
    const protocol = new URL(url).protocol;
    return protocol === 'https:';
  } catch {
    return false;
  }
}
