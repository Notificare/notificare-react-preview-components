import { act } from 'react';
import { waitFor } from '@storybook/test';
import { fireEvent, render, screen } from '@testing-library/react';
import { getPushAPIHost, setPushAPIHost } from '../../../config/api';
import { TEST_PUSH_API_HOST } from '../../../constants/constants';
import NotificareNotificationPreview from '../NotificareNotificationPreview';
import {
  alertNotificationMock,
  appRecommendationNotificationMock,
  html5VideoNotificationMock,
  imageNotificationMock,
  inAppBrowserNotificationMock,
  invalidNotificationMock,
  mapNotificationMock,
  passbookNotificationMock,
  rateNotificationMock,
  webPageNotificationMock,
  webViewNotificationMock,
} from './mocks';
import '@testing-library/jest-dom';

describe('NotificareNotificationPreview', () => {
  beforeAll(() => {
    setPushAPIHost(TEST_PUSH_API_HOST);
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
        notification={alertNotificationMock}
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
        notification={alertNotificationMock}
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
        notification={alertNotificationMock}
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
        uri: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...alertNotificationMock, attachments }}
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
        notification={alertNotificationMock}
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
        uri: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...alertNotificationMock, attachments }}
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
        notification={alertNotificationMock}
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
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={rateNotificationMock}
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
        notification={webViewNotificationMock}
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
        notification={html5VideoNotificationMock}
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
        notification={imageNotificationMock}
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
        notification={inAppBrowserNotificationMock}
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
        notification={webPageNotificationMock}
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
        notification={mapNotificationMock}
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
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={passbookNotificationMock}
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
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={appRecommendationNotificationMock}
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
        notification={{ ...alertNotificationMock, actions }}
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
        notification={{ ...passbookNotificationMock, actions }}
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
        notification={{ ...imageNotificationMock, actions }}
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
        notification={{ ...imageNotificationMock, actions }}
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
        notification={{ ...mapNotificationMock, actions }}
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
      if (url === `${getPushAPIHost()}/proxy/?url=https://notificare.com/`) {
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
        notification={{ ...webPageNotificationMock, actions }}
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
      if (url === `${getPushAPIHost()}/proxy/?url=https://notificare.com/`) {
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
        notification={{ ...webPageNotificationMock, actions }}
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
        notification={{ ...webViewNotificationMock, actions, content }}
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
        notification={{ ...webPageNotificationMock, actions, content }}
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('android-app-ui-navigation-bar-options-button');

    // ASSERT
    expect(optionsButton).not.toBeInTheDocument();
  });

  /* iOS Lock Screen */

  test("when the preview variant is 'ios-lockscreen', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
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
        uri: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...alertNotificationMock, attachments }}
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
        notification={alertNotificationMock}
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
        uri: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ];

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...alertNotificationMock, attachments }}
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
        notification={alertNotificationMock}
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
        notification={rateNotificationMock}
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
        notification={webViewNotificationMock}
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
        notification={html5VideoNotificationMock}
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
        notification={imageNotificationMock}
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
        notification={inAppBrowserNotificationMock}
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
        notification={webPageNotificationMock}
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
        notification={mapNotificationMock}
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
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={passbookNotificationMock}
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
        notification={appRecommendationNotificationMock}
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
        notification={{ ...alertNotificationMock, actions }}
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
        notification={{ ...alertNotificationMock, actions }}
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
        notification={{ ...passbookNotificationMock, actions }}
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
        notification={{ ...imageNotificationMock, actions }}
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
        notification={{ ...imageNotificationMock, actions }}
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
        notification={{ ...mapNotificationMock, actions }}
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
      if (url === `${getPushAPIHost()}/proxy/?url=https://notificare.com/`) {
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
        notification={{ ...webPageNotificationMock, actions }}
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
      if (url === `${getPushAPIHost()}/proxy/?url=${url}`) {
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
        notification={{ ...webPageNotificationMock, actions }}
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
        notification={{ ...webViewNotificationMock, actions, content }}
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
        notification={{ ...webPageNotificationMock, actions, content }}
        variant={'ios-app-ui'}
        serviceKey="123"
      />,
    );

    const optionsButton = screen.queryByTestId('ios-app-ui-title-bar-options-button');

    // ASSERT
    expect(optionsButton).not.toBeInTheDocument();
  });

  /* Web Desktop macOS */

  test("when the preview variant is 'web-desktop-macos', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
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
        notification={{ ...webViewNotificationMock, actions }}
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
        uri: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea`,
        mimeType: 'image/jpeg',
      },
    ]; // add attachments so the notification becomes expandable

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={{ ...alertNotificationMock, actions, attachments }}
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
        notification={alertNotificationMock}
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
        notification={webViewNotificationMock}
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
        notification={html5VideoNotificationMock}
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
        notification={imageNotificationMock}
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
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock}
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
        notification={mapNotificationMock}
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
        notification={inAppBrowserNotificationMock}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('notificare-push-unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Rate notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={rateNotificationMock}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('notificare-push-unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a App Recommendation notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={appRecommendationNotificationMock}
        variant={'web-android-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('notificare-push-unavailable-preview');

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
        notification={{ ...webViewNotificationMock, actions }}
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

  /* Web Iphone App UI */

  test("when the preview variant is 'web-iphone-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
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
        notification={webViewNotificationMock}
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
        notification={html5VideoNotificationMock}
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
        notification={imageNotificationMock}
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
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock}
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
        notification={mapNotificationMock}
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
        notification={inAppBrowserNotificationMock}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('notificare-push-unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Rate notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={rateNotificationMock}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('notificare-push-unavailable-preview');

    // ASSERT
    expect(unavailablePreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a App Recommendation notification, it shows a message saying that the preview is not available", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={appRecommendationNotificationMock}
        variant={'web-iphone-app-ui'}
        serviceKey="123"
      />,
    );

    const unavailablePreview = screen.queryByTestId('notificare-push-unavailable-preview');

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
        notification={{ ...webViewNotificationMock, actions }}
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

  /* Invalid Notification */

  test('when the notification is invalid, it shows an error message as expected', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={invalidNotificationMock} // has invalid type
        variant={'android-app-ui'}
        serviceKey="123"
      />,
    );

    const previewError = screen.queryByTestId('notificare-push-unavailable-preview');
    const previewErrorMessage = screen.queryByTestId(
      'notificare-push-unavailable-preview-reason-text',
    );

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
        notification={webPageNotificationMock} // needs to fetch a webshot from the given URL
        serviceKey="123"
        variant={'android-app-ui'}
      />,
    );

    await act(async () => jest.runAllTimers()); // skip timers;

    const loadingIcon = screen.getByTestId('loading-icon');

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
        notification={webPageNotificationMock} // needs to fetch a webshot from the given URL
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
      if (url === `${getPushAPIHost()}/proxy/?url=https://notificare.com/`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => '<p> html example </p>',
        } as Response);
      }

      // Request webshot mock
      if (url === `${getPushAPIHost()}/webshot?apiKey=123`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => ({ webshot: { id: '1' } }),
        } as Response);
      }

      // Check webshot request status mock
      if (url === `${getPushAPIHost()}/webshot/1?apiKey=123`) {
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
      if (url === `${getPushAPIHost()}/webshot/1/result?apiKey=123`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          blob: async () => new Blob(['fake-image-data'], { type: 'image/png' }),
        } as Response);
      }

      return new Promise(() => {}); // fetch pending
    });

    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock} // needs to fetch a webshot from the given URL
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
});
