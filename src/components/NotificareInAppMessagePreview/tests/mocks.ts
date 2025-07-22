import { NotificareInAppMessage } from '~/models';

export const INVALID_IN_APP_MESSAGE_MOCK: NotificareInAppMessage = {
  type: 'invalid-type',
  title: 'Title',
  message: 'Message',
  image: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
};

export const BANNER_MESSAGE_MOCK: NotificareInAppMessage = {
  type: 're.notifica.inappmessage.Banner',
  title: 'Title',
  message: 'Message',
  image: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
};

export const CARD_MESSAGE_MOCK: NotificareInAppMessage = {
  type: 're.notifica.inappmessage.Card',
  title: 'Title',
  message: 'Message',
  image: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
  primaryAction: {
    label: 'Primary Action Label',
    destructive: false,
  },
};

export const CARD_MESSAGE_WITH_SECONDARY_ACTION_MOCK: NotificareInAppMessage = {
  type: 're.notifica.inappmessage.Card',
  title: 'Title',
  message: 'Message',
  image: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
  primaryAction: {
    label: 'Primary Action Label',
    destructive: false,
  },
  secondaryAction: {
    label: 'Secondary Action Label',
    destructive: false,
  },
};

export const CARD_MESSAGE_WITH_DESTRUCTIVE_PRIMARY_ACTION_MOCK: NotificareInAppMessage = {
  type: 're.notifica.inappmessage.Card',
  title: 'Title',
  message: 'Message',
  image: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
  primaryAction: {
    label: 'Primary Action Label',
    destructive: true,
  },
};

export const FULLSCREEN_MESSAGE_MOCK: NotificareInAppMessage = {
  type: 're.notifica.inappmessage.Fullscreen',
  title: 'Title',
  message: 'Message',
  image: 'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
};
