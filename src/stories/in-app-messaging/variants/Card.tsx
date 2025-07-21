import { NotificareInAppMessagePreviewProps } from '~/components/NotificareInAppMessagePreview/NotificareInAppMessagePreview';

export const CARD: NotificareInAppMessagePreviewProps = {
  inAppMessage: {
    type: 're.notifica.inappmessage.Card',
    title: '30% off on selected products',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    image:
      'https://push-test.notifica.re/upload/notifications/b3e6ff1b950a5be03d6d4fe6fa9194c8968663cd264fa042cca3d6f3f974d53f/917c269826679e9e33b23705171a6cca7c3b17a4ec61b135d8f1d4126f42e93c',
    primaryAction: {
      label: 'Continue',
      destructive: false,
    },
    secondaryAction: {
      label: 'Cancel',
      destructive: true,
    },
  },
};
