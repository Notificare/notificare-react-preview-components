import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificareNotificationPreview } from '~/components';
import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';
import { NONE } from '~/stories/push/variants/None';
import {
  URL_RESOLVER_WITH_URL_SCHEME,
  URL_RESOLVER_WITH_HTTP_URL,
  URL_RESOLVER_WITH_HTTP_URL_AND_WEB_VIEW_QUERY_PARAMETER,
  URL_RESOLVER_WITH_DYNAMIC_LINK,
  URL_RESOLVER_WITH_RELATIVE_URL,
} from '~/stories/push/variants/UrlResolver';
import { URL_SCHEME } from '~/stories/push/variants/UrlScheme';
import {
  ALERT_WITH_ATTACHMENT,
  ALERT,
  ALERT_WITH_MULTIPLE_ACTIONS,
  ALERT_WITH_SINGLE_ACTION,
} from './variants/Alert';
import { IMAGE_MULTIPLE, IMAGE_SINGLE } from './variants/Image';
import { IN_APP_BROWSER } from './variants/InAppBrowser';
import { INVALID } from './variants/Invalid';
import { MAP_WITH_SINGLE_MARKER, MAP_WITH_TWO_MARKERS } from './variants/Map';
import { PASSBOOK } from './variants/Passbook';
import { RATE } from './variants/Rate';
import { APP_STORE, GOOGLE_PLAY_SEARCH_STORE, MULTIPLE_STORE } from './variants/Store';
import { URL, URL_WITH_ACTION, URL_WITH_ACTION_AND_ACTIONABLE_MARKUP } from './variants/Url';
import { VIDEO_HTML5, VIDEO_VIMEO, VIDEO_YOUTUBE } from './variants/Video';
import {
  WEB_VIEW,
  WEB_VIEW_WITH_MULTIPLE_ACTIONS,
  WEB_VIEW_WITH_MULTIPLE_ACTIONS_AND_ACTIONABLE_MARKUP,
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
export const Alert: Story = {
  args: ALERT,
};

export const AlertWithAttachment: Story = {
  name: 'Alert - with attachment',
  args: ALERT_WITH_ATTACHMENT,
};

export const AlertWithSingleAction: Story = {
  name: 'Alert - with single action',
  args: ALERT_WITH_SINGLE_ACTION,
};

export const AlertWithMultipleActions: Story = {
  name: 'Alert - with multiple actions',
  args: ALERT_WITH_MULTIPLE_ACTIONS,
};

/* IMAGE */
export const ImageSingle: Story = {
  name: 'Image - with single image',
  args: IMAGE_SINGLE,
};

export const ImageMultiple: Story = {
  name: 'Image - with two images',
  args: IMAGE_MULTIPLE,
};

/* IN-APP BROWSER */
export const InAppBrowser: Story = {
  name: 'InAppBrowser',
  args: IN_APP_BROWSER,
};

/* MAP */
export const MapWithSingleMarker: Story = {
  name: 'Map - with single marker',
  args: MAP_WITH_SINGLE_MARKER,
};

export const MapWithTwoMarkers: Story = {
  name: 'Map - with two markers',
  args: MAP_WITH_TWO_MARKERS,
};

/* NONE */
export const None: Story = {
  args: NONE,
};

/* PASSBOOK */
export const Passbook: Story = { args: PASSBOOK };

/* RATE */
export const Rate: Story = { args: RATE };

/* STORE */
export const GooglePlaySearchStore: Story = {
  name: 'Store - Google Play Search',
  args: GOOGLE_PLAY_SEARCH_STORE,
};

export const AppStore: Story = {
  name: 'Store - App Store',
  args: APP_STORE,
};

export const MultipleStore: Story = {
  name: 'Store - Multiple Stores (App Store/Google Play)',
  args: MULTIPLE_STORE,
};

/* URL */
export const Url: Story = {
  name: 'URL',
  args: URL,
};

export const UrlWithAction: Story = {
  name: 'URL - with single action',
  args: URL_WITH_ACTION,
};

export const UrlWithActionAndActionableMarkup: Story = {
  name: 'URL - with single action and Actionable Markup',
  args: URL_WITH_ACTION_AND_ACTIONABLE_MARKUP,
};

/* URL RESOLVER */
export const UrlResolverWithUrlScheme: Story = {
  name: 'URL Resolver - with custom URL Scheme',
  args: URL_RESOLVER_WITH_URL_SCHEME,
};

export const UrlResolverWithHttpUrl: Story = {
  name: 'URL Resolver - with HTTP URL',
  args: URL_RESOLVER_WITH_HTTP_URL,
};

export const UrlResolverWithHttpUrlAndWebViewQueryParameter: Story = {
  name: 'URL Resolver - with HTTP URL and notificareWebView query parameter',
  args: URL_RESOLVER_WITH_HTTP_URL_AND_WEB_VIEW_QUERY_PARAMETER,
};

export const UrlResolverWithDynamicLink: Story = {
  name: 'URL Resolver - with Dynamic Link',
  args: URL_RESOLVER_WITH_DYNAMIC_LINK,
};

export const UrlResolverWithRelativeUrl: Story = {
  name: 'URL Resolver - with relative URL',
  args: URL_RESOLVER_WITH_RELATIVE_URL,
};

/* URL SCHEME */
export const UrlScheme: Story = {
  name: 'URL Scheme',
  args: URL_SCHEME,
};

/* VIDEO */
export const VideoHtml5: Story = {
  name: 'Video - HTML5',
  args: VIDEO_HTML5,
};

export const VideoVimeo: Story = {
  name: 'Video - Vimeo',
  args: VIDEO_VIMEO,
};

export const VideoYoutube: Story = {
  name: 'Video - YouTube',
  args: VIDEO_YOUTUBE,
};

/* WEB VIEW */
export const WebView: Story = {
  name: 'WebView',
  args: WEB_VIEW,
};

export const WebViewWithMultipleActions: Story = {
  name: 'WebView - with multiple actions',
  args: WEB_VIEW_WITH_MULTIPLE_ACTIONS,
};

export const WebViewWithMultipleActionsAndActionableMarkup: Story = {
  name: 'WebView -  with multiple actions and Actionable Markup',
  args: WEB_VIEW_WITH_MULTIPLE_ACTIONS_AND_ACTIONABLE_MARKUP,
};

/* INVALID */
export const Invalid: Story = { args: INVALID };
