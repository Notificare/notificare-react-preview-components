import { getPushAPIHost } from '../../../config/api';

export function getAppIconURL(appIcon: string) {
  if (!appIcon.startsWith('https://') && !appIcon.startsWith('http://')) {
    return `${getPushAPIHost()}/upload${appIcon}`;
  } else {
    return appIcon;
  }
}
