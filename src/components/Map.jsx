import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { cityData } from '../data'
// import getDistance from '../utils/measure'
import distance from '../utils/measure'
import LocationMarker from './Example'
import Top from './Top'

const Map = () => {
    const [position, setPosition] = useState({ lat: null, lng: null })
    const [score, setScore] = useState(0)
    const [initialDistance, setInitialDistance] = useState(1500)
    const [remainingDistance, setRemainingDistance] = useState(0)
    const [km, setKm] = useState(0)

    const city = cityData.cities[Math.floor(Math.random() * 5)]

    useEffect(() => {
        const result = distance(position, city.position, 'km')
        setKm(result)
        if(remainingDistance <=0){
            alert('Game Over')
        }
        else if (result < 50) setScore(score + 1)
    }, [position, city.position])

    return (
        <div className='p-10 min-h-screen flex-col flex justify-center items-center rounded-2xl'>
            <Top cityName={city.name} initialDistance={initialDistance} score={score} />
            <MapContainer
                style={{ height: '70vh', width: '70vw' }}
                center={[46.84697391435467, 7.971664353478799]}
                zoom={5}
                whenReady={(e) => console.log(e.target)}
                scrollWheelZoom={true}>
                <TileLayer
                    url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=MgRUpn1PKeDtToo1Dz8k'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                <LocationMarker position={position} setPosition={setPosition} />
            </MapContainer>
            {km && (
                <div>
                    Your needle pin's distance from <span className="text-red-600 font-weight-bold text-xl py-2">{city.name}</span> is {km.toFixed(2)}km
                </div>
            )}
        </div>
    )
}

export default Map
