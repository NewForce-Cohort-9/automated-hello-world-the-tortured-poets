import {getCities} from "../database.js"

const cities = getCities()

export const CityList = () => {
    let cityHTML = "<ul>"

    for (const city of cities) { cityHTML += `<li>${city.name}</li><li>${city.population}</li>`
    }

    cityHTML += "</ul>"

    return cityHTML



}