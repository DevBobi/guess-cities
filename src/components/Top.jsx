import React from 'react'

const Top = ({ cityName, remainingDistance, score }) => {
    return (
        <div className='flex justify-between w-full'>
            <div>
                Your Score is <b>{score}</b>
            </div>

            <div className='mb-3'>
                Select <b>{cityName}</b>
            </div>

            <div className=''>
                Left Miles <b>{remainingDistance.toFixed(2)} KM</b>
            </div>
        </div>
    )
}

export default Top
