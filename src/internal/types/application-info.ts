export type ApplicationInfo = {
  name: string;
  androidPackageName: string; // TODO: this can be null or undefined.
  websitePushConfig: ApplicationInfoWebsitePushConfig;
}

export interface ApplicationInfoWebsitePushConfig {
  icon: string;
  allowedDomains: string[];
}
