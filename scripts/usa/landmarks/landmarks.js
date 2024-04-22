import {getLandmarks} from "../database.js"

const landmarks = getLandmarks()

export const LandmarksList = () => {
    let landmarksHTML = "<ul>" 

    for (const landmark of landmarks) { landmarksHTML += `<li>${landmark.name}</li>`
    }

    landmarksHTML += "</ul>"

    return landmarksHTML



}