import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import '../styling/main.css';

const MapComp = ({lat, long}) => {
    console.log(lat, long)
    // const position = [0, 0]
    const position = [lat, long];
    console.log(position)
    

  return (
    <MapContainer
        center={position}
        zoom={1.5}
        style={{height: '100vh', width: '100vw'}}
        scrollWheelZoom={true}
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

export default MapComp;

// https://ipfind.co/?ip=197.234.34.158&auth=901ec5ad-7b00-4b4d-975d-248561dd7970