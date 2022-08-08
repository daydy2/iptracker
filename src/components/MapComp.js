import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import '../styling/main.css';

const MapComp = () => {
    const position = [6.540680664986485, 3.365289693252744]
  return (
    <MapContainer
        center={position}
        zoom={10}
        style={{height: '100vh', width: '100vw'}}
        scrollWheelZoom={false}
    >
        <TileLayer 
            url= 'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=JUlC1PKRgKXvkLRWga49'
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Marker position={position}>
            <Popup className='popup'>
                Mo ka e.
            </Popup>
         </Marker>

    </MapContainer>
  )
}

export default MapComp