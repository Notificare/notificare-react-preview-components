import { fireEvent, render, screen } from '@testing-library/react';
import { NotificareOnboardingPreview } from '~/components';
import {
  DIALOG_ONBOARDING_APPLICATION_INFO_MOCK,
  FLOATING_BUTTON_BOTTOM_END_ONBOARDING_APPLICATION_INFO_MOCK,
  FLOATING_BUTTON_BOTTOM_START_ONBOARDING_APPLICATION_INFO_MOCK,
  FLOATING_BUTTON_TOP_END_ONBOARDING_APPLICATION_INFO_MOCK,
  FLOATING_BUTTON_TOP_START_ONBOARDING_APPLICATION_INFO_MOCK,
  INVALID_ONBOARDING_APPLICATION_INFO_MOCK,
} from '~/components/NotificareOnboardingPreview/tests/mocks';
import { PUSH_API_TEST_HOST, setPushAPIHost } from '~/internal/network/api';
import { ONBOARDING_TRANSLATIONS } from '~/locales/onboarding/en';
import { ONBOARDING_TRANSLATIONS_FR } from '~/locales/onboarding/fr';
import { ONBOARDING_TRANSLATIONS_PT } from '~/locales/onboarding/pt';

import '@testing-library/jest-dom';

describe('NotificareOnboardingPreview', () => {
  beforeAll(() => {
    setPushAPIHost(PUSH_API_TEST_HOST);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  /* Dialog */

  test("when the launch configuration has 'autoOnboardingOptions', it renders a dialog as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={DIALOG_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    );

    const dialogPreview = screen.getByTestId('onboarding-dialog-preview-wrapper');
    const dialogPreviewIcon = screen.getByTestId('onboarding-dialog-preview-icon');
    const dialogPreviewTitle = screen.getByTestId('onboarding-dialog-preview-title');
    const dialogPreviewMessage = screen.getByTestId('onboarding-dialog-preview-message');
    const dialogPreviewAcceptButton = screen.getByTestId('onboarding-dialog-accept-button');
    const dialogPreviewCancelButton = screen.getByTestId('onboarding-dialog-cancel-button');

    // ASSERT
    expect(dialogPreview).toBeInTheDocument();
    expect(dialogPreviewIcon).toHaveAttribute(
      'src',
      'https://push-test.notifica.re/upload/website-push/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/0eda6e82ad04fedee79c0771b92ea30c121e84167f0e2ec6e4064997b4e36a23',
    );
    expect(dialogPreviewTitle).toHaveTextContent('My App');
    expect(dialogPreviewMessage).toHaveTextContent(
      'Would you like to receive notifications from our website?',
    );
    expect(dialogPreviewAcceptButton).toHaveTextContent('Yes');
    expect(dialogPreviewCancelButton).toHaveTextContent('No, thanks');
  });

  /* Floating Button */

  test("when the launch configuration has 'floatingButtonOptions' with bottom-end alignment configuration, it renders a floating button as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_BOTTOM_END_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');

    // ASSERT
    expect(floatingButtonPreview).toBeInTheDocument();
    expect(floatingButtonPreview).toHaveClass(
      'notificare__onboarding__floating-button--end',
      'notificare__onboarding__floating-button--bottom',
    );
  });

  test("when the launch configuration has 'floatingButtonOptions' with bottom-start alignment configuration, it renders a floating button as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_BOTTOM_START_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');

    // ASSERT
    expect(floatingButtonPreview).toBeInTheDocument();
    expect(floatingButtonPreview).toHaveClass(
      'notificare__onboarding__floating-button--start',
      'notificare__onboarding__floating-button--bottom',
    );
  });

  test("when the launch configuration has 'floatingButtonOptions' with top-end alignment configuration, it renders a floating button as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_TOP_END_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');

    // ASSERT
    expect(floatingButtonPreview).toBeInTheDocument();
    expect(floatingButtonPreview).toHaveClass(
      'notificare__onboarding__floating-button--end',
      'notificare__onboarding__floating-button--top',
    );
  });

  test("when the launch configuration has 'floatingButtonOptions' with top-start alignment configuration, it renders a floating button as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_TOP_START_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');

    // ASSERT
    expect(floatingButtonPreview).toBeInTheDocument();
    expect(floatingButtonPreview).toHaveClass(
      'notificare__onboarding__floating-button--start',
      'notificare__onboarding__floating-button--top',
    );
  });

  test("when the launch configuration has 'floatingButtonOptions', 'permissionStatus' is 'default' and the user hovers the cursor over the button, it renders the floating button tooltip as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_BOTTOM_END_ONBOARDING_APPLICATION_INFO_MOCK}
        permissionStatus="default"
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');
    fireEvent.mouseEnter(floatingButtonPreview);

    const floatingButtonPreviewTooltip = screen.getByTestId(
      'onboarding-floating-button-preview-tooltip',
    );

    // ASSERT
    expect(floatingButtonPreviewTooltip).toHaveTextContent(
      'Click here to enable push notifications',
    );
  });

  test("when the launch configuration has 'floatingButtonOptions', 'permissionStatus' is 'granted' and the user hovers the cursor over the button, it renders the floating button tooltip as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_BOTTOM_END_ONBOARDING_APPLICATION_INFO_MOCK}
        permissionStatus="granted"
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');
    fireEvent.mouseEnter(floatingButtonPreview);

    const floatingButtonPreviewTooltip = screen.getByTestId(
      'onboarding-floating-button-preview-tooltip',
    );

    // ASSERT
    expect(floatingButtonPreviewTooltip).toHaveTextContent("You've granted push notifications");
  });

  test("when the launch configuration has 'floatingButtonOptions', 'permissionStatus' is 'denied' and the user hovers the cursor over the button, it renders the floating button tooltip as expected", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={FLOATING_BUTTON_BOTTOM_END_ONBOARDING_APPLICATION_INFO_MOCK}
        permissionStatus="denied"
        serviceKey="123"
      />,
    );

    const floatingButtonPreview = screen.getByTestId('onboarding-floating-button-preview');
    fireEvent.mouseEnter(floatingButtonPreview);

    const floatingButtonPreviewTooltip = screen.getByTestId(
      'onboarding-floating-button-preview-tooltip',
    );

    // ASSERT
    expect(floatingButtonPreviewTooltip).toHaveTextContent("You've denied push notifications");
  });

  /* Invalid application info */

  test('when the application info is invalid, it shows an error message as expected', () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    );

    const previewError = screen.queryByTestId('unavailable-preview');
    const previewErrorMessage = screen.queryByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent('→ Invalid application information');
  });

  /* Localization */

  test('when consumer provides an invalid locale, it shows an error message as expected', () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={DIALOG_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="abc"
        serviceKey="123"
      />,
    );

    const errorMessage = screen.queryByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      '→ The locale you chose is invalid. Choose a different one and try again',
    );
  });

  test("when consumer doesn't provide any locale, it loads default messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'en', it loads en messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="en"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'en-GB', it loads en messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="en-GB"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'fr', it loads fr messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="fr"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS_FR['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'fr-FR', it loads fr messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="fr-FR"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS_FR['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'fr-BE', it loads fr messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="fr-BE"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS_FR['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'pt', it loads pt messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="pt"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS_PT['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test("when consumer provides locale 'pt-PT', it loads pt messages", () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        locale="pt-PT"
        serviceKey="123"
      />,
    ); // has no launch options

    const errorMessage = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(errorMessage).toHaveTextContent(
      ONBOARDING_TRANSLATIONS_PT['preview.error.invalidOnboardingApplicationInfo'],
    );
  });

  test('when custom translations are provided, it uses them as expected', () => {
    // ACT
    render(
      <NotificareOnboardingPreview
        applicationInfo={INVALID_ONBOARDING_APPLICATION_INFO_MOCK}
        translations={{ 'preview.error.invalidOnboardingApplicationInfo': 'Custom' }}
        serviceKey="123"
      />,
    );

    const text = screen.getByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(text).toHaveTextContent('Custom');
  });
});
