/**
 * Defines partial information of a Notificare app.
 *
 * @property {string} [name] - The name of the application (optional).
 * @property {string} websitePushConfig - The Website Push configuration of the app.
 */
export interface NotificarePushOnboardingApplicationInfo {
  readonly name?: string;
  readonly websitePushConfig: NotificarePushOnboardingWebsitePushConfig;
}

/**
 * Defines the Website Push configuration of an app.
 *
 * @property {string} [icon] - The icon to be displayed in a native browser notification (optional).
 * @property {NotificarePushOnboardingLaunchConfig} launchConfig - Set of launch options.
 */
export interface NotificarePushOnboardingWebsitePushConfig {
  readonly icon?: string;
  readonly launchConfig: NotificarePushOnboardingLaunchConfig;
}

/**
 * Defines the launch configuration of an app.
 *
 * @property {string} [applicationName] - A custom application name to replace the original one at the top of a dialog (optional).
 * @property {NotificarePushOnboardingFloatingButtonOptions} [floatingButtonOptions] - Set of floating button customization options (optional).
 * @property {NotificarePushOnboardingAutoOnboardingOptions} [autoOnboardingOptions] - Set of dialog customization options (optional).
 */
export interface NotificarePushOnboardingLaunchConfig {
  readonly applicationName?: string;
  readonly floatingButtonOptions?: NotificarePushOnboardingFloatingButtonOptions;
  readonly autoOnboardingOptions?: NotificarePushOnboardingAutoOnboardingOptions;
}

/**
 * Defines the floating button customization options.
 *
 * @property {NotificarePushOnboardingFloatingButtonAlignment} alignment - Defines the horizontal and vertical alignment of the floating button.
 * @property {NotificarePushOnboardingFloatingButtonPermissionTexts} permissionTexts - Custom texts for the tooltip on the floating button based on the remote notification permission status.
 */
export interface NotificarePushOnboardingFloatingButtonOptions {
  readonly alignment: NotificarePushOnboardingFloatingButtonAlignment;
  readonly permissionTexts: NotificarePushOnboardingFloatingButtonPermissionTexts;
}

/**
 * Defines the horizontal and vertical alignment of the floating button.
 *
 * @property {NotificarePushOnboardingFloatingButtonHorizontalAlignment} horizontal - The horizontal alignment.
 * @property {NotificarePushOnboardingFloatingButtonVerticalAlignment} vertical - The vertical alignment.
 */
export interface NotificarePushOnboardingFloatingButtonAlignment {
  readonly horizontal: NotificarePushOnboardingFloatingButtonHorizontalAlignment;
  readonly vertical: NotificarePushOnboardingFloatingButtonVerticalAlignment;
}

export type NotificarePushOnboardingFloatingButtonHorizontalAlignment = 'start' | 'end';

export type NotificarePushOnboardingFloatingButtonVerticalAlignment = 'top' | 'bottom';

/**
 * Specifies custom texts for the tooltip on the floating button based on the remote notification permission status.
 *
 * @property {string} default - The text to be displayed when remote notifications were neither allowed nor denied by the user.
 * @property {string} granted - The text to be displayed when the user allows remote notifications.
 * @property {string} denied - The text to be displayed when the user denies remote notifications.
 */
export interface NotificarePushOnboardingFloatingButtonPermissionTexts {
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
export interface NotificarePushOnboardingAutoOnboardingOptions {
  readonly message: string;
  readonly cancelButton: string;
  readonly acceptButton: string;
}
