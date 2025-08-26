import { getPushAPIHost } from '~/internal/network/api';
import { fetchJson } from '~/internal/network/fetch';
import { ApplicationInfo } from '~/internal/types/application-info';

export async function fetchApplication(id: string, serviceKey: string): Promise<ApplicationInfo> {
  const url = new URL(`/application/${encodeURIComponent(id)}/info`, getPushAPIHost());
  url.searchParams.set('apiKey', serviceKey);

  const { application } = await fetchJson<ApplicationResponse>(url);

  return {
    name: application.name,
    icon: application.icon,
    androidPackageName: application.androidPackageName,
    websitePushConfig: {
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

interface ApplicationResponse {
  application: ApplicationInfo;
}
