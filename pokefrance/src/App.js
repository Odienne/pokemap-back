import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import {getData} from "./services/api";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App() {
  const [data, setData] = useState();

  useEffect(async () => {
    console.log('cc')
    const res = await getData();
    console.log(res)
  }, [])

  return (
    <div className="App">
      <MapContainer center={[42, 6]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44, 6]}>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
