import { NotificarePushTranslationKey } from '~/locales';

export const PUSH_TRANSLATIONS_PT: Record<NotificarePushTranslationKey, string> = {
  'controls.platform': 'Plataforma',
  'controls.formFactor': 'Formato',
  'controls.operatingSystem': 'SO',
  'controls.operatingSystem.macos': 'macOS',
  'controls.variant': 'Variante',
  'controls.displayMode.lockScreen': 'Ecrã de Bloqueio',
  'controls.displayMode.expandedLockScreen': 'Ecrã de Bloqueio - Expandido',
  'controls.displayMode.appUi': 'App UI',
  'preview.error.notGeneratedPreview': 'Não foi possível gerar a pré-visualização',
  'preview.error.checkConsole': 'Consulte a consola para mais informações',
  'preview.error.invalidNotification': '→ Notificação inválida',
  'preview.error.provideGoogleMapsApiKey': '→ Deve ser fornecida uma chave de API do Google Maps',
  'preview.error.notSupportedPreviewVariant': '→ Variante não suportada',
  'preview.error.invalidUrl': 'A URL é inválida.',
  'preview.error.iosStoreAppNotFound':
    'A aplicação não foi encontrada. Verifique o identificador único e tente novamente',
  'preview.error.webshotFail':
    'Não foi possível efetuar a captura da página web. Consulte a consola para mais informações.',
  'preview.error.notSupportedNotificationTypePreviewVariant':
    "→ A pré-visualização de notificações do tipo ''{notificationType}'' não é possível nesta variante",
  'preview.error.notSupportedUrlResolverWithUrlSchemePreview':
    "→ A pré-visualização de notificações do tipo 're.notifica.notification.URLResolver' com um esquema de URL personalizado (URL Scheme) não é possível nesta variante",
  'preview.error.urlResolverInvalidUrl': '→ O URL fornecido é inválido',
  'preview.error.urlResolverNoNotificareWebViewQueryParameter':
    "→ A pré-visualização de notificações do tipo 're.notifica.notification.URLResolver' com um URL HTTP sem o parâmetro de query 'notificareWebView' não é possível nesta variante",
  'preview.error.notSupportedUrlResolverWithDynamicLink':
    "→ A pré-visualização de notificações do tipo 're.notifica.notification.URLResolver' com um link dinâmico não é possível nesta variante",
  'preview.error.googleMapsAuthFailure':
    'Falha de autenticação. A chave da API do Google Maps poderá ser inválida. Consulte a consola para mais informações.',
  'preview.error.googleMapsLoadFailure':
    'Não foi possível carregar o Google Maps. Consulte a consola para mais informações.',
  'preview.error.noValidContentObject': 'Nenhum objeto válido foi fornecido',
  'preview.error.iosStoreAppLoadFailure':
    'Não foi possível carregar a aplicação. Consulte a consola para mais informações',
  'preview.android.alert.appUi.cancel': 'Cancelar',
  'preview.android.inAppBrowser.appUi.pageTitleLoading': 'A carregar...',
  'preview.android.lockscreen.time': 'agora',
  'preview.ios.alert.appUi.cancel': 'Cancelar',
  'preview.ios.alert.appUi.ok': 'OK',
  'preview.ios.inAppBrowser.appUi.done': 'Concluído',
  'preview.ios.inAppBrowser.appUi.notSecure': 'Não seguro —',
  'preview.ios.rate.appUi.rateNow': 'Sim, avaliar agora',
  'preview.ios.rate.appUi.doNotRate': 'Não, obrigado',
  'preview.ios.store.appUi.done': 'OK',
  'preview.ios.store.appUi.install': 'Obter',
  'preview.ios.store.appUi.ratings': '{userRatingCount, number, ::compact-short} Classificações',
  'preview.ios.store.appUi.age': 'Idade',
  'preview.ios.store.appUi.yearsOld': 'Anos',
  'preview.ios.store.appUi.category': 'Categoria',
  'preview.ios.store.appUi.developer': 'Programador',
  'preview.ios.store.appUi.whatsNew': 'Novidades',
  'preview.ios.store.appUi.historyVersion': 'Versão {version}',
  'preview.ios.store.appUi.screenshots': 'Capturas de ecrã',
  'preview.ios.lockScreen.time': 'Agora',
  'preview.web.desktop.macos.lockScreen.time': 'agora',
  'preview.web.desktop.macos.lockScreen.settings': 'Definições',
  'preview.web.desktop.macos.lockScreen.options': 'Opções',
};
