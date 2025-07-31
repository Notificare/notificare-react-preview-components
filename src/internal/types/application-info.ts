export type ApplicationInfo = {
  name: string;
  icon?: string;
  androidPackageName?: string;
  websitePushConfig: ApplicationInfoWebsitePushConfig;
};

export interface ApplicationInfoWebsitePushConfig {
  icon?: string;
  allowedDomains: string[];
}
