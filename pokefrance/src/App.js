import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

// jshint ignore:start
function App() {
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
