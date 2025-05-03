import { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getMarkersFromNotification } from '../../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { useOptions } from '../../../../OptionsProvider/OptionsProvider';

export default function MapNotification({ notification }: MapNotificationProps) {
  const { googleMapsAPIKey } = useOptions().options;

  let markers: { id: number; lat: number; lng: number; title: string }[] = [];

  markers = getMarkersFromNotification(notification).map((marker, index) => {
    return { id: index, lat: marker.latitude, lng: marker.longitude, title: marker.title };
  });

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();

    markers.forEach((marker) => {
      const position = new google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(position);
    });

    mapInstance.fitBounds(bounds);
  }, []);

  return (
    <div data-testid="web-mobile-app-ui-map-notification">
      <LoadScript googleMapsApiKey={googleMapsAPIKey || ''}>
        <GoogleMap
          id="map"
          mapContainerStyle={{ width: '100%', height: '400px' }}
          zoom={10}
          center={{ lat: markers[0].lat, lng: markers[0].lng }} // Posição inicial
          onLoad={onLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
}
