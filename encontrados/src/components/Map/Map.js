import { LocationMarker } from './LocationMarker';
import { MapContainer , TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const location = [-34.6037547, -58.3819857];
const zoom = 14;

export function Map() {

  return (    
      <MapContainer center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Marker position={location}>
          <Popup>Your adventure starts here</Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>   
  );
}



