import { useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

function LocationMarker({position, setPosition}) {
    const map = useMap()

    map.addEventListener('click', function (e) {
        const pixelPosition = e.layerPoint
        const { lat, lng } = map.layerPointToLatLng(pixelPosition)
        setPosition({ ...position, lat, lng })
    })
    
    return (
        position && (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    )
}

export default LocationMarker
