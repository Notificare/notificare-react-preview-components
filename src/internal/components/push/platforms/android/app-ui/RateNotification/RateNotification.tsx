import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './RateNotification.css';

export function RateNotification({ notification }: RateNotificationProps) {
  const application = useApplication();

  const url = new URL('/store/apps/details', 'https://play.google.com');
  url.searchParams.set('id', application.androidPackageName || '');

  return (
    <div data-testid="android-app-ui-rate-notification">
      <NavigationBar title={notification.title || application.name} showOptions={false} />
      <Webshot url={url.toString()} platform="Android" width={338} height={570} />
    </div>
  );
}

export interface RateNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Rate' }>;
}
