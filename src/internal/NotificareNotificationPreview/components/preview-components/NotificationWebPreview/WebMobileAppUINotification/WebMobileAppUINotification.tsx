import './WebMobileAppUINotification.css';
import { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
  getMarkersFromNotification,
  hasFirstAttachment,
} from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import { useAuth } from '../../../AuthProvider/AuthProvider';
import VideoRichContent from '../../../shared-components/VideoRichContent/VideoRichContent';
import UnavailablePreview from './UnavailablePreview/UnavailablePreview';

export default function WebMobileAppUINotification({
  notification,
  appName,
  appIcon,
}: WebMobileAppUIProps) {
  const { googleMapsApiKey = '' } = useAuth().configKeys;

  let markers: { id: number; lat: number; lng: number; title: string }[] = [];

  if (notification.type === 're.notifica.notification.Map') {
    markers = getMarkersFromNotification(notification).map((marker, index) => {
      return { id: index, lat: marker.latitude, lng: marker.longitude, title: marker.title };
    });
  }

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();

    markers.forEach((marker) => {
      const position = new google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(position);
    });

    mapInstance.fitBounds(bounds);
  }, []);

  if (
    notification.type === 're.notifica.notification.Alert' ||
    notification.type === 're.notifica.notification.Map' ||
    notification.type === 're.notifica.notification.WebView' ||
    notification.type === 're.notifica.notification.URL' ||
    notification.type === 're.notifica.notification.Video' ||
    notification.type === 're.notifica.notification.Image'
  ) {
    return (
      <div className="notificare__web-mobile-app-ui-notification">
        <div className="notificare__web-mobile-app-ui-notification-background">
          <div className="notificare__web-mobile-app-ui-notification-header">
            <img
              className="notificare__web-mobile-app-ui-notification-app-icon"
              src={appIcon}
              alt="App icon"
            />
            <p className="notificare__web-mobile-app-ui-notification-app-name">{appName}</p>
            <button className="notificare__web-mobile-app-ui-notification-close-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="notificare__web-mobile-app-ui-notification-close-button-icon"
              >
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"></path>
              </svg>
            </button>
          </div>

          {notification.type === 're.notifica.notification.Alert' && (
            <div data-testid="web-mobile-app-ui-text-alert-notification">
              {hasFirstAttachment(notification) && (
                <img
                  className="notificare__web-mobile-app-ui-notification-media"
                  src={notification.attachments?.[0].uri}
                  alt="Notification attachment"
                />
              )}

              <div>
                <p className="notificare__web-mobile-app-ui-notification-title">
                  {notification.title}
                </p>
                <p className="notificare__web-mobile-app-ui-notification-subtitle">
                  {notification.subtitle}
                </p>
                <p className="notificare__web-mobile-app-ui-notification-message">
                  {notification.message}
                </p>
              </div>
            </div>
          )}

          {notification.type === 're.notifica.notification.WebView' && (
            <iframe
              className="notificare__web-mobile-app-ui-notification-web-view-content"
              srcDoc={notification.content[0].data}
              sandbox="allow-same-origin"
              data-testid="web-mobile-app-ui-web-view-notification"
            />
          )}

          {notification.type === 're.notifica.notification.Map' && (
            <div data-testid="web-mobile-app-ui-map-notification">
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
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
          )}

          {notification.type == 're.notifica.notification.URL' && (
            <iframe
              className="notificare__web-mobile-app-ui-notification-url"
              src={notification.content[0].data}
              data-testid="web-mobile-app-ui-url-notification"
            />
          )}

          {notification.type === 're.notifica.notification.Video' && (
            <div data-testid="web-mobile-app-ui-video-notification">
              <VideoRichContent videoData={notification.content[0]} width="100%" height="430px" />
            </div>
          )}

          {notification.type === 're.notifica.notification.Image' && (
            <div
              className="notificare__web-mobile-app-ui-notification-image-slider"
              data-testid="web-mobile-app-ui-image-notification"
            >
              {notification.content.map((image, index) => (
                <img
                  key={index}
                  className="notificare__web-mobile-app-ui-notification-image-slider-item"
                  src={image.data}
                  alt="Slider image"
                />
              ))}
            </div>
          )}

          {notification.actions && (
            <div
              className={`${notification.actions.length >= 3 ? 'notificare__web-mobile-app-ui-notification-actions-column' : 'notificare__web-mobile-app-ui-notification-actions-row'}`}
            >
              {notification.actions.map((action, index) => (
                <button
                  key={index}
                  className={`notificare__web-mobile-app-ui-notification-action ${index === 0 ? 'notificare__web-mobile-app-ui-notification-action--primary' : 'notificare__web-mobile-app-ui-notification-action--secondary'}`}
                  data-testid={`web-mobile-app-ui-action-${index}`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <UnavailablePreview notificationType={notification.type} />;
  }
}

interface WebMobileAppUIProps {
  notification: NotificareNotificationSchema;
  appName: string;
  appIcon: string;
}
