
import "./Maps.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
    const position = [23.0225,  72.5714]
  
      
  return (
    <div>
       <MapContainer
      center={[23.0225,  72.5714]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "50vh" }}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   <Marker position={position}>
    <Popup>
      Renter's Location
    </Popup>
   </Marker>
    </MapContainer>
    </div>
  )
}

export default Maps
