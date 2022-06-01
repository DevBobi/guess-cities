import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { cityData } from "../data";
import getDistance from "../utils/getDistance";
import LocationMarker from "./LocationMarker";
import Top from "./Top";
const generateRandomCity = () => cityData.cities[Math.floor(Math.random() * 8)];

const Map = () => {
  const [cityInfo, setCityInfo] = useState(generateRandomCity());
  const [marker, setMarker] = useState({ lat: null, lng: null });
  const [distance, setDistance] = useState(null);
  const [newDistance, setNewDistance] = useState('')

  useEffect(() => {
    const distance = getDistance(marker, cityInfo.position);
    setNewDistance(distance);
    setCityInfo(generateRandomCity());
  }, [cityInfo, marker]);

  return (
    <div className="p-10 min-h-screen flex-col flex justify-center items-center rounded-2xl">
      <Top cityName={cityInfo.name} distance={newDistance} />
      <MapContainer
        style={{ height: "70vh", width: "70vw" }}
        center={[46.84697391435467, 7.971664353478799]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=MgRUpn1PKeDtToo1Dz8k"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <LocationMarker
          marker={marker}
          place={cityInfo.position}
          setMarker={setMarker}
          cityName={cityInfo.name}
        />
      </MapContainer>
      {newDistance ? (
        <div>
          Your needle pin's distance from{" "}
          <span className="text-red-600 font-weight-bold text-xl py-2">
            {cityInfo.name}
          </span>{" "}
          is {newDistance.toFixed(2)}km
        </div>
      ) : (
        <div>
          Put a niddle in the map close to <b>{cityInfo.name}</b>
        </div>
      )}
    </div>
  );
};

export default Map;
