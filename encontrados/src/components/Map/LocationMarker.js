
import React, { useState } from 'react';
import L from 'leaflet';
import { Popup, Marker, useMapEvents } from 'react-leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('./images/marker-icon-2x.png'),
    iconUrl: require('./images/marker-icon.png'),
    shadowUrl: require('./images/marker-shadow.png')
  });


export function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        map.locate()
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Your adventure starts here</Popup>
      </Marker>
    )
  }