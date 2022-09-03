import { LocationMarker } from './LocationMarker';
import { MapContainer , TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const location = [-34.6034111,  -58.3846267];
const location1 = [-34.6037558, -58.3819669];
const location2 = [-34.6036501, -58.3836111];
const location3 = [-34.6032091,-58.3862169];
const location4 = [-34.604302,   -58.3819683];
const location5 = [-34.6046201,  -58.3844848];
const zoom = 16;


export function Map() {
  return (    
      <MapContainer center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
       
          <Marker position={location}>
            <Popup>Subway</Popup>
          </Marker> 
          <Marker position={location4}>
            <Popup>Keller bier</Popup>
          </Marker>   
          <Marker position={location1}>
            <Popup>Plaza de la República</Popup>
          </Marker> 
          <Marker position={location2}>
            <Popup>Teatro Broadway - Paraná Seguros</Popup>
          </Marker>    
          <Marker position={location3}>
            <Popup>Teatro Gran Rex</Popup>
          </Marker> 
          <Marker position={location5}>
            <Popup>Starbucks</Popup>
          </Marker> 
            

        <LocationMarker />
      </MapContainer>   
  );
}



