[<img src="https://raw.githubusercontent.com/notificare/notificare-sdk-web/main/.assets/logo.png"/>](https://notificare.com)

# Notificare React Preview Components

The **Notificare React Preview Components** consists of a collection of React components that allows you to visualize how a Notificare Push Notification, In-App Message (*soon...*) or Digital Card (*soon...*) actually looks like in your device, regardless of its content.

# Table of contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Style Customisation](#style-customisation)
- [Examples](#examples)

## Features

**Push Notifications**: Easily preview how a **Notificare Push Notification** will appear across various platforms and devices, regardless of its type or content. With very intuitive UI controls, you can seamlessly switch between different preview variants to see how it looks from multiple perspectives.

## Installation

Install the library through NPM with the following command:

```shell
npm install notificare-react-preview-components
```

Then, import the desired preview components:

```typescript
import { NotificareNotificationPreview } from 'notificare-react-preview-components'; // push notification

// more coming soon...
```

## Getting Started

### Push Notifications:

A **Notificare Push Notification** preview can be generated through the **NotificareNotificationPreview** component.

```tsx
import { NotificareNotificationPreview } from 'notificare-react-preview-components';

<NotificareNotificationPreview {...props} />
```

This component has the following main properties:

| Property       | Type                               | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|----------------|------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `notification` | `NotificareNotification`           | ✅         | The notification object data ([see structure](#--notification)).                                                                                                                                                                                                                                                                                                                                                                                           |
| `application`  | `NotificareApplication`            | ✅         | The application object data ([see structure](#--application)).                                                                                                                                                                                                                                                                                                                                                                                             |
| `showControls` | `boolean`                          | ❌         | Show or hide the UI controls - allows to switch between preview variants dynamically. It's `true` by default.                                                                                                                                                                                                                                                                                                                                              |
| `variant`      | `NotificareNotificationVariant`    | ❌         | The visual variant of the notification. It allows to choose how the notification is going to be shown, allowing different platforms and devices. It can have the following values: <br> <br>`android-lockscreen`, `android-lockscreen-expanded`, `android-app-ui`, `ios-lockscreen`, `ios-lockscreen-expanded`, `ios-app-ui`, `web-desktop-macos`, `web-iphone-app-ui`, `web-android-app-ui`. When not provided, `android-lockscreen` is set as default.   |
| `configKeys`   | `NotificareNotificationConfigKeys` | ❌         | Configuration keys ([see structure](#--configKeys)).                                                                                                                                                                                                                                                                                                                                                                                                       |

<br>

### - `notification`:

| Property      | Type                                 | Mandatory | Description                                                                                                                                                                                                                                                                 |
|---------------|--------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | `string`                             | ✅         | The type of the notification (e.g., `re.notifica.notification.Alert`, `re.notifica.notification.WebView`, etc.).<br><br>Please refer to [Message Types](https://api-docs.notifica.re/#section/Push/Message-Types:) in the Notificare Push API docs for all available types. |
| `title`       | `string`                             | ❌         | The title of the notification.                                                                                                                                                                                                                                              |
| `subtitle`    | `string`                             | ❌         | The subtitle of the notification.                                                                                                                                                                                                                                           |
| `message`     | `string`                             | ✅         | The message of the notification.                                                                                                                                                                                                                                            |
| `content`     | `NotificareNotificationContent[]`    | ❌         | Additional content of the notification. Its structure depends on `type`. Useful for rich notifications ([see structure](#content)).                                                                                                                                         |
| `actions`     | `NotificareNotificationAction[]`     | ❌         | Interactive actions the user can realize (ex: open link, answer, etc.) ([see structure](#actions)).                                                                                                                                                                         |
| `attachments` | `NotificareNotificationAttachment[]` | ❌         | An array of objects containing the URL of images either uploaded into Notificare or hosted in any public web server ([see structure](#attachments)).                                                                                                                        |

<br>

#### `content`:

| Property | Type      | Required | Description                                                                                                                                                                                                                                                                                                                                      |
|----------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`   | `string`  | ✅        | Type of the content (e.g., `re.notifica.content.WebView`, `re.notifica.content.Map`, etc). Its available types depends on the notification `type`.<br><br>Please refer to [Message Types](https://api-docs.notifica.re/#section/Push/Message-Types:) in the Notificare Push API docs to check which content types each notification type allows. |
| `data`   | `unknown` | ✅        | The actual content payload. Its structure varies depending on the `type`.<br><br>Please refer to [Content Objects](https://api-docs.notifica.re/#section/Push/Content-Objects:) in the Notificare Push API docs to check the data structure of each content type.                                                                                |

<br>

#### `actions`:

| Property   | Type      | Required | Description                                                                                                                                                                                                                                            |
|------------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`     | `string`  | ✅        | Type of the action (e.g., `re.notifica.action.Callback`, `re.notifica.action.SMS`, etc.).<br><br>Please refer to [Action Objects](https://api-docs.notifica.re/#section/Push/Action-Objects:) in the Notificare Push API docs for all available types. |
| `label`    | `string`  | ✅        | Text shown on the action button (e.g., "Open", "Reply", etc.).                                                                                                                                                                                         |
| `target`   | `string`  | ❌        | Target of the action, typically a URL or a relevant value for the given type.                                                                                                                                                                          |
| `camera`   | `boolean` | ❌        | Indicates whether this action requires camera access (e.g., for scanning a QR code).                                                                                                                                                                   |
| `keyboard` | `boolean` | ❌        | Indicates whether this action opens the keyboard (e.g., for text input).                                                                                                                                                                               |

<br>

#### `attachments`:

| Property   | Type     | Required | Description                                                        |
|------------|----------|----------|--------------------------------------------------------------------|
| `mimeType` | `string` | ✅        | The MIME type of the attachment (e.g., `image/jpeg`, `image/png`). |
| `uri`      | `string` | ✅        | The URI or URL pointing to the media file.                         |

<br>

### - `application`:

| Property | Type     | Mandatory | Description                               |
|----------|----------|-----------|-------------------------------------------|
| `name`   | `string` | ✅         | The name of a Notificare application.     |
| `icon`   | `string` | ✅         | The icon URL of a Notificare application. |
| `domain` | `string` | ✅         | The domain of a Notificare application.   |

<br>

### - `configKeys`:

| Property           | Type     | Mandatory | Description                                                                                                                                                                                                                                                                                             |
|--------------------|----------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `serviceKey`       | `string` | ❌         | A service key provided by a Notificare admin. It's required to properly preview certain notification types, such as `re.notifica.notification.URL`, `re.notifica.notification.InAppBrowser`, `re.notifica.notification.Rate`, `re.notifica.notification.Passbook` and `re.notifica.notification.Store`. |
| `googleMapsApiKey` | `string` | ❌         | An official Google Maps API key. It's required to preview notifications of type `re.notifica.notification.Map` in a web environment.                                                                                                                                                                    |


## Style customisation

Our React component library was carefully designed to provide developers with flexibility and stability, allowing the styles to be easily overridden by CSS in the main app/website. 

Additionally, the library was built with a strong focus on avoiding style collisions. By using scoped and predictable class naming conventions, it ensures that the components will not interfere with the existing styles of the website or application where they are used.

This thoughtful architecture makes the library highly stable and reliable, even in complex or large-scale environments.

## Examples

### Push Notifications

Here's an example on how you can use the **NotificareNotificationPreview** component. We are going to generate a **Text Alert Notification** that includes an attachment and an action.

The preselected preview variant is going to be `web-android-app-ui`, which represents how the notification appears on an Android device within the web. We also activate the UI controls (`showControls={true}`), so we can change between previews whenever we want.

```tsx
import { NotificareNotificationPreview } from 'notificare-react-preview-components'; // push notification

// other imports...

const notification = {
  type: 're.notifica.notification.Alert',
  title: '30% off on selected products',
  subtitle: 'From shirts, shoes, and much more!',
  message: "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
  attachments: [
    {
      uri: 'https://t4.ftcdn.net/jpg/01/19/56/47/360_F_119564758_3Zj8GjaFFt9MVNkZYR7LvAGz6KS1JIqD.jpg',
      mimeType: 'image/jpeg',
    },
  ],
  actions: [
    {
      type: 're.notifica.action.Browser',
      label: 'Visit website',
      target: 'https://ncclothing.com/',
      camera: false,
      keyboard: false,
    },
  ],
};
  
const application = {
  name: 'NC Clothing',
  icon: 'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
  domain: 'ncclothing.com',
};

const configKeys = {
  serviceKey: 'service-key-123',
  googleMapsApiKey: 'google-maps-api-key-123',
}
  
// Generate the notification preview

<NotificareNotificationPreview 
  notification={notification}
  application={application}
  showControls={true}
  variant="web-android-app-ui"
  configKeys={configKeys}
 />
```

<br>

### Result

<img src="/assets/images/web-android-preview.png" width="300" alt="Luis I Bridge, Porto"/>

*A Text Alert notification on an Android phone viewed within the web*

<br>

### Other preview examples

<img src="/assets/images/android-lock-screen-expanded-preview.png" width="300" alt="Luis I Bridge, Porto"/>

*A Text Alert notification on the lock screen of an Android device*

<br>

<img src="/assets/images/ios-app-ui-preview.png" width="300" alt="Luis I Bridge, Porto"/>

*A Text Alert notification on an iOS device*

<br>

<img src="/assets/images/web-macos-preview.png" width="300" alt="Luis I Bridge, Porto"/>

*A Text Alert notification on a macOS computer*
