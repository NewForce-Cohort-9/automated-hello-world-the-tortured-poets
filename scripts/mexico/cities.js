// Gets list of cities
import { getCities } from './database.js'

const cities = getCities()

export const allCities = () => {
    for (const city of cities) {
        console.log(city)
    }
}