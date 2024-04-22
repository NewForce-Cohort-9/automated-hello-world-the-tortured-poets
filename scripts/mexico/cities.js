// Gets list of cities
import { getCities } from './database.js'

const cities = getCities()

export const allCities = () => {
    let htmlString = ``
    for (const city of cities) {

        htmlString += `<ul>
            <li>${city.name}</li>
            <li>${city.population}</li>
        </ul>`
        console.log(city)
    }
    const cityHTML = `<div class="city-container">${htmlString}</div>`
    return cityHTML
}