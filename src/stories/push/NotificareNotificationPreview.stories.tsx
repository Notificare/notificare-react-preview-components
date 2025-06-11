import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificareNotificationPreview } from '~/components';
import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';
import {
  alertWithAttachment,
  alertWithoutAttachment,
  alertWithMultipleActions,
  alertWithSingleAction,
} from './variants/Alert';
import { imageMultiple, imageSingle } from './variants/Image';
import { inAppBrowser } from './variants/InAppBrowser';
import { invalid } from './variants/Invalid';
import { mapWithSingleMarker, mapWithTwoMarkers } from './variants/Map';
import { passbook } from './variants/Passbook';
import { rate } from './variants/Rate';
import { appStore, googlePlaySearchStore } from './variants/Store';
import { url, urlWithAction, urlWithActionsAndActionableMarkup } from './variants/Url';
import { videoHTML5, videoVimeo, videoYouTube } from './variants/Video';
import {
  webView,
  webViewWithMultipleActions,
  webViewWithMultipleActionsAndActionableMarkup,
} from './variants/WebView';

const defaultArgs: Partial<NotificareNotificationPreviewProps> = {
  applicationId: '618d0f4edc09fbed1864e8d0',
  showControls: true,
  serviceKey: import.meta.env.VITE_SERVICE_KEY,
  googleMapsAPIKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
};

const meta = {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
  args: defaultArgs,
} satisfies Meta<typeof NotificareNotificationPreview>;
export default meta;

type Story = StoryObj<typeof meta>;

/* STORIES */

/* ALERT */
export const AlertWithAttachment: Story = {
  name: 'Alert - with attachment',
  args: alertWithAttachment,
};

export const AlertWithoutAttachment: Story = {
  name: 'Alert - without attachment',
  args: alertWithoutAttachment,
};

export const AlertWithSingleAction: Story = {
  name: 'Alert - with single action',
  args: alertWithSingleAction,
};

export const AlertWithMultipleActions: Story = {
  name: 'Alert - with multiple actions',
  args: alertWithMultipleActions,
};

/* IMAGE */
export const ImageSingle: Story = {
  name: 'Image - with single image',
  args: imageSingle,
};

export const ImageMultiple: Story = {
  name: 'Image - with two images',
  args: imageMultiple,
};

/* IN-APP BROWSER */
export const InAppBrowser: Story = {
  name: 'InAppBrowser',
  args: inAppBrowser,
};

/* MAP */
export const MapWithSingleMarker: Story = {
  name: 'Map - with single marker',
  args: mapWithSingleMarker,
};

export const MapWithTwoMarkers: Story = {
  name: 'Map - with two markers',
  args: mapWithTwoMarkers,
};

/* PASSBOOK */
export const Passbook: Story = { args: passbook };

/* RATE */
export const Rate: Story = { args: rate };

/* STORE */
export const GooglePlaySearchStore: Story = {
  name: 'Store - Google Play Search',
  args: googlePlaySearchStore,
};

export const AppStore: Story = {
  name: 'Store - App Store',
  args: appStore,
};

/* URL */
export const Url: Story = {
  name: 'URL',
  args: url,
};

export const UrlWithAction: Story = {
  name: 'URL - with single action',
  args: urlWithAction,
};

export const UrlWithActionsAndActionableMarkup: Story = {
  name: 'URL - with single action and Actionable Markup',
  args: urlWithActionsAndActionableMarkup,
};

/* VIDEO */
export const VideoHtml5: Story = {
  name: 'Video - HTML5',
  args: videoHTML5,
};

export const VideoVimeo: Story = {
  name: 'Video - Vimeo',
  args: videoVimeo,
};

export const VideoYoutube: Story = {
  name: 'Video - YouTube',
  args: videoYouTube,
};

/* WEB VIEW */
export const WebView: Story = {
  name: 'WebView',
  args: webView,
};

export const WebViewWithMultipleActions: Story = {
  name: 'WebView - with multiple actions',
  args: webViewWithMultipleActions,
};

export const WebViewWithMultipleActionsAndActionableMarkup: Story = {
  name: 'WebView -  with multiple actions and Actionable Markup',
  args: webViewWithMultipleActionsAndActionableMarkup,
};

/* INVALID */
export const Invalid: Story = { args: invalid };
