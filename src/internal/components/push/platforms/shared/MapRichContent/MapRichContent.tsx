import { useEffect, useMemo, useState } from 'react';
import {
  APIProvider,
  Map,
  Marker,
  useApiLoadingStatus,
  APILoadingStatus,
} from '@vis.gl/react-google-maps';
import { useIntl } from 'react-intl';
import { Loading } from '~/internal/components/shared/Loading/Loading';
import { PreviewError } from '~/internal/components/shared/PreviewError/PreviewError';
import { useOptions } from '~/internal/context/options';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { getMarkersFromNotification } from '~/internal/utils/push-previews/notification';
import { PUSH_MESSAGES } from '~/locales/push/en';

import './MapRichContent.css';

export function MapRichContent({ notification, width, height }: MapRichContentProps) {
  const { googleMapsAPIKey } = useOptions();
  const [isClient, setIsClient] = useState(false);

  const markers = useMemo(() => {
    return getMarkersFromNotification(notification).map((marker, index) => ({
      id: index,
      lat: marker.latitude,
      lng: marker.longitude,
      title: marker.title,
    }));
  }, [notification.content]);

  const center = useMemo(() => {
    if (markers.length > 0) {
      return { lat: markers[0].lat, lng: markers[0].lng };
    }
    return { lat: 0, lng: 0 };
  }, [markers]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (markers.length === 0 || !isClient) {
    return <Loading />;
  }

  return (
    <div data-testid="map-notification">
      <APIProvider apiKey={googleMapsAPIKey || ''}>
        <MapWithStatus markers={markers} center={center} width={width} height={height} />
      </APIProvider>
    </div>
  );
}

function MapWithStatus({
  markers,
  center,
  width,
  height,
}: {
  markers: { id: number; lat: number; lng: number; title: string }[];
  center: { lat: number; lng: number };
  width: string;
  height: string;
}) {
  const apiLoadStatus = useApiLoadingStatus();
  const intl = useIntl();

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {apiLoadStatus === APILoadingStatus.LOADING && <Loading />}

      {apiLoadStatus === APILoadingStatus.AUTH_FAILURE && (
        <PreviewError
          message={intl.formatMessage({
            id: 'preview.error.googleMapsAuthFailure',
            defaultMessage: PUSH_MESSAGES['preview.error.googleMapsAuthFailure'],
          })}
        />
      )}

      {apiLoadStatus === APILoadingStatus.FAILED && (
        <PreviewError
          message={intl.formatMessage({
            id: 'preview.error.googleMapsLoadFailure',
            defaultMessage: PUSH_MESSAGES['preview.error.googleMapsLoadFailure'],
          })}
        />
      )}

      {apiLoadStatus === APILoadingStatus.LOADED && (
        <Map
          style={{ width, height }}
          defaultCenter={center}
          defaultZoom={10}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
            />
          ))}
        </Map>
      )}
    </div>
  );
}

export interface MapRichContentProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  width: string;
  height: string;
}
