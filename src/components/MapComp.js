import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const MapComp = () => {
    const position = [51.505, -0.09]
  return (
    <MapContainer
    center={position}
    zoom={10}
    style={{height: '100vh', width: '75vw'}}
    scrollWheelZoom={false}
    >

    </MapContainer>
  )
}

export default MapComp