import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NotificareNotificationPreview } from '~/components';
import { PUSH_API_TEST_HOST, setPushAPIHost } from '~/internal/network/api';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { PUSH_TRANSLATIONS_FR } from '~/locales/push/fr';
import { PUSH_TRANSLATIONS_PT } from '~/locales/push/pt';
import {
  ALERT_NOTIFICATION_MOCK,
  APP_RECOMMENDATION_NOTIFICATION_MOCK,
  HTML_5_VIDEO_NOTIFICATION_MOCK,
  IMAGE_NOTIFICATION_MOCK,
  IN_APP_BROWSER_NOTIFICATION_MOCK,
  INVALID_NOTIFICATION_MOCK,
  MAP_NOTIFICATION_MOCK,
  NONE_NOTIFICATION_MOCK,
  PASSBOOK_NOTIFICATION_MOCK,
  RATE_NOTIFICATION_MOCK,
  WEB_PAGE_NOTIFICATION_MOCK,
  WEB_VIEW_NOTIFICATION_MOCK,
} from './mocks';

import '@testing-library/jest-dom';

describe('NotificareNotificationPreview', () => {
  beforeAll(() => {
    setPushAPIHost(PUSH_API_TEST_HOST);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  /* Controls */

  test('when showControls is true, it renders the controls', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'android-lockscreen'}
        serviceKey="123"
      />,
    );

    const controls = screen.queryByTestId('controls');

    // ASSERT
    expect(controls).toBeInTheDocument();
  });

  test("when showControls is false, it doesn't render the controls", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'android-lockscreen'}
        serviceKey="123"
      />,
    );

    const controls = screen.queryByTestId('controls');

    // ASSERT
    expect(controls).not.toBeInTheDocument();
  });

  /* Android Lock Screen */

  test("when the preview variant is 'android-lockscreen', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'android-lockscreen'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-lock-screen-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-lockscreen' and there is an attachment, it renders it as expected", () => {
    // ARRANGE
    const attachments = [
      {
        uri: `https://push-test.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, attachments }}
        variant={'android-lockscreen'}
        serviceKey="123"
      />,
    );

    const attachment = screen.queryByTestId('android-lock-screen-notification-media');

    // ASSERT
    expect(attachment).toBeInTheDocument();
  });

  /* Android Lock Screen Expanded */

  test("when the preview variant is 'android-lockscreen-expanded', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'android-lockscreen-expanded'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-lock-screen-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-lockscreen-expanded' and there is an attachment, it renders it as expected", () => {
    // ARRANGE
    const attachments = [
      {
        uri: `https://push-test.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, attachments }}
        variant={'android-lockscreen-expanded'}
        serviceKey="123"
      />,
    );

    const notificationPreviewExpandedMedia = screen.queryByTestId(
      'android-lock-screen-notification-expanded-media',
    );

    // ASSERT
    expect(notificationPreviewExpandedMedia).toBeInTheDocument();
  });

  /* Android App UI */

  test("when the preview variant is 'android-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-text-alert-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Rate notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={RATE_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-rate-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_VIEW_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-web-view-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={HTML_5_VIDEO_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-video-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IMAGE_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-images-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's an In App Browser notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IN_APP_BROWSER_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-in-app-browser-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-url-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={MAP_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
        googleMapsAPIKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-map-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Passbook notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={PASSBOOK_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-passbook-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a App Recommendation notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={APP_RECOMMENDATION_NOTIFICATION_MOCK}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId(
      'android-app-ui-app-recommendation-notification',
    );

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui', it's an Alert notification and it has actions, it shows the actions as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const action1 = screen.queryByTestId('android-app-ui-text-alert-notification-action-0');
    const action2 = screen.queryByTestId('android-app-ui-text-alert-notification-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  test("when the preview variant is 'android-app-ui', it's a Passbook notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...PASSBOOK_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui', it's an Image notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...IMAGE_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui', it's an Image notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...IMAGE_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui', it's a Map notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...MAP_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
        googleMapsAPIKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui', it's a Web Page notification, it has actions and the website hasn't any actionable markup, it shows the options button as expected", async () => {
    // ARRANGE
    global.fetch = jest.fn((url) => {
      if (
        url.toString() ===
        `https://push-test.notifica.re/proxy?apiKey=123&url=https%3A%2F%2Fnotificare.com%2F`
      ) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => '<p> html example </p>',
        } as Response);
      } // mock website fetch so it returns a simple paragraph (<p>), without any actionable markup

      return new Promise(() => {}); // not resolved promise for every other fetch (ignore)
    });

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_PAGE_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    await waitFor(() => expect(optionsButton).toBeInTheDocument());
  });

  test("when the preview variant is 'android-app-ui', it's a Web Page notification, it has actions and the website has actionable markup, it doesn't show the options button", async () => {
    // ARRANGE
    global.fetch = jest.fn((url) => {
      if (
        url.toString() ===
        `https://push-test.notifica.re/proxy?apiKey=123&url=https%3A%2F%2Fnotificare.com%2F`
      ) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => '<a href="/?notificareOpenAction=Go"> Link </a>',
        } as Response);
      } // mock website fetch so it returns a link with the query parameter 'notificareOpenAction'

      return new Promise(() => {}); // not resolved promise for every other fetch (ignore)
    });

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_PAGE_NOTIFICATION_MOCK, actions }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    await waitFor(() => expect(optionsButton).toBeInTheDocument());
  });

  test("when the preview variant is 'android-app-ui', it's a Web View notification, it has actions and the HTML hasn't any actionable markup, it shows the options button as expected", () => {
    // ARRANGE
    const content = [
      {
        type: 're.notifica.content.HTML',
        data: '<p>Example</p>', // a simple paragraph - no actionable markup
      },
    ];

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions, content }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui', it's a Web View notification, it has actions and the HTML has actionable markup, it doesn't show the options button", () => {
    // ARRANGE
    const content = [
      {
        type: 're.notifica.content.HTML',
        data: '<a href="/?notificareOpenAction=Go"> Link </a>', // a link with the query parameter 'notificareOpenAction'
      },
    ];

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions, content }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).not.toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a None notification, it shows an error message as expected", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        notification={NONE_NOTIFICATION_MOCK}
        serviceKey="123"
        variant="android-app-ui"
      />,
    );

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      "→ Previewing notifications of type 're.notifica.notification.None' is not possible in this variant",
    );
  });

  /* iOS Lock Screen */

  test("when the preview variant is 'ios-lockscreen', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'ios-lockscreen'}
        serviceKey="123"
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-lock-screen-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-lockscreen' and there is an attachment, it renders it as expected", () => {
    // ARRANGE
    const attachments = [
      {
        uri: `https://push-test.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, attachments }}
        variant={'ios-lockscreen'}
        serviceKey="123"
      />,
    );

    const attachment = screen.queryByTestId('ios-lock-screen-notification-media');

    // ASSERT
    expect(attachment).toBeInTheDocument();
  });

  /* iOS Lock Screen Expanded */

  test("when the preview variant is 'ios-lockscreen-expanded', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'ios-lockscreen-expanded'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-lock-screen-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-lockscreen-expanded' and there is an attachment, it renders it as expected", () => {
    // ARRANGE
    const attachments = [
      {
        uri: `https://push-test.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, attachments }}
        variant={'ios-lockscreen-expanded'}
        serviceKey="123"
      />,
    );

    const notificationPreviewExpandedMedia = screen.queryByTestId(
      'ios-lock-screen-notification-expanded-media',
    );

    // ASSERT
    expect(notificationPreviewExpandedMedia).toBeInTheDocument();
  });

  /* iOS App UI */

  test("when the preview variant is 'ios-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-text-alert-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Rate notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={RATE_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-rate-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_VIEW_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-web-view-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={HTML_5_VIDEO_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-video-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IMAGE_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-images-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's an In App Browser notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IN_APP_BROWSER_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-in-app-browser-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-url-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={MAP_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
        googleMapsAPIKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-map-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Passbook notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={PASSBOOK_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-passbook-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a App Recommendation notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={APP_RECOMMENDATION_NOTIFICATION_MOCK}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-app-recommendation-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui', it's an Alert notification and it has multiple actions, it shows the actions as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const action1 = screen.queryByTestId('ios-app-ui-text-alert-notification-action-0');
    const action2 = screen.queryByTestId('ios-app-ui-text-alert-notification-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  test("when the preview variant is 'ios-app-ui', it's an Alert notification and it has a single action, it shows the action as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const action = screen.queryByTestId('ios-app-ui-text-alert-notification-single-action');

    // ASSERT
    expect(action).toHaveTextContent('Go to Notificare website');
  });

  test("when the preview variant is 'ios-app-ui', it's a Passbook notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...PASSBOOK_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui', it's an Image notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...IMAGE_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui', it's an Image notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...IMAGE_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui', it's a Map notification and it has actions, it shows the options button as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...MAP_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
        googleMapsAPIKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui', it's a Web Page notification, it has actions and the website hasn't any actionable markup, it shows the options button as expected", async () => {
    // ARRANGE
    global.fetch = jest.fn((url) => {
      if (
        url.toString() ===
        `https://push-test.notifica.re/proxy?apiKey=123&url=https%3A%2F%2Fnotificare.com%2F`
      ) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => '<p> html example </p>',
        } as Response);
      } // mock website fetch so it returns a simple paragraph (<p>), without any actionable markup

      return new Promise(() => {}); // not resolved promise for every other fetch (ignore)
    });

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_PAGE_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    await waitFor(() => expect(optionsButton).toBeInTheDocument());
  });

  test("when the preview variant is 'ios-app-ui', it's a Web Page notification, it has actions and the website has actionable markup, it doesn't show the options button", async () => {
    // ARRANGE
    global.fetch = jest.fn((url) => {
      if (
        url.toString() ===
        `https://push-test.notifica.re/proxy?apiKey=123&url=https%3A%2F%2Fnotificare.com%2F`
      ) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => '<a href="/?notificareOpenAction=Go"> Link </a>',
        } as Response);
      } // mock website fetch so it returns a link with the query parameter 'notificareOpenAction'

      return new Promise(() => {}); // not resolved promise for every other fetch (ignore)
    });

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_PAGE_NOTIFICATION_MOCK, actions }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    await waitFor(() => expect(optionsButton).toBeInTheDocument());
  });

  test("when the preview variant is 'ios-app-ui', it's a Web View notification, it has actions and the HTML hasn't any actionable markup, it shows the options button as expected", () => {
    // ARRANGE
    const content = [
      {
        type: 're.notifica.content.HTML',
        data: '<p>Example</p>', // a simple paragraph - no actionable markup
      },
    ];

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions, content }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui', it's a Web View notification, it has actions and the HTML has actionable markup, it doesn't show the options button", () => {
    // ARRANGE
    const content = [
      {
        type: 're.notifica.content.HTML',
        data: '<a href="/?notificareOpenAction=Go"> Link </a>', // a link with the query parameter 'notificareOpenAction'
      },
    ];

    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions, content }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).not.toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a None notification, it shows an error message as expected", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        notification={NONE_NOTIFICATION_MOCK}
        serviceKey="123"
        variant="ios-app-ui"
      />,
    );

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      "→ Previewing notifications of type 're.notifica.notification.None' is not possible in this variant",
    );
  });

  /* Web Desktop macOS */

  test("when the preview variant is 'web-desktop-macos', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'web-desktop-macos'}
        serviceKey="123"
      />,
    );

    const notificationPreview = screen.queryByTestId('web-desktop-notification');

    // ASSERT
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-desktop-macos', the notification has actions and the 'Options' button is pressed, it shows the actions as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions }}
        variant={'web-desktop-macos'}
        serviceKey="123"
      />,
    );

    const notificationPreview = screen.getByTestId('web-desktop-notification');
    fireEvent.mouseEnter(notificationPreview);

    const settingsButton = screen.getByTestId('web-desktop-settings-button');
    fireEvent.click(settingsButton);

    const action1 = screen.queryByTestId('web-desktop-options-action-0');
    const action2 = screen.queryByTestId('web-desktop-options-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  test("when the preview variant is 'web-desktop-macos', the notification is expandable (has attachment), has actions and the expand button is pressed, it shows the actions as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ];

    const attachments = [
      {
        uri: `https://push-test.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ]; // add attachments so the notification becomes expandable

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...ALERT_NOTIFICATION_MOCK, actions, attachments }}
        variant={'web-desktop-macos'}
        serviceKey="123"
      />,
    );

    const notificationPreview = screen.getByTestId('web-desktop-notification');
    fireEvent.mouseEnter(notificationPreview);

    const expandButton = screen.getByTestId('web-desktop-expand-button');
    fireEvent.click(expandButton);

    const action1 = screen.queryByTestId('web-desktop-expanded-action-0');
    const action2 = screen.queryByTestId('web-desktop-expanded-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  /* Web Android App UI */

  test("when the preview variant is 'web-android-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-text-alert-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_VIEW_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-web-view-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={HTML_5_VIDEO_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-video-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IMAGE_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-image-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-url-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={MAP_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
        googleMapsAPIKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('map-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a In App Browser notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IN_APP_BROWSER_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Rate notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={RATE_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a App Recommendation notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={APP_RECOMMENDATION_NOTIFICATION_MOCK}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and the notification has actions, it renders them as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions }}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const action1 = screen.queryByTestId('web-mobile-app-ui-action-0');
    const action2 = screen.queryByTestId('web-mobile-app-ui-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  test("when the preview variant is 'web-android-app-ui' and it's a None notification, it shows an error message as expected", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        notification={NONE_NOTIFICATION_MOCK}
        serviceKey="123"
        variant="web-android-app-ui"
      />,
    );

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      "→ Previewing notifications of type 're.notifica.notification.None' is not possible in this variant",
    );
  });

  /* Web Iphone App UI */

  test("when the preview variant is 'web-iphone-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={ALERT_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-text-alert-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_VIEW_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-web-view-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={HTML_5_VIDEO_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-video-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IMAGE_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-image-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ARRANGE
    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-url-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={MAP_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
        googleMapsAPIKey="123"
      />,
    );

    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('map-notification');

    // ASSERT
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a In App Browser notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={IN_APP_BROWSER_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Rate notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={RATE_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a App Recommendation notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={APP_RECOMMENDATION_NOTIFICATION_MOCK}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and the notification has actions, it renders them as expected", () => {
    // ARRANGE
    const actions = [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...WEB_VIEW_NOTIFICATION_MOCK, actions }}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const action1 = screen.queryByTestId('web-mobile-app-ui-action-0');
    const action2 = screen.queryByTestId('web-mobile-app-ui-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a None notification, it shows an error message as expected", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        notification={NONE_NOTIFICATION_MOCK}
        serviceKey="123"
        variant="web-iphone-app-ui"
      />,
    );

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      "→ Previewing notifications of type 're.notifica.notification.None' is not possible in this variant",
    );
  });

  /* Invalid Notification */

  test('when the notification is invalid, it shows an error message as expected', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={INVALID_NOTIFICATION_MOCK} // has invalid type
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const previewError = screen.queryByTestId('unavailable-preview');
    const previewErrorMessage = screen.queryByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent('→ Invalid Notification');
  });

  /* Webshot */

  test('when a webshot is loading, it renders a spinning loading icon', async () => {
    // ARRANGE
    jest.useFakeTimers();

    // Don't resolve any fetch
    global.fetch = jest.fn(
      () => new Promise(() => {}), // fetch pending
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK} // needs to fetch a webshot from the given URL
        serviceKey="123"
        variant={'android-app-ui'}
      />,
    );

    await act(async () => jest.runAllTimers()); // skip timers;

    const loadingIcon = screen.getByTestId('loading');

    // ASSERT
    expect(loadingIcon).toBeInTheDocument();
  });

  test('when a webshot fails to be loaded, it renders an error message as expected', async () => {
    // ARRANGE
    jest.useFakeTimers();

    // Fail every fetch
    global.fetch = jest.fn(
      () => Promise.reject(new Error('Fetch failed!')), // fetch fail
    );

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK} // needs to fetch a webshot from the given URL
        serviceKey="123"
        variant={'android-app-ui'}
      />,
    );

    await act(async () => jest.runAllTimers()); // skip timers;

    const previewError = screen.getByTestId('preview-error');

    // ASSERT
    await waitFor(() => expect(previewError).toBeInTheDocument());
  });

  test('when a webshot is made successfully, it renders it as expected', async () => {
    // ARRANGE
    jest.useFakeTimers();
    global.URL.createObjectURL = jest.fn(() => 'blob:http://localhost/fake-object-url');

    global.fetch = jest.fn((url) => {
      // Fetch website mock
      if (
        url.toString() ===
        `https://push-test.notifica.re/proxy?apiKey=123&url=https%3A%2F%2Fnotificare.com%2F`
      ) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => '<p> html example </p>',
        } as Response);
      }

      // Request webshot mock
      if (url.toString() === `https://push-test.notifica.re/webshot?apiKey=123`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => ({ webshot: { id: '1' } }),
        } as Response);
      }

      // Check webshot request status mock
      if (url.toString() === `https://push-test.notifica.re/webshot/1?apiKey=123`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => ({
            webshot: {
              status: 'finished',
            },
          }),
        } as Response);
      }

      // Get webshot mock
      if (url.toString() === `https://push-test.notifica.re/webshot/1/result?apiKey=123`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          blob: async () => new Blob(['fake-image-data'], { type: 'image/png' }),
        } as Response);
      }

      return new Promise(() => {}); // not resolved promise for every other fetch (ignore)
    });

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={WEB_PAGE_NOTIFICATION_MOCK} // needs to fetch a webshot from the given URL
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    // Advance setTimeout (debounce)
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    // Advance setInterval
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    // ASSERT
    await waitFor(() => {
      expect(screen.getByTestId('webshot')).toBeInTheDocument();
    });
  });

  /* Localization */

  test('when consumer provides an invalid locale, it renders an error message as expected', async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="invalid-locale"
      />,
    );

    // get the error message
    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      '→ The locale you chose is invalid. Choose a different one and try again',
    );
  });

  test("when consumer doesn't provide any locale, it loads default messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS['controls.platform']);
  });

  test("when consumer provides locale 'en', it loads en messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="en"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS['controls.platform']);
  });

  test("when consumer provides locale 'en-GB', it loads en messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="en-GB"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS['controls.platform']);
  });

  test("when consumer provides locale 'fr', it loads fr messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="fr"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS_FR['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS_FR['controls.platform']);
  });

  test("when consumer provides locale 'fr-FR', it loads fr messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="fr-FR"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS_FR['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS_FR['controls.platform']);
  });

  test("when consumer provides locale 'fr-BE', it loads fr messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="fr-BE"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS_FR['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS_FR['controls.platform']);
  });

  test("when consumer provides locale 'pt', it loads pt messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="pt"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS_PT['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS_PT['controls.platform']);
  });

  test("when consumer provides locale 'pt-PT', it loads pt messages", async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        locale="pt-PT"
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId(
      `toggle-group-${PUSH_TRANSLATIONS_PT['controls.platform']}`,
    );

    // ASSERT
    expect(platformLabel).toHaveTextContent(PUSH_TRANSLATIONS_PT['controls.platform']);
  });

  test('when custom translations are provided, it uses them as expected', async () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={ALERT_NOTIFICATION_MOCK}
        serviceKey="123"
        translations={{ 'controls.platform': 'Custom' }}
      />,
    );

    // try to get the UI controls platform toggle group label
    const platformLabel = screen.getByTestId('toggle-group-Custom');

    // ASSERT
    expect(platformLabel).toHaveTextContent('Custom');
  });
});
