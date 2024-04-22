import {getCelebrities} from "./database.js"

const celebrities = getCelebrities()

export const CelebrityList = () => {
    let celebrityHTML = "<ul>"

    for (const celebrity of celebrities) { `<li>${celebrity.name}</li>`
        //stuff??
    }

  celebrityHTML +=  "</ul>"

    return celebrityHTML



}