import { useIntl } from 'react-intl';
import { PreviewError } from '~/internal/components/shared/PreviewError/PreviewError';
import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { MESSAGES } from '~/locales/push/en';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './AppRecommendationNotification.css';

export function AppRecommendationNotification({
  notification,
}: AppRecommendationNotificationProps) {
  const application = useApplication();
  const intl = useIntl();

  const url = getUrlByContentType(notification.content);

  return (
    <div data-testid="android-app-ui-app-recommendation-notification">
      <NavigationBar title={notification.title || application.name} showOptions={false} />
      {url ? (
        <Webshot url={url} platform="Android" width={338} height={570} />
      ) : (
        <PreviewError
          message={intl.formatMessage({
            id: 'preview.error.noValidContentObject',
            defaultMessage: MESSAGES['preview.error.noValidContentObject'],
          })}
        />
      )}
    </div>
  );
}

export interface AppRecommendationNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Store' }>;
}

function getUrlByContentType(
  contentList: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Store' }
  >['content'],
) {
  const base = 'https://play.google.com';

  for (const content of contentList) {
    switch (content.type) {
      case 're.notifica.content.GooglePlayDetails': {
        const url = new URL('/store/apps/details', base);
        url.searchParams.set('id', content.data);

        return url.toString();
      }

      case 're.notifica.content.GooglePlayDeveloper': {
        const url = new URL('/store/apps/dev', base);
        url.searchParams.set('id', content.data);

        return url.toString();
      }

      case 're.notifica.content.GooglePlayCollection': {
        return new URL(
          `/store/apps/collection/${encodeURIComponent(content.data)}`,
          base,
        ).toString();
      }

      case 're.notifica.content.GooglePlaySearch': {
        const url = new URL('/store/search', base);
        url.searchParams.set('q', content.data);
        url.searchParams.set('c', 'apps');

        return url.toString();
      }
    }
  }

  return null;
}
