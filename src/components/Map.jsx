import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import {cityData} from '../data' 

const Map = () => {
  return (
    <div>
      <MapContainer
        style={{ height: "100vh", width: "100vw" }}
        center={[46.91343584453294, 7.1382015341641]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=MgRUpn1PKeDtToo1Dz8k"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />


        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}

        {
          cityData.cities.map((state) =>{
            
          })
        }

      </MapContainer>
    </div>
  );
};

export default Map;
