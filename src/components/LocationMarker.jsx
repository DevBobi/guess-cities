import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function LocationMarker({ marker, setMarker, place, cityName }) {
  const markerRef = useRef();
  const map = useMap();

  // console.log(markerRef.current);

  // useEffect(
  //   () => ,
  //   [map, setMarker]
  // );

  map.once("click", (e) => setMarker(e.latlng));

  return (
    marker.lng && (
      <>
        <Marker ref={markerRef} position={marker}>
          <Popup>You are here</Popup>
        </Marker>
        <Marker position={place}>
          <Popup>{cityName}</Popup>
        </Marker>
      </>
    )
  );
}

export default LocationMarker;
