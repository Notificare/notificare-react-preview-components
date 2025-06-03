import { ApplicationInfo } from '../../types/application-info';
import { getPushAPIHost } from '../api';
import { NetworkRequestError } from '../errors';

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
    androidPackageName: application.androidPackageName,
    websitePushConfig: application.websitePushConfig && {
      icon: application.websitePushConfig.icon,
      allowedDomains: application.websitePushConfig.allowedDomains,
    },
  };
}
