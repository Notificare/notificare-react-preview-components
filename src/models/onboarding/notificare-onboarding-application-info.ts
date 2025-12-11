/**
 * Defines partial information of a Notificare app.
 *
 * @property {string} [name] - The name of the application (optional).
 * @property {string} websitePushConfig - The Website Push configuration of the app.
 */
export interface NotificareOnboardingApplicationInfo {
  readonly name?: string;
  readonly websitePushConfig: NotificareOnboardingWebsitePushConfig;
}

/**
 * Defines the Website Push configuration of an app.
 *
 * @property {string} [icon] - The icon to be displayed in a native browser notification (optional).
 * @property {NotificareOnboardingLaunchConfig} launchConfig - Set of launch options.
 */
export interface NotificareOnboardingWebsitePushConfig {
  readonly icon?: string;
  readonly launchConfig: NotificareOnboardingLaunchConfig;
}

/**
 * Defines the launch configuration of an app.
 *
 * @property {string} [applicationName] - A custom application name to replace the original one at the top of a dialog (optional).
 * @property {NotificareOnboardingFloatingButtonOptions} [floatingButtonOptions] - Set of floating button customization options (optional).
 * @property {NotificareOnboardingAutoOnboardingOptions} [autoOnboardingOptions] - Set of dialog customization options (optional).
 */
export interface NotificareOnboardingLaunchConfig {
  readonly applicationName?: string;
  readonly floatingButtonOptions?: NotificareOnboardingFloatingButtonOptions;
  readonly autoOnboardingOptions?: NotificareOnboardingAutoOnboardingOptions;
}

/**
 * Defines the floating button customization options.
 *
 * @property {NotificareOnboardingFloatingButtonAlignment} alignment - Defines the horizontal and vertical alignment of the floating button.
 * @property {NotificareOnboardingFloatingButtonPermissionTexts} permissionTexts - Custom texts for the tooltip on the floating button based on the remote notification permission status.
 */
export interface NotificareOnboardingFloatingButtonOptions {
  readonly alignment: NotificareOnboardingFloatingButtonAlignment;
  readonly permissionTexts: NotificareOnboardingFloatingButtonPermissionTexts;
}

/**
 * Defines the horizontal and vertical alignment of the floating button.
 *
 * @property {NotificareOnboardingFloatingButtonHorizontalAlignment} horizontal - The horizontal alignment.
 * @property {NotificareOnboardingFloatingButtonVerticalAlignment} vertical - The vertical alignment.
 */
export interface NotificareOnboardingFloatingButtonAlignment {
  readonly horizontal: NotificareOnboardingFloatingButtonHorizontalAlignment;
  readonly vertical: NotificareOnboardingFloatingButtonVerticalAlignment;
}

export type NotificareOnboardingFloatingButtonHorizontalAlignment = 'start' | 'end';

export type NotificareOnboardingFloatingButtonVerticalAlignment = 'top' | 'bottom';

/**
 * Specifies custom texts for the tooltip on the floating button based on the remote notification permission status.
 *
 * @property {string} default - The text to be displayed when remote notifications were neither allowed nor denied by the user.
 * @property {string} granted - The text to be displayed when the user allows remote notifications.
 * @property {string} denied - The text to be displayed when the user denies remote notifications.
 */
export interface NotificareOnboardingFloatingButtonPermissionTexts {
  readonly default: string;
  readonly granted: string;
  readonly denied: string;
}

/**
 * Defines the dialog customization options.
 *
 * @property {string} message - The main message of the dialog.
 * @property {string} cancelButton - The text on the cancel button.
 * @property {string} acceptButton - The text on the accept button.
 */
export interface NotificareOnboardingAutoOnboardingOptions {
  readonly message: string;
  readonly cancelButton: string;
  readonly acceptButton: string;
}
