export const MESSAGES = {
  'controls.platform': 'Platform',
  'controls.formFactor': 'Form Factor',
  'controls.operatingSystem': 'OS',
  'controls.operatingSystem.macos': 'macOS',
  'controls.variant': 'Variant',
  'controls.displayMode.lockScreen': 'Lock Screen',
  'controls.displayMode.expandedLockScreen': 'Lock Screen - Expanded',
  'controls.displayMode.appUi': 'App UI',
  'preview.error.notGeneratedPreview': 'Preview could not be generated',
  'preview.error.checkConsole': 'Check console for more information',
  'preview.error.invalidNotification': '→ Invalid Notification',
  'preview.error.provideGoogleMapsApiKey': '→ A Google Maps API key should be provided',
  'preview.error.notSupportedPreviewVariant': '→ Not supported variant',
  'preview.error.invalidUrl': 'The URL is invalid.',
  'preview.error.iosStoreAppNotFound':
    'The app was not found. Check the unique identifier and try again.',
  'preview.error.webshotFail': 'Webshot failed to be loaded. Check console for more details.',
  'preview.error.notSupportedNotificationTypePreviewVariant':
    "→ Previewing notifications of type ''{notificationType}'' is not possible in this variant",
  'preview.error.googleMapsAuthFailure':
    'Authentication failure. Your Google Maps API key might be invalid. Check console for more information.',
  'preview.error.googleMapsLoadFailure':
    'Google Maps failed to be loaded. Check console for more information.',
  'preview.android.alert.appUi.cancel': 'Cancel',
  'preview.android.inAppBrowser.appUi.pageTitleLoading': 'Loading...',
  'preview.android.lockscreen.time': 'now',
  'preview.ios.alert.appUi.cancel': 'Cancel',
  'preview.ios.alert.appUi.ok': 'OK',
  'preview.ios.inAppBrowser.appUi.done': 'Done',
  'preview.ios.inAppBrowser.appUi.notSecure': 'Not Secure —',
  'preview.ios.rate.appUi.rateNow': "Yes, I'll Rate Now",
  'preview.ios.rate.appUi.doNotRate': 'No, Thanks',
  'preview.ios.store.appUi.done': 'Done',
  'preview.ios.store.appUi.install': 'Install',
  'preview.ios.store.appUi.ratings': '{userRatingCount} Ratings',
  'preview.ios.store.appUi.age': 'Age',
  'preview.ios.store.appUi.yearsOld': 'Years Old',
  'preview.ios.store.appUi.category': 'Category',
  'preview.ios.store.appUi.developer': 'Developer',
  'preview.ios.store.appUi.whatsNew': "What's New",
  'preview.ios.store.appUi.historyVersion': 'Version {version}',
  'preview.ios.store.appUi.screenshots': 'Screenshots',
  'preview.ios.lockScreen.time': 'Now',
  'preview.web.desktop.macos.lockScreen.time': 'now',
  'preview.web.desktop.macos.lockScreen.settings': 'Settings',
  'preview.web.desktop.macos.lockScreen.options': 'Options',
};

/**
 * The set of translation keys for push notification previews.
 */
export type NotificarePushTranslationKey = keyof typeof MESSAGES;
