// Gets list of cities
import { getCities } from './database.js'

const cities = getCities()

export const allCities = () => {
    let htmlString = `<h1>Cities</h1>`
    for (const city of cities) {

        htmlString += `<ul>
            <li><h2>${city.name}</h2></li>
            <li>Population: ${city.population}</li>
        </ul>`
        console.log(city)
    }
    const cityHTML = `<div class="city-container">${htmlString}</div>`
    return cityHTML
}