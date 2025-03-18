import '../../../preset.css';
import './IOSWebPush.css';
import { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CONFIG } from '../../../../config';
import {
  getMarkersFromNotification,
  hasFirstAttachment,
} from '../../../helpers/notification-utils';
import { BasePushMessage } from '../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../shared/ios-phone-background/IOSPhoneBackground';
import VideoRichContent from '../../shared/video-rich-content/VideoRichContent';

export interface IOSWebPushProps {
  notification: BasePushMessage;
  appName: string;
  appIcon: string;
}

export default function IOSWebPush(props: IOSWebPushProps) {
  const { notification, appName, appIcon } = props;

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

  return (
    <div className="notificare">
      <IOSPhoneBackground theme="dark">
        <div className="notificare__ios-web-push">
          <div className="notificare__ios-web-push-background">
            <div className="notificare__ios-web-push-header">
              <img className="notificare__ios-web-push-app-icon" src={appIcon} alt="App icon" />
              <p className="notificare__ios-web-push-app-name">{appName}</p>
              <button className="notificare__ios-web-push-close-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="notificare__ios-web-push-close-button-icon"
                >
                  <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"></path>
                </svg>
              </button>
            </div>

            {notification.type === 're.notifica.notification.Alert' && (
              <>
                {hasFirstAttachment(notification) && (
                  <img
                    className="notificare__ios-web-push-media"
                    src={notification.attachments?.[0].uri}
                    alt="Notification attachment"
                  />
                )}

                <div>
                  <p className="notificare__ios-web-push-title">{notification.title}</p>
                  <p className="notificare__ios-web-push-subtitle">{notification.subtitle}</p>
                  <p className="notificare__ios-web-push-message">{notification.message}</p>
                </div>
              </>
            )}

            {notification.type === 're.notifica.notification.WebView' && (
              <iframe
                className="notificare__ios-web-push-web-view-content"
                srcDoc={notification.content[0].data}
                sandbox="allow-same-origin"
              />
            )}

            {notification.type === 're.notifica.notification.Map' && (
              <LoadScript googleMapsApiKey={CONFIG.GOOGLE_MAPS_KEY}>
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
            )}

            {notification.type == 're.notifica.notification.URL' && (
              <iframe className="notificare__ios-web-push-url" src={notification.content[0].data} />
            )}

            {notification.type === 're.notifica.notification.Video' && (
              <VideoRichContent videoData={notification.content[0]} width="100%" height="430px" />
            )}

            {notification.type === 're.notifica.notification.Image' && (
              <div className="notificare__ios-web-push-image-slider">
                {notification.content.map((image, index) => (
                  <img
                    key={index}
                    className="notificare__ios-web-push-image-slider-item"
                    src={image.data}
                    alt="Slider image"
                  />
                ))}
              </div>
            )}

            {notification.actions && (
              <div
                className={`${notification.actions.length >= 3 ? 'notificare__ios-web-push-actions-column' : 'notificare__ios-web-push-actions-row'}`}
              >
                {notification.actions.map((action, index) => (
                  <button
                    key={index}
                    className={`notificare__ios-web-push-action ${index === 0 ? 'notificare__ios-web-push-action--primary' : 'notificare__ios-web-push-action--secondary'}`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </IOSPhoneBackground>
    </div>
  );
}
