// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Map Component
const Map = () => {
  const center = [51.505, -0.09]; // Default center (you can change it)
  const zoom = 13; // Default zoom level

  return (
    <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A default marker at the center of the map.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
