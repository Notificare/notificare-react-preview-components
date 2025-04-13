import './MapRichContent.css';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapRichContent({ markers, width, height }: MapRichContentProps) {
  const customIcon = new Icon({
    iconUrl:
      'https://dashboard.notifica.re/assets/images/marker-point-702cf1ad06eb9a69f5e589d8ae311b79.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer
      className="notificare__map-rich-content"
      center={[markers[0].latitude, markers[0].longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: width, height: height }}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.latitude, marker.longitude]} icon={customIcon}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

interface MapRichContentProps {
  markers: {
    title: string;
    latitude: number;
    longitude: number;
  }[];
  width: string;
  height: string;
}
