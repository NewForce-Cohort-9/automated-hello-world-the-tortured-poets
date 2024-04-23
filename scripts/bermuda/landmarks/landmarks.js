import { getLandmarks } from "../bermudaDatabase.js"

const landmarks = getLandmarks()

export const allLandmarks = () => {
    let htmlString = `<h1>Landmarks</h1>`
    for (const landmark of landmarks) {

        htmlString += `<ul>
            <li><h2>${landmark.name}</h2></li>
            <li>${landmark.location}</li>
            <li>${landmark.facts}</li>
            <li><img class="celebImage" src=${landmark.image} alt="Image of ${landmark.name}"></img></li>
        </ul>`
        console.log(landmark)
    }
    const landmarkHTML = `<div class="landmark-container">${htmlString}</div>`
    return landmarkHTML
}