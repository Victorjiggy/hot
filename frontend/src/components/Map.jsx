import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ location = [9.0733, 7.4910], zoom = 17 }) => {
  // Default location set to Shop 23B, Neighbourhood Center, Wuse 2, Zone 3, Abuja
  return (
    <div className="map-container w-full h-96 my-6">
      <MapContainer
        center={location}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>
            Shop 23B, Neighbourhood Center, Wuse 2, Zone 3, Abuja
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
