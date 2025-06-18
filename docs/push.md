# Push

The `NotificareNotificationPreview` lets you easily preview how a Notificare push notification will appear across various platforms and devices. With very intuitive UI controls, you can seamlessly switch between different preview variants to see how it looks like in various platforms and form-factors.

```typescript jsx
import { NotificareNotificationPreview } from 'notificare-react-preview-components';

export default function NotificationComposer() {
  return (
    <NotificareNotificationPreview
      applicationId="..."
      notification={...}
      serviceKey="..."
    />
  )
}
```

Check the table below for details on the properties supported by this component.

| Property           | Type                            | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------|---------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `applicationId`    | `string`                        | ❌         | The identifier for the application that will generate the notification. A mock application is used when the identifier is not provided.                                                                                                                                                                                                                                     | 
| `notification`     | `NotificareNotification`        | ✅         | The notification object data ([see structure](#NotificareNotification)).                                                                                                                                                                                                                                                                                                    |
| `showControls`     | `boolean`                       | ❌         | Show or hide the UI controls, which allows the user to switch between preview variants dynamically.<br/><br/>Default value: `false`.                                                                                                                                                                                                                                        | 
| `variant`          | `NotificareNotificationVariant` | ❌         | The visual variant of the notification. It allows to choose how the notification is going to be shown, allowing different platforms and devices.<br><br/>Possible values: `android-lockscreen`, `android-lockscreen-expanded`, `android-app-ui`, `ios-lockscreen`, `ios-lockscreen-expanded`, `ios-app-ui`, `web-desktop-macos`, `web-iphone-app-ui`, `web-android-app-ui`. |
| `serviceKey`       | `string`                        | ✅         | A service key provided by a Notificare admin. It's required to preview certain notification types, such as `re.notifica.notification.URL`, `re.notifica.notification.InAppBrowser`, etc. [Request access](./requesting-a-service-key.md).                                                                                                                                   |
| `googleMapsApiKey` | `string`                        | ❌         | An official Google Maps API key. It's required to preview notifications of type `re.notifica.notification.Map` in a web environment.                                                                                                                                                                                                                                        |
| `language`         | `string`                        | ❌         | The UI language. <br/><br/>Default value: `en`.                                                                                                                                                                                                                                                                                                                             |

## Object schemas

### `NotificareNotification`

| Property      | Type                                 | Mandatory | Description                                                                                                                                                                                                                                                                 |
|---------------|--------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | `string`                             | ✅         | The type of the notification (e.g., `re.notifica.notification.Alert`, `re.notifica.notification.WebView`, etc.).<br><br>Please refer to [Message Types](https://api-docs.notifica.re/#section/Push/Message-Types:) in the Notificare Push API docs for all available types. |
| `title`       | `string`                             | ❌         | The title of the notification.                                                                                                                                                                                                                                              |
| `subtitle`    | `string`                             | ❌         | The subtitle of the notification.                                                                                                                                                                                                                                           |
| `message`     | `string`                             | ✅         | The message of the notification.                                                                                                                                                                                                                                            |
| `content`     | `NotificareNotificationContent[]`    | ❌         | Additional content of the notification. Its structure depends on `type`. Useful for rich notifications ([see structure](#NotificareNotificationContent)).                                                                                                                   |
| `actions`     | `NotificareNotificationAction[]`     | ❌         | Interactive actions the user can realize (ex: open link, answer, etc.) ([see structure](#NotificareNotificationAction)).                                                                                                                                                    |
| `attachments` | `NotificareNotificationAttachment[]` | ❌         | An array of objects containing the URL of images either uploaded into Notificare or hosted in any public web server ([see structure](#NotificareNotificationAttachment)).                                                                                                   |

### `NotificareNotificationContent`

| Property | Type      | Required | Description                                                                                                                                                                                                                                                                                                                                      |
|----------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`   | `string`  | ✅        | Type of the content (e.g., `re.notifica.content.WebView`, `re.notifica.content.Map`, etc). Its available types depends on the notification `type`.<br><br>Please refer to [Message Types](https://api-docs.notifica.re/#section/Push/Message-Types:) in the Notificare REST API docs to check which content types each notification type allows. |
| `data`   | `unknown` | ✅        | The actual content payload. Its structure varies depending on the `type`.<br><br>Please refer to [Content Objects](https://api-docs.notifica.re/#section/Push/Content-Objects:) in the Notificare REST API docs to check the data structure of each content type.                                                                                |

### `NotificareNotificationAction`

| Property   | Type      | Required | Description                                                                                                                                                                                                                                            |
|------------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`     | `string`  | ✅        | Type of the action (e.g., `re.notifica.action.Callback`, `re.notifica.action.SMS`, etc.).<br><br>Please refer to [Action Objects](https://api-docs.notifica.re/#section/Push/Action-Objects:) in the Notificare REST API docs for all available types. |
| `label`    | `string`  | ✅        | Text shown on the action button (e.g., "Open", "Reply", etc.).                                                                                                                                                                                         |
| `target`   | `string`  | ❌        | Target of the action, typically a URL or a relevant value for the given type.                                                                                                                                                                          |
| `camera`   | `boolean` | ❌        | Indicates whether this action requires camera access (e.g., for scanning a QR code).                                                                                                                                                                   |
| `keyboard` | `boolean` | ❌        | Indicates whether this action opens the keyboard (e.g., for text input).                                                                                                                                                                               |

### `NotificareNotificationAttachment`

| Property   | Type     | Required | Description                                                        |
|------------|----------|----------|--------------------------------------------------------------------|
| `mimeType` | `string` | ✅        | The MIME type of the attachment (e.g., `image/jpeg`, `image/png`). |
| `uri`      | `string` | ✅        | The URI or URL pointing to the media file.                         |
