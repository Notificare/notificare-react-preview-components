# Onboarding

The `NotificareOnboardingPreview` lets you preview what is displayed when a user opens a web application on a mobile device - a dialog box to allow or deny remote notifications, or a floating button displaying the current notification permission status and allowing the user to turn the notifications on.

```tsx
import { NotificareOnboardingPreview } from 'notificare-react-preview-components';

export default function OnboardingComposer() {
  return (
    <NotificareOnboardingPreview
      applicationInfo={...}
    />
  )
}
```

Check the table below for details on the properties supported by this component.

| Property           | Type                                                          | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `applicationId`    | `string`                                                      | ❌         | The identifier of an application. You can provide this to use the name and icon of a specific app. Otherwise, you can optionally provide this information through `applicationInfo`. If you don't provide an identifier, a mock application is used instead.                                                                                                                                                                                                                                                                                                                                                                                                |
| `permissionStatus` | `string`                                                      | ❌         | The remote notification permission status. This is particularly useful for previewing the different states of a floating button.<br><br>Possible values: `default`, `granted`, `denied`.<br><br>Default value: `default`.                                                                                                                                                                                                                                                                                                                                                                                                                                   | 
| `applicationInfo`  | `NotificareOnboardingApplicationInfo`                         | ✅         | Partial information from a Notificare application ([see structure](#NotificareOnboardingApplicationInfo)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 
| `locale`           | `string`                                                      | ❌         | The language/region code for the UI (e.g., `fr-FR`). There are pre-established translations for the following languages, regardless of the chosen region: `en`, `pt` and `fr`.<br><br>If you need another language, you must provide the respective translations (see `translations` property). However, you can still provide any valid locale, since it's used for automatic formatting of dates, numbers, etc.<br><br>Default value: `en-US`.<br><br>**Important note**: Unlike other components, such as `NotificareNotificationPreview`, the locale only influences the translation of error messages, as there are no other elements that require it. |
| `translations`     | `Partial<Record<NotificareOnboardingTranslationKey, string>>` | ❌         | A set of custom translations to override the default ones.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Object schemas

### `NotificareOnboardingApplicationInfo`

| Property            | Type                                    | Mandatory  | Description                                                                                                                                                   |
|---------------------|-----------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`              | `string`                                | ❌          | The name of the application. If this name is provided, it overrides the name of the loaded application using the `applicationId` (or the mocked application). |
| `websitePushConfig` | `NotificareOnboardingWebsitePushConfig` | ✅          | The Website Push configuration of the app ([see structure](#NotificareOnboardingWebsitePushConfig)).                                                          |


### `NotificareOnboardingWebsitePushConfig`

| Property       | Type                                | Required | Description                                                                                                                                                                                 |
|----------------|-------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `icon`         | `string`                            | ❌        | The icon to be displayed in a native browser notification. If this icon is provided, it overrides the icon of the loaded application using the `applicationId` (or the mocked application). |
| `launchConfig` | `NotificareOnboardingLaunchConfig`  | ✅        | Set of launch options ([see structure](#NotificareOnboardingLaunchConfig)).                                                                                                                 |

### `NotificareOnboardingLaunchConfig`

| Property                | Type                                        | Required | Description                                                                                                   |
|-------------------------|---------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------|
| `applicationName`       | `string`                                    | ❌        | A custom application name to replace the original one at the top of a dialog.                                 |
| `floatingButtonOptions` | `NotificareOnboardingFloatingButtonOptions` | ❌        | Set of floating button customization options ([see structure](#NotificareOnboardingFloatingButtonOptions)).   |
| `autoOnboardingOptions` | `NotificareOnboardingAutoOnboardingOptions` | ❌        | Set of dialog customization options ([see structure](#NotificareOnboardingAutoOnboardingOptions)).            |

### `NotificareOnboardingFloatingButtonOptions`

| Property          | Type                                                | Required | Description                                                                                                                                                                         |
|-------------------|-----------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `alignment`       | `NotificareOnboardingFloatingButtonAlignment`       | ✅        | Defines the horizontal and vertical alignment of the floating button ([see structure](#NotificareOnboardingFloatingButtonAlignment)).                                               |
| `permissionTexts` | `NotificareOnboardingFloatingButtonPermissionTexts` | ✅        | Custom texts for the tooltip on the floating button based on the remote notification permission status ([see structure](#NotificareOnboardingFloatingButtonPermissionTexts)).       |

### `NotificareOnboardingFloatingButtonAlignment`

| Property     | Type                                                    | Required       | Description                                                       |
|--------------|---------------------------------------------------------|----------------|-------------------------------------------------------------------|
| `horizontal` | `NotificareOnboardingFloatingButtonHorizontalAlignment` | ✅              | The horizontal alignment.<br><br>Possible values: `start`, `end`. |
| `vertical`   | `NotificareOnboardingFloatingButtonVerticalAlignment`   | ✅              | The vertical alignment.<br><br>Possible values: `top`, `bottom`.  |

### `NotificareOnboardingFloatingButtonPermissionTexts`

| Property  | Type     | Required | Description                                                                                     |
|-----------|----------|----------|-------------------------------------------------------------------------------------------------|
| `default` | `string` | ✅        | The text to be displayed when remote notifications were neither allowed nor denied by the user. |
| `granted` | `string` | ✅        | The text to be displayed when the user allows remote notifications.                             |
| `denied`  | `string` | ✅        | The text to be displayed when the user denies remote notifications.                             |

### `NotificareOnboardingAutoOnboardingOptions`

| Property       | Type     | Required | Description                            |
|----------------|----------|----------|----------------------------------------|
| `message`      | `string` | ✅        | The main message of the dialog.        |
| `cancelButton` | `string` | ✅        | The text on the cancel button.         |
| `acceptButton` | `string` | ✅        | The text on the accept button.         |