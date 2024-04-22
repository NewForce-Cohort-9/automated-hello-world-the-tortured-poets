import {getLandmarks} from "./database.js"

const landmarks = getLandmarks()

export const LandmarksList = () => {
    let landmarksHTML = "<ul>" 

    for (const landmark of landmarks) { `<li>${landmark.name}</li>`
    }

    landarmarksHTML += "</ul>"

    return landmarksHTML



}