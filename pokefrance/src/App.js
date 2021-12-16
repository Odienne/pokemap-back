import './App.css';
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import {getData} from "./services/api";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// jshint ignore:start
function App() {
  const [data, setData] = useState();

  useEffect(async () => {
    console.log('cc')
    const res = await getData();
    console.log(res)
  }, [])

  return (
    <div className="App">
      <MapContainer center={[46.0, 2.0]} zoom={6} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[44, 6]}/>
      </MapContainer>
    </div>
  );
}

export default App;
