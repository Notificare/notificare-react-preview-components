import './MapRichContent.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapRichContent({ markers, width, height }: MapRichContentProps) {
  return (
    <MapContainer
      className="notificare__push__map-rich-content"
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
        <Marker key={index} position={[marker.latitude, marker.longitude]}>
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
