import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "./Map.css";

// Tạo một custom icon cho marker
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Map = (props) => {
  const { Shoplocation } = props;
  const position = [17.039439736556982, 106.9096270788502]; // Tọa độ bạn truyền vào

  return (
    <MapContainer
      center={position}
      zoom={6}
      style={{ height: "600px", width: "100%" }}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {Shoplocation.map((location) => (
        <Marker key={location.id} position={location.position} icon={customIcon}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
