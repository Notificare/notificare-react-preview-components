/**
 * Defines the structure of the application object.
 *
 * @property {string} name - The name of the application.
 * @property {string} androidPackageName - The Android package name of the application (for PlayStore)
 * @property {NotificareApplicationWebsitePushConfig} websitePushConfig - Relevant data related to the application website (contains the application icon).
 * @property {string[]} allowedDomains - The list of domain names that are allowed to interact with the application.
 */
export interface NotificareApplication {
  name: string;
  androidPackageName: string;
  websitePushConfig: NotificareApplicationWebsitePushConfig;
  allowedDomains: string[];
}

/** Defines relevant data related to the application website.
 *
 * @property {string} icon - The URL of the application's website icon.
 */
export interface NotificareApplicationWebsitePushConfig {
  icon: string;
}
