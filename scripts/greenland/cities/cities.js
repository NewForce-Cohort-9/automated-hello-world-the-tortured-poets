// Import function from /greenland/database.js that returns a copy of the cities array of objects
import { getCities } from "../database.js";

// Define and export a function that takes a copy of the array of objects holding city data and add html formatting
export const citiesHTMLMachine = () => {
    
    // Invoke the getCities function and store the copied array in the cities variable
    const cities = getCities();

    // Create a variable to store the html version of the list of city info
    let htmlString = `<section class="cityList">`;

    // Create city cards from the cities array of objects
    for (const city of cities) {
        htmlString += `<div class="city">
        <div><img class="cityImg" ${city.image}></div>
        <div class="cityName">${city.name}</div>
        <div class="cityPopulation">Population: ${city.population}</div>
        </div>`;
    }

    // Add closing tag for the section containing the city info
    htmlString += `</section>`;

    return htmlString;
}