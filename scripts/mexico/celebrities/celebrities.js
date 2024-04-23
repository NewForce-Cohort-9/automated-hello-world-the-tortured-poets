// Gets list of celebrities
import { getCelebs } from '../database.js'

const celebs = getCelebs()

export const allCelebs = () => {
    let htmlString = `<h1>Celebrities</h1>`
    
    for (const celeb of celebs) {
        
       htmlString += `<ul>
            <li><h2>${celeb.name}</h2></li>
            <li><img class="celebImage" src=${celeb.image} alt="Image of ${celeb.name}"></img></li>
            <li>${celeb.birthplace}</li>
            <li>${celeb.bio}</li>
        </ul>`
        
        console.log(celeb)
    }

    const celebHTML = `<div class="celeb-container">${htmlString}</div>`
    return celebHTML
}

