[<img src="https://raw.githubusercontent.com/notificare/notificare-react-preview-components/main/.assets/logo.png"/>](https://notificare.com)

# Notificare React Preview Components

[![GitHub release](https://img.shields.io/github/v/release/notificare/notificare-react-preview-components)](https://github.com/notificare/notificare-react-preview-components/releases)
[![License](https://img.shields.io/github/license/notificare/notificare-react-preview-components)](https://github.com/notificare/notificare-react-preview-components/blob/main/LICENSE)

The **Notificare React Preview Components** consists of a collection of React components that allows you to visualize how a Notificare push notification, in-app message or wallet pass (*coming soon...*) will appear in a user's device.

# Table of contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Theming](#theming)
- [Localisation](#localisation)

## Features

**Push notifications**: Easily preview how a Notificare push notification will appear across various platforms and devices. With very intuitive UI controls, you can seamlessly switch between different preview variants to see how it looks like in various platforms and form-factors.

**In-app messages**: See how a Notificare in-app message will appear on a mobile device — whether it’s a card, banner, or full-screen view.

**Onboarding**: Visualize what is displayed when a user opens a web application on a mobile device - a dialog box to allow or deny remote notifications, or a floating button displaying the current notification permission status and allowing the user to turn the notifications on.


## Installation

Install the library through NPM with the following command:

```shell
npm install notificare-react-preview-components
```

## Requesting a service key

Before you can take advantage of the library's full potential, you'll need to request a service key. This key is required for authentication and access to certain features such as previewing push notifications. [Learn how to request a service key](./docs/requesting-a-service-key.md).

## Getting started

Getting up and running with this component library is quick and easy. Each component is designed to be modular and flexible, so you can integrate them seamlessly into your existing React application. Whether you’re building something small or scaling up a larger project, the process is the same: simply import the components you need and place them wherever they make the most sense in your UI.

Below are basic examples for each component to show how they work. Be sure to check the documentation for each component to explore available props and customization options.

### Push notifications

A push notification preview can be generated through the `NotificareNotificationPreview` component.

```tsx
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

Check the component [documentation](./docs/push.md) for more information.

### In-app messages

An in-app message preview can be generated through the `NotificareInAppMessagePreview` component.

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

Check the component [documentation](docs/in-app-messaging.md) for more information.

### Onboarding

An onboarding preview can be generated through the `NotificareOnboardingPreview` component.

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

Check the component [documentation](docs/onboarding.md) for more information.

## Theming

Our React component library is designed with both flexibility and reliability in mind. All components are easy to customize—styles can be effortlessly overridden using your own CSS, allowing seamless integration with your app or website’s design system.

We’ve also prioritized style isolation to prevent conflicts. By using scoped, predictable class naming conventions, the library ensures that its styles won’t clash with your existing codebase.

For example, to adjust the size of the loading animation, you can simply add the following CSS:

```css
.notificare .notificare__loading__icon {
    width: 48px;
    height: 48px;
}
```

## Localisation

Regardless of the preview component you're using, you can select which language will be used in the UI controls and in the preview itself. Components will be automatically translated based on the chosen language, if default translations are available. Furthermore, you can also provide fully customizable translations, allowing you to personalize components to your liking.<br><br>Check each component's documentation for more details on how to implement this.
