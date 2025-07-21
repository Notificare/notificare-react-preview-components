# In-app messaging

The `NotificareInAppMessagePreview` lets you easily preview how a Notificare in-app message will appear on a mobile device.

```tsx
import { NotificareInAppMessagePreview } from 'notificare-react-preview-components';

export default function InAppMessageComposer() {
  return (
    <NotificareInAppMessagePreview
      inAppMessage={...}
    />
  )
}
```

Check the table below for details on the properties supported by this component.

| Property           | Type                                                     | Mandatory | Description                                                                                                                                                                                                                                                                                     |
|--------------------|----------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `inAppMessage`     | `NotificareInAppMessage`                                 | ✅         | The in-app message object data ([see structure](#NotificareInAppMessage)).                                                                                                                                                                                                                      |
| `locale`           | `string`                                                 | ❌         | The language/region code for the UI (e.g., `fr-FR`). There are pre-established translations for the following locales: `en-GB`, `pt-PT` and `fr-FR`. If you need another language, you must provide the respective translations (see `translations` property).<br/><br/>Default value: `en-GB`. |
| `translations`     | `Partial<Record<NotificareInAppTranslationKey, string>>` | ❌         | A set of custom translations to override the default ones.                                                                                                                                                                                                                                      |

## Object schemas

### `NotificareInAppMessage`

| Property          | Type                           | Mandatory | Description                                                                                                                                                                                                                                                                                                                |
|-------------------|--------------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`            | `string`                       | ✅         | The type of the in-app message (`re.notifica.inappmessage.Banner`, `re.notifica.inappmessage.Card` or `re.notifica.inappmessage.Fullscreen`).<br><br>Please refer to [Message Types](https://api-docs.notifica.re/#section/Message-Types:) in the Notificare Push API docs for more information about the available types. |
| `title`           | `string`                       | ❌         | The title of the in-app message. It's mandatory for in-app messages of type **Banner** and **Card**.                                                                                                                                                                                                                       |
| `message`         | `string`                       | ❌         | The main message of the in-app message. It's mandatory for in-app messages of type **Banner** and **Card**.                                                                                                                                                                                                                | 
| `primaryAction`   | `NotificareInAppMessageAction` | ❌         | The primary interactive action the user can realize ([see structure](#NotificareInAppMessageAction)). It's mandatory for in-app messages of type **Card**.                                                                                                                                                                 |
| `secondaryAction` | `NotificareInAppMessageAction` | ❌         | The secondary interactive action the user can realize ([see structure](#NotificareInAppMessageAction)). It's only available for in-app messages of type **Card**.                                                                                                                                                          |


### `NotificareInAppMessageAction`

| Property      | Type     | Required | Description                                                                                                                                                                                                |
|---------------|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `label`       | `string` | ❌        | Text shown on the action button (e.g., "Open"). It's only available for in-app messages of type **Card**.                                                                                                  |
| `destructive` | `string` | ❌        | Whether the action performs an irreversible operation. It's only available for in-app messages of type **Card**, and makes the action button use built-in styles depending on whether it is true or false. |
