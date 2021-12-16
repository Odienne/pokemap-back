import './App.css';
import 'leaflet/dist/leaflet.css';
import React, {useState, useEffect} from 'react';
import {getPokemon} from "./services/api";
import {url} from "./services/consts";
import {cities} from "./services/cities";

import {MapContainer, TileLayer, Marker} from 'react-leaflet'
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
    const [data, setData] = useState([]);

    useEffect(() => {
        cities.forEach(async (c) => {
            let lat = c.lattitude;
            let long = c.longitude;
            let computedUrl = `${url}?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin`;

            c.pokemon = await fetch(computedUrl).then(res => res.json()).then(async (resJson) => {
                return await getPokemon('?meteo=' + resJson.current_weather.weathercode);
            }).catch(e => console.log(e))

            setData([...cities])
        })

    }, [])


    return (
        <div className="App">
            <MapContainer center={[46.0, 2.0]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {data.map(e => {
                    console.log(e)
                    if (e.pokemon === null || e.pokemon === '' || e.pokemon === undefined) return;

                    let pokeIcon = L.icon({
                        iconUrl: e.pokemon,
                        iconRetinaUrl: e.pokemon,
                        iconAnchor: [5, 55],
                        popupAnchor: [10, -44],
                        iconSize: [80, 80],
                    });
                    return (
                        <Marker position={[e.lattitude, e.longitude]} icon={pokeIcon}/>
                    )
                })}
            </MapContainer>
        </div>
    );
}

export default App;
