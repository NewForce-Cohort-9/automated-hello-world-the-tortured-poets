import {getCities} from "./database.js"

const cities = getCities()

export const CityList = () => {
    let cityHTML = "<ul>"

    for (const city of cities) { `<li>${city.name}</li>`
    }

    cityHTML += "</ul>"

    return cityHTML



}