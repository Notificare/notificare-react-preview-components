import { render, screen } from '@testing-library/react';
import { NotificareInAppMessagePreview } from '~/components';
import {
  BANNER_MESSAGE_MOCK,
  CARD_MESSAGE_MOCK,
  CARD_MESSAGE_WITH_DESTRUCTIVE_PRIMARY_ACTION_MOCK,
  CARD_MESSAGE_WITH_SECONDARY_ACTION_MOCK,
  FULLSCREEN_MESSAGE_MOCK,
  INVALID_IN_APP_MESSAGE_MOCK,
} from '~/components/NotificareInAppMessagePreview/tests/mocks';
import { PUSH_API_TEST_HOST, setPushAPIHost } from '~/internal/network/api';
import '@testing-library/jest-dom';

describe('NotificareInAppMessagePreview', () => {
  beforeAll(() => {
    setPushAPIHost(PUSH_API_TEST_HOST);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  /* Banner */

  test("when the in-app message type is 're.notifica.inappmessage.Banner', it renders the respective preview as expected", () => {
    // ACT
    render(<NotificareInAppMessagePreview inAppMessage={BANNER_MESSAGE_MOCK} />);

    const bannerPreview = screen.queryByTestId('in-app-banner-preview-wrapper');
    const bannerPreviewImage = screen.queryByTestId('in-app-banner-preview-image');
    const bannerPreviewTitle = screen.queryByTestId('in-app-banner-preview-title');
    const bannerPreviewMessage = screen.queryByTestId('in-app-banner-preview-message');

    // ASSERT
    expect(bannerPreview).toBeInTheDocument();
    expect(bannerPreviewImage).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
    );
    expect(bannerPreviewTitle).toHaveTextContent('Title');
    expect(bannerPreviewMessage).toHaveTextContent('Message');
  });

  /* Card */

  test("when the in-app message type is 're.notifica.inappmessage.Card', it renders the respective preview as expected", () => {
    // ACT
    render(<NotificareInAppMessagePreview inAppMessage={CARD_MESSAGE_MOCK} />);

    const cardPreview = screen.queryByTestId('in-app-card-preview-wrapper');
    const cardPreviewImage = screen.queryByTestId('in-app-card-preview-image');
    const cardPreviewTitle = screen.queryByTestId('in-app-card-preview-title');
    const cardPreviewMessage = screen.queryByTestId('in-app-card-preview-message');
    const cardPreviewPrimaryActionLabel = screen.queryByTestId(
      'in-app-card-preview-primary-action-label',
    );

    // ASSERT
    expect(cardPreview).toBeInTheDocument();
    expect(cardPreviewImage).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
    );
    expect(cardPreviewTitle).toHaveTextContent('Title');
    expect(cardPreviewMessage).toHaveTextContent('Message');
    expect(cardPreviewPrimaryActionLabel).toHaveTextContent('Primary Action Label');
  });

  test("when the in-app message type is 're.notifica.inappmessage.Card' and it has a secondary action, it renders it as expected", () => {
    // ACT
    render(
      <NotificareInAppMessagePreview inAppMessage={CARD_MESSAGE_WITH_SECONDARY_ACTION_MOCK} />,
    );

    const cardPreviewSecondaryActionLabel = screen.queryByTestId(
      'in-app-card-preview-secondary-action-label',
    );

    // ASSERT
    expect(cardPreviewSecondaryActionLabel).toHaveTextContent('Secondary Action Label');
  });

  test("when the in-app message type is 're.notifica.inappmessage.Card' and the primary action is destructive, it renders the action button label in red as expected", () => {
    // ACT
    render(
      <NotificareInAppMessagePreview
        inAppMessage={CARD_MESSAGE_WITH_DESTRUCTIVE_PRIMARY_ACTION_MOCK}
      />,
    );

    const cardPreviewPrimaryActionLabel = screen.queryByTestId(
      'in-app-card-preview-primary-action-label',
    );

    // ASSERT
    expect(cardPreviewPrimaryActionLabel).toHaveClass(
      'notificare__in-app__card__action-button--destructive',
    );
  });

  /* Fullscreen */

  test("when the in-app message type is 're.notifica.inappmessage.Fullscreen', it renders the respective preview as expected", () => {
    // ACT
    render(<NotificareInAppMessagePreview inAppMessage={FULLSCREEN_MESSAGE_MOCK} />);

    const fullscreenPreview = screen.queryByTestId('in-app-fullscreen-preview-wrapper');
    const fullscreenPreviewImage = screen.queryByTestId('in-app-fullscreen-preview-image');
    const fullscreenPreviewTitle = screen.queryByTestId('in-app-fullscreen-preview-title');
    const fullscreenPreviewMessage = screen.queryByTestId('in-app-fullscreen-preview-message');

    // ASSERT
    expect(fullscreenPreview).toBeInTheDocument();
    expect(fullscreenPreviewImage).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/1728060?s=200&v=4',
    );
    expect(fullscreenPreviewTitle).toHaveTextContent('Title');
    expect(fullscreenPreviewMessage).toHaveTextContent('Message');
  });

  /* Invalid in-app message */

  test('when the in-app message is invalid, it shows an error message as expected', () => {
    // ACT
    render(<NotificareInAppMessagePreview inAppMessage={INVALID_IN_APP_MESSAGE_MOCK} />); // has invalid type

    const previewError = screen.queryByTestId('unavailable-preview');
    const previewErrorMessage = screen.queryByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent('→ Invalid in-app message');
  });

  test('when an invalid locale is provided, it shows an error message as expected', () => {
    // ACT
    render(<NotificareInAppMessagePreview inAppMessage={CARD_MESSAGE_MOCK} locale="abc" />); // has invalid locale

    const previewError = screen.queryByTestId('unavailable-preview');
    const previewErrorMessage = screen.queryByTestId('unavailable-preview-reason-text');

    // ASSERT
    expect(previewError).toBeInTheDocument();
    expect(previewErrorMessage).toHaveTextContent(
      '→ The locale you chose is invalid. Choose a different one and try again',
    );
  });
});
