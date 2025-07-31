import { getPushAPIHost } from '~/internal/network/api';
import { NetworkRequestError } from '~/internal/network/errors';
import { ApplicationInfo } from '~/internal/types/application-info';

export async function fetchApplication(id: string, serviceKey: string): Promise<ApplicationInfo> {
  const url = new URL(`/application/${encodeURIComponent(id)}/info`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const response = await fetch(url);

  if (!response.ok) {
    throw new NetworkRequestError(response);
  }

  const { application } = await response.json();
  return {
    name: application.name,
    icon: application.icon,
    androidPackageName: application.androidPackageName,
    websitePushConfig: application.websitePushConfig && {
      icon: application.websitePushConfig.icon
        ? calculateCompleteIconUrl(application.websitePushConfig.icon)
        : undefined,
      allowedDomains: application.websitePushConfig.allowedDomains,
    },
  };
}

function calculateCompleteIconUrl(url: string) {
  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    return `${getPushAPIHost()}/upload${url}`;
  } else {
    return url;
  }
}
