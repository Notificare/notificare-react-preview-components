import './MapRichContent.css';
import { useEffect, useMemo, useState } from 'react';
import {
  APIProvider,
  Map,
  Marker,
  useApiLoadingStatus,
  APILoadingStatus,
} from '@vis.gl/react-google-maps';
import { getMarkersFromNotification } from '../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../schemas/notificare-notification/notificare-notification-schema';
import { useOptions } from '../../OptionsProvider/OptionsProvider';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import PreviewError from '../PreviewError/PreviewError';

export default function MapRichContent({ notification, width, height }: MapRichContentProps) {
  const { googleMapsAPIKey } = useOptions().options;

  const markers = getMarkersFromNotification(notification).map((marker, index) => ({
    id: index,
    lat: marker.latitude,
    lng: marker.longitude,
    title: marker.title,
  }));

  const [isClient, setIsClient] = useState(false);

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
    return <LoadingIcon />;
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
      {apiLoadStatus === APILoadingStatus.LOADING && <LoadingIcon />}

      {apiLoadStatus === APILoadingStatus.AUTH_FAILURE && (
        <PreviewError message="Authentication failure. Your Google Maps API key might be invalid. Check console for more information." />
      )}

      {apiLoadStatus === APILoadingStatus.FAILED && (
        <PreviewError message="Google Maps failed to be loaded. Check console for more information." />
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

interface MapRichContentProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  width: string;
  height: string;
}
