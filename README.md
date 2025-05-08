[<img src="https://raw.githubusercontent.com/notificare/notificare-react-preview-components/main/.assets/logo.png"/>](https://notificare.com)

# Notificare React Preview Components

[![GitHub release](https://img.shields.io/github/v/release/notificare/notificare-react-preview-components)](https://github.com/notificare/notificare-react-preview-components/releases)
[![License](https://img.shields.io/github/license/notificare/notificare-react-preview-components)](https://github.com/notificare/notificare-react-preview-components/blob/main/LICENSE)

The **Notificare React Preview Components** consists of a collection of React components that allows you to visualize how a Notificare Push Notification, In-App Message (*coming soon...*) or Wallet Pass (*coming soon...*) will appear in a user's device.

# Table of contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Theming](#theming)

## Features

**Push Notifications**: Easily preview how a Notificare push notification will appear across various platforms and devices. With very intuitive UI controls, you can seamlessly switch between different preview variants to see how it looks like in various platforms and form-factors.

## Installation

Install the library through NPM with the following command:

```shell
npm install notificare-react-preview-components
```

## Getting Started

Getting up and running with this component library is quick and easy. Each component is designed to be modular and flexible, so you can integrate them seamlessly into your existing React application. Whether you’re building something small or scaling up a larger project, the process is the same: simply import the components you need and place them wherever they make the most sense in your UI.

Below are basic examples for each component to show how they work. Be sure to check the documentation for each component to explore available props and customization options.

### Push Notifications

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

Check the component [documentation](https://github.com/notificare/notificare-react-preview-components/blob/main/docs/push.md) for more information.

## Theming

Our React component library is designed with both flexibility and reliability in mind. All components are easy to customize—styles can be effortlessly overridden using your own CSS, allowing seamless integration with your app or website’s design system.

We’ve also prioritized style isolation to prevent conflicts. By using scoped, predictable class naming conventions, the library ensures that its styles won’t clash with your existing codebase.

For example, to adjust the size of the loading animation, you can simply add the following CSS:

```css
.notificare .notificare__push__webshot-loading-icon-svg {
    width: 48px;
    height: 48px;
}
```
