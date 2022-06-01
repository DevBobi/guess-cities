const totalKM = 6371
const getRadius = (number) => (number * Math.PI) / 180

const getDistance = (objOne, objTwo) => {
    console.log('calling...');

    const lat1 = objOne.lat
    const lng1 = objOne.lng
    const lat2 = objTwo.lat
    const lng2 = objTwo.lng

    const longitude = getRadius(lng2 - lng1)
    const latitude = getRadius(lat2 - lat1)

    const a =
        Math.sin(latitude / 2) * Math.sin(latitude / 2) +
        Math.cos(getRadius(lat1)) *
        Math.cos(getRadius(lat2)) *
        Math.sin(longitude / 2) *
        Math.sin(longitude / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return totalKM * c * 1.609344
}
export default getDistance