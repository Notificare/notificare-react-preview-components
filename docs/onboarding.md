# Push Onboarding

The `NotificarePushOnboardingPreview` shows how the Push Onboarding UI will appear when your application uses a managed push onboarding flow. Depending on your configuration, it displays either a dialog prompting the user to allow or deny remote notifications, or a floating button that reflects the current notification permission state and allows the user to enable notifications.

```tsx
import { NotificarePushOnboardingPreview } from 'notificare-react-preview-components';

export default function OnboardingComposer() {
  return (
    <NotificarePushOnboardingPreview
      applicationInfo={...}
    />
  )
}
```

Check the table below for details on the properties supported by this component.

| Property           | Type                                                              | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------|-------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `applicationId`    | `string`                                                          | ❌         | The identifier of an application. You can provide this to use the name and icon of a specific app. Otherwise, you can optionally provide this information through `applicationInfo`. If you don't provide an identifier, a mock application is used instead.                                                                                                                                                                                                                                                                                                                                                                                                |
| `permissionStatus` | `string`                                                          | ❌         | The remote notification permission status. This is particularly useful for previewing the different states of a floating button.<br><br>Possible values: `default`, `granted`, `denied`.<br><br>Default value: `default`.                                                                                                                                                                                                                                                                                                                                                                                                                                   | 
| `applicationInfo`  | `NotificarePushOnboardingApplicationInfo`                         | ✅         | Partial information from a Notificare application ([see structure](#NotificarePushOnboardingApplicationInfo)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 
| `locale`           | `string`                                                          | ❌         | The language/region code for the UI (e.g., `fr-FR`). There are pre-established translations for the following languages, regardless of the chosen region: `en`, `pt` and `fr`.<br><br>If you need another language, you must provide the respective translations (see `translations` property). However, you can still provide any valid locale, since it's used for automatic formatting of dates, numbers, etc.<br><br>Default value: `en-US`.<br><br>**Important note**: Unlike other components, such as `NotificareNotificationPreview`, the locale only influences the translation of error messages, as there are no other elements that require it. |
| `translations`     | `Partial<Record<NotificarePushOnboardingTranslationKey, string>>` | ❌         | A set of custom translations to override the default ones.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Object schemas

### `NotificarePushOnboardingApplicationInfo`

| Property            | Type                                        | Mandatory  | Description                                                                                                                                                   |
|---------------------|---------------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`              | `string`                                    | ❌          | The name of the application. If this name is provided, it overrides the name of the loaded application using the `applicationId` (or the mocked application). |
| `websitePushConfig` | `NotificarePushOnboardingWebsitePushConfig` | ✅          | The Website Push configuration of the app ([see structure](#NotificarePushOnboardingWebsitePushConfig)).                                                      |


### `NotificarePushOnboardingWebsitePushConfig`

| Property       | Type                                   | Required | Description                                                                                                                                                                                 |
|----------------|----------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `icon`         | `string`                               | ❌        | The icon to be displayed in a native browser notification. If this icon is provided, it overrides the icon of the loaded application using the `applicationId` (or the mocked application). |
| `launchConfig` | `NotificarePushOnboardingLaunchConfig` | ✅        | Set of launch options ([see structure](#NotificarePushOnboardingLaunchConfig)).                                                                                                             |

### `NotificarePushOnboardingLaunchConfig`

| Property                | Type                                            | Required | Description                                                                                                     |
|-------------------------|-------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------|
| `applicationName`       | `string`                                        | ❌        | A custom application name to replace the original one at the top of a dialog.                                   |
| `floatingButtonOptions` | `NotificarePushOnboardingFloatingButtonOptions` | ❌        | Set of floating button customization options ([see structure](#NotificarePushOnboardingFloatingButtonOptions)). |
| `autoOnboardingOptions` | `NotificarePushOnboardingAutoOnboardingOptions` | ❌        | Set of dialog customization options ([see structure](#NotificarePushOnboardingAutoOnboardingOptions)).          |

### `NotificarePushOnboardingFloatingButtonOptions`

| Property          | Type                                                    | Required | Description                                                                                                                                                                       |
|-------------------|---------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `alignment`       | `NotificarePushOnboardingFloatingButtonAlignment`       | ✅        | Defines the horizontal and vertical alignment of the floating button ([see structure](#NotificarePushOnboardingFloatingButtonAlignment)).                                         |
| `permissionTexts` | `NotificarePushOnboardingFloatingButtonPermissionTexts` | ✅        | Custom texts for the tooltip on the floating button based on the remote notification permission status ([see structure](#NotificarePushOnboardingFloatingButtonPermissionTexts)). |

### `NotificarePushOnboardingFloatingButtonAlignment`

| Property     | Type                                                        | Required       | Description                                                       |
|--------------|-------------------------------------------------------------|----------------|-------------------------------------------------------------------|
| `horizontal` | `NotificarePushOnboardingFloatingButtonHorizontalAlignment` | ✅              | The horizontal alignment.<br><br>Possible values: `start`, `end`. |
| `vertical`   | `NotificarePushOnboardingFloatingButtonVerticalAlignment`   | ✅              | The vertical alignment.<br><br>Possible values: `top`, `bottom`.  |

### `NotificarePushOnboardingFloatingButtonPermissionTexts`

| Property  | Type     | Required | Description                                                                                     |
|-----------|----------|----------|-------------------------------------------------------------------------------------------------|
| `default` | `string` | ✅        | The text to be displayed when remote notifications were neither allowed nor denied by the user. |
| `granted` | `string` | ✅        | The text to be displayed when the user allows remote notifications.                             |
| `denied`  | `string` | ✅        | The text to be displayed when the user denies remote notifications.                             |

### `NotificarePushOnboardingAutoOnboardingOptions`

| Property       | Type     | Required | Description                            |
|----------------|----------|----------|----------------------------------------|
| `message`      | `string` | ✅        | The main message of the dialog.        |
| `cancelButton` | `string` | ✅        | The text on the cancel button.         |
| `acceptButton` | `string` | ✅        | The text on the accept button.         |
