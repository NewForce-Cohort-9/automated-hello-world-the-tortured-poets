import {getLandmarks} from "../database.js"

const landmarks = getLandmarks()

export const LandmarksList = () => {
    let landmarksHTML = "<ul>" 

    for (const landmark of landmarks) { landmarksHTML += `<li>${landmark.name}</li>
    <li>${landmark.location}</li>
    <li>${landmark.facts}</li>
    <li><img ${landmark.image} ></li>`
    }

    landmarksHTML += "</ul>"

    return landmarksHTML



}