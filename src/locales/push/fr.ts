import { NotificarePushTranslationKey } from '~/locales';

export const PUSH_TRANSLATIONS_FR: Record<NotificarePushTranslationKey, string> = {
  'controls.platform': 'Plateforme',
  'controls.formFactor': 'Format',
  'controls.operatingSystem': 'SE',
  'controls.operatingSystem.macos': 'macOS',
  'controls.variant': 'Variante',
  'controls.displayMode.lockScreen': 'Écran verrouillé',
  'controls.displayMode.expandedLockScreen': 'Écran verrouillé - Étendu',
  'controls.displayMode.appUi': 'App UI',
  'preview.error.notGeneratedPreview': 'Aperçu non généré',
  'preview.error.checkConsole': 'Consultez la console pour plus d’informations',
  'preview.error.invalidNotification': '→ Notification invalide',
  'preview.error.provideGoogleMapsApiKey': '→ Une clé API Google Maps doit être fournie',
  'preview.error.notSupportedPreviewVariant': '→ Variante non prise en charge',
  'preview.error.invalidUrl': 'L’URL est invalide.',
  'preview.error.iosStoreAppNotFound':
    "L'application n’a pas été trouvée. Vérifiez l’identifiant unique et réessayez",
  'preview.error.webshotFail':
    'La capture Web a échoué. Consultez la console pour plus de détails.',
  'preview.error.notSupportedNotificationTypePreviewVariant':
    "→ L’aperçu des notifications de type ''{notificationType}'' n’est pas possible dans cette variante",
  'preview.error.notSupportedUrlResolverWithUrlSchemePreview':
    "→ L’aperçu des notifications de type 're.notifica.notification.URLResolver' avec un schéma d’URL personnalisé (URL Scheme) n’est pas possible dans cette variante",
  'preview.error.urlResolverInvalidUrl': '→ L’URL fournie est invalide',
  'preview.error.urlResolverNoNotificareWebViewQueryParameter':
    "→ L’aperçu des notifications de type 're.notifica.notification.URLResolver' avec une URL HTTP sans le paramètre de requête 'notificareWebView' n’est pas possible dans cette variante",
  'preview.error.googleMapsAuthFailure':
    'Échec de l’authentification. Votre clé API Google Maps pourrait être invalide. Consultez la console pour plus d’informations.',
  'preview.error.googleMapsLoadFailure':
    'Échec du chargement de Google Maps. Consultez la console pour plus d’informations.',
  'preview.error.noValidContentObject': 'Aucun objet de contenu valide fourni',
  'preview.error.iosStoreAppLoadFailure':
    'Échec du chargement de l’application. Consultez la console pour plus de détails',
  'preview.android.alert.appUi.cancel': 'Annuler',
  'preview.android.inAppBrowser.appUi.pageTitleLoading': 'Chargement...',
  'preview.android.lockscreen.time': 'maintenant',
  'preview.ios.alert.appUi.cancel': 'Annuler',
  'preview.ios.alert.appUi.ok': 'OK',
  'preview.ios.inAppBrowser.appUi.done': 'Terminé',
  'preview.ios.inAppBrowser.appUi.notSecure': 'Non Sécurisé —',
  'preview.ios.rate.appUi.rateNow': 'Oui, je vais noter maintenant',
  'preview.ios.rate.appUi.doNotRate': 'Non, Merci',
  'preview.ios.store.appUi.done': 'Terminé',
  'preview.ios.store.appUi.install': 'Installer',
  'preview.ios.store.appUi.ratings': '{userRatingCount, number, ::compact-short} Évaluations',
  'preview.ios.store.appUi.age': 'Âge',
  'preview.ios.store.appUi.yearsOld': 'Ans',
  'preview.ios.store.appUi.category': 'Catégorie',
  'preview.ios.store.appUi.developer': 'Développeur',
  'preview.ios.store.appUi.whatsNew': 'Nouveautés',
  'preview.ios.store.appUi.historyVersion': 'Version {version}',
  'preview.ios.store.appUi.screenshots': 'Captures d’écran',
  'preview.ios.lockScreen.time': 'Maintenant',
  'preview.web.desktop.macos.lockScreen.time': 'maintenant',
  'preview.web.desktop.macos.lockScreen.settings': 'Réglages',
  'preview.web.desktop.macos.lockScreen.options': 'Options',
};
