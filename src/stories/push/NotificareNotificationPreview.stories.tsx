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

type NotificareNotificationPreviewStory = StoryObj<typeof meta>;

/* STORIES */

/* ALERT */
export const AlertWithAttachment: NotificareNotificationPreviewStory = {
  name: 'Alert - with attachment',
  args: alertWithAttachment,
};

export const AlertWithoutAttachment: NotificareNotificationPreviewStory = {
  name: 'Alert - without attachment',
  args: alertWithoutAttachment,
};

export const AlertWithSingleAction: NotificareNotificationPreviewStory = {
  name: 'Alert - with single action',
  args: alertWithSingleAction,
};

export const AlertWithMultipleActions: NotificareNotificationPreviewStory = {
  name: 'Alert - with multiple actions',
  args: alertWithMultipleActions,
};

/* IMAGE */
export const ImageSingle: NotificareNotificationPreviewStory = {
  name: 'Image - with single image',
  args: imageSingle,
};

export const ImageMultiple: NotificareNotificationPreviewStory = {
  name: 'Image - with two images',
  args: imageMultiple,
};

/* IN-APP BROWSER */
export const InAppBrowser: NotificareNotificationPreviewStory = {
  name: 'InAppBrowser',
  args: inAppBrowser,
};

/* MAP */
export const MapWithSingleMarker: NotificareNotificationPreviewStory = {
  name: 'Map - with single marker',
  args: mapWithSingleMarker,
};

export const MapWithTwoMarkers: NotificareNotificationPreviewStory = {
  name: 'Map - with two markers',
  args: mapWithTwoMarkers,
};

/* PASSBOOK */
export const Passbook: NotificareNotificationPreviewStory = { args: passbook };

/* RATE */
export const Rate: NotificareNotificationPreviewStory = { args: rate };

/* STORE */
export const GooglePlaySearchStore: NotificareNotificationPreviewStory = {
  name: 'Store - Google Play Search',
  args: googlePlaySearchStore,
};

export const AppStore: NotificareNotificationPreviewStory = {
  name: 'Store - App Store',
  args: appStore,
};

/* URL */
export const Url: NotificareNotificationPreviewStory = {
  name: 'URL',
  args: url,
};

export const UrlWithAction: NotificareNotificationPreviewStory = {
  name: 'URL - with single action',
  args: urlWithAction,
};

export const UrlWithActionsAndActionableMarkup: NotificareNotificationPreviewStory = {
  name: 'URL - with single action and Actionable Markup',
  args: urlWithActionsAndActionableMarkup,
};

/* VIDEO */
export const VideoHtml5: NotificareNotificationPreviewStory = {
  name: 'Video - HTML5',
  args: videoHTML5,
};

export const VideoVimeo: NotificareNotificationPreviewStory = {
  name: 'Video - Vimeo',
  args: videoVimeo,
};

export const VideoYoutube: NotificareNotificationPreviewStory = {
  name: 'Video - YouTube',
  args: videoYouTube,
};

/* WEB VIEW */
export const WebView: NotificareNotificationPreviewStory = {
  name: 'WebView',
  args: webView,
};

export const WebViewWithMultipleActions: NotificareNotificationPreviewStory = {
  name: 'WebView - with multiple actions',
  args: webViewWithMultipleActions,
};

export const WebViewWithMultipleActionsAndActionableMarkup: NotificareNotificationPreviewStory = {
  name: 'WebView -  with multiple actions and Actionable Markup',
  args: webViewWithMultipleActionsAndActionableMarkup,
};

/* INVALID */
export const Invalid: NotificareNotificationPreviewStory = { args: invalid };
