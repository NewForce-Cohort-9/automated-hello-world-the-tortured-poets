// Gets list of landmarks
import { getLandmarks } from './database.js'

const landmarks = getLandmarks()

export const allLandmarks = () => {
    let htmlString = ``
    for (const landmark of landmarks) {

        htmlString += `<ul>
            <li>${landmark.name}</li>
            <li>${landmark.location}</li>
            <li>${landmark.facts}</li>
            <li><img class="celebImage" src=${landmark.image} alt="Image of ${landmark.name}"></img></li>
        </ul>`
        console.log(landmark)
    }
    const landmarkHTML = `<div class="landmark-container">${htmlString}</div>`
    return landmarkHTML
}