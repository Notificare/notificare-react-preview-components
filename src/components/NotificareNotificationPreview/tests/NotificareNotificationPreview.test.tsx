import { fireEvent, render, screen } from '@testing-library/react';
import NotificareNotificationPreview from '../NotificareNotificationPreview';
import {
  alertNotificationMock,
  alertNotificationWithActionsMock,
  applicationMock,
  appRecommendationNotificationMock,
  configKeysMock,
  html5VideoNotificationMock,
  imageNotificationMock,
  inAppBrowserNotificationMock,
  invalidApplicationMock,
  invalidNotificationMock,
  mapNotificationMock,
  passbookNotificationMock,
  rateNotificationMock,
  webPageNotificationMock,
  webViewNotificationMock,
  webViewNotificationWithActionsMock,
} from './mocks';
import '@testing-library/jest-dom';

describe('NotificareNotificationPreview', () => {
  /* Controls */

  test('when showControls is true, it renders the controls', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={true}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'android-lockscreen'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const controls = screen.queryByTestId('controls');
    expect(controls).toBeInTheDocument();
  });

  test("when showControls is false, it doesn't render the controls", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'android-lockscreen'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const controls = screen.queryByTestId('controls');
    expect(controls).not.toBeInTheDocument();
  });

  /* Android Lock Screen */

  test("when the preview variant is 'android-lockscreen', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'android-lockscreen'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-lock-screen-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  /* Android Lock Screen Expanded */

  test("when the preview variant is 'android-lockscreen-expanded', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'android-lockscreen-expanded'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-lock-screen-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  /* Android App UI */

  test("when the preview variant is 'android-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-text-alert-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Rate notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={rateNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-rate-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-web-view-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={html5VideoNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-video-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={imageNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-images-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's an In App Browser notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={inAppBrowserNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-in-app-browser-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-url-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={mapNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-map-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a Passbook notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={passbookNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('android-app-ui-passbook-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'android-app-ui' and it's a App Recommendation notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={appRecommendationNotificationMock}
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId(
      'android-app-ui-app-recommendation-notification',
    );
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  /* iOS Lock Screen */

  test("when the preview variant is 'ios-lockscreen', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'ios-lockscreen'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-lock-screen-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  /* iOS Lock Screen Expanded */

  test("when the preview variant is 'ios-lockscreen-expanded', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'ios-lockscreen-expanded'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-lock-screen-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  /* iOS App UI */

  test("when the preview variant is 'ios-app-ui' and it's an Alert notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-text-alert-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Rate notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={rateNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-rate-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-web-view-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={html5VideoNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-video-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={imageNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-images-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's an In App Browser notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={inAppBrowserNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-in-app-browser-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-url-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={mapNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-map-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a Passbook notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={passbookNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-passbook-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'ios-app-ui' and it's a App Recommendation notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={appRecommendationNotificationMock}
        application={applicationMock}
        variant={'ios-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('ios-app-ui-app-recommendation-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  /* Web Desktop macOS */

  test("when the preview variant is 'web-desktop-macos', it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={applicationMock}
        variant={'web-desktop-macos'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const notificationPreview = screen.queryByTestId('web-mac-os-notification');
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-desktop-macos', the notification has actions and the 'Options' button is pressed, it shows the actions as expected", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationWithActionsMock}
        application={applicationMock}
        variant={'web-desktop-macos'}
        configKeys={configKeysMock}
      />,
    );

    const notificationPreview = screen.getByTestId('web-mac-os-notification');
    fireEvent.mouseEnter(notificationPreview);

    const settingsButton = screen.getByTestId('web-mac-os-settings-button');
    fireEvent.click(settingsButton);

    const action1 = screen.queryByTestId('web-mac-os-options-action-0');
    const action2 = screen.queryByTestId('web-mac-os-options-action-1');

    // ASSERT
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  test("when the preview variant is 'web-desktop-macos', the notification is expandable, has actions and the expand button is pressed, it shows the actions as expected", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationWithActionsMock}
        application={applicationMock}
        variant={'web-desktop-macos'}
        configKeys={configKeysMock}
      />,
    );

    const notificationPreview = screen.getByTestId('web-mac-os-notification');
    fireEvent.mouseEnter(notificationPreview);

    const expandButton = screen.getByTestId('web-mac-os-expand-button');
    fireEvent.click(expandButton);

    const action1 = screen.queryByTestId('web-mac-os-expanded-action-0');
    const action2 = screen.queryByTestId('web-mac-os-expanded-action-1');

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
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-text-alert-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationMock}
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-web-view-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={html5VideoNotificationMock}
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-video-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={imageNotificationMock}
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-image-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock}
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-url-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={mapNotificationMock}
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('android-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-map-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-android-app-ui' and the notification has actions, it renders them as expected", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationWithActionsMock}
        application={applicationMock}
        variant={'web-android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const action1 = screen.queryByTestId('web-mobile-app-ui-action-0');
    const action2 = screen.queryByTestId('web-mobile-app-ui-action-1');
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
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-text-alert-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Web View notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationMock}
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-web-view-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Video notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={html5VideoNotificationMock}
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-video-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's an Image notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={imageNotificationMock}
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-image-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Web Page notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webPageNotificationMock}
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-url-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and it's a Map notification, it renders the respective preview", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={mapNotificationMock}
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const phoneBackground = screen.queryByTestId('ios-phone-background');
    const notificationPreview = screen.queryByTestId('web-mobile-app-ui-map-notification');
    expect(phoneBackground).toBeInTheDocument();
    expect(notificationPreview).toBeInTheDocument();
  });

  test("when the preview variant is 'web-iphone-app-ui' and the notification has actions, it renders them as expected", () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={webViewNotificationWithActionsMock}
        application={applicationMock}
        variant={'web-iphone-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const action1 = screen.queryByTestId('web-mobile-app-ui-action-0');
    const action2 = screen.queryByTestId('web-mobile-app-ui-action-1');
    expect(action1).toHaveTextContent('Go to Notificare website');
    expect(action2).toHaveTextContent('Make a call');
  });

  /* Invalid Notification */

  test('when the notification is invalid, it shows an error alert as expected', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={invalidNotificationMock} // has invalid type
        application={applicationMock}
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const previewError = screen.queryByTestId('notificare-notification-preview-error');
    const previewErrorMessage = screen.queryByTestId(
      'notificare-notification-preview-error-message',
    );

    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent('→ Invalid Notification');
  });

  /* Invalid Application */

  test('when the application is invalid, it shows an error alert as expected', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={alertNotificationMock}
        application={invalidApplicationMock} // has invalid app name
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const previewError = screen.queryByTestId('notificare-notification-preview-error');
    const previewErrorMessage = screen.queryByTestId(
      'notificare-notification-preview-error-message',
    );

    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent('→ Invalid Application');
  });

  /* Invalid Notification && Application */

  test('when both notification and application are invalid, it shows an error alert as expected', () => {
    // ACT
    render(
      <NotificareNotificationPreview
        showControls={false}
        notification={invalidNotificationMock} // has invalid type
        application={invalidApplicationMock} // has invalid app name
        variant={'android-app-ui'}
        configKeys={configKeysMock}
      />,
    );

    // ASSERT
    const previewError = screen.queryByTestId('notificare-notification-preview-error');
    const previewErrorMessage = screen.queryByTestId(
      'notificare-notification-preview-error-message',
    );

    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent('→ Invalid Notification & Application');
  });
});
