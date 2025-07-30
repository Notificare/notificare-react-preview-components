export function getUrlResolverPreviewTypeByUrl(urlStr: string) {
  let url;

  try {
    url = new URL(urlStr);

    const isHttpUrl = url.protocol == 'http:' || url.protocol == 'https:';
    const isDynamicLink = url.host.endsWith('ntc.re');

    if (!isHttpUrl) {
      return UrlResolverPreviewTypeResult.URL_SCHEME;
    }

    if (isDynamicLink) {
      return UrlResolverPreviewTypeResult.DYNAMIC_LINK;
    }

    const webViewQueryParameter = url.searchParams.get('notificareWebView');
    const isWebViewMode =
      webViewQueryParameter == '1' || webViewQueryParameter?.toLowerCase() == 'true';

    return isWebViewMode
      ? UrlResolverPreviewTypeResult.WEB_VIEW
      : UrlResolverPreviewTypeResult.IN_APP_BROWSER;
  } catch {
    return UrlResolverPreviewTypeResult.INVALID_URL;
  }
}

export enum UrlResolverPreviewTypeResult {
  INVALID_URL = 'invalid-url',
  DYNAMIC_LINK = 'dynamic-link',
  WEB_VIEW = 'web-view',
  IN_APP_BROWSER = 'in-app-browser',
  URL_SCHEME = 'url-scheme',
}
