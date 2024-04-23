import {getCelebrities} from "../database.js"

const celebrities = getCelebrities()

export const CelebrityList = () => {
    let celebrityHTML = "<ul>"

    for (const celebrity of celebrities) { celebrityHTML += `<li>${celebrity.name}</li>`
        
    }

  celebrityHTML +=  "</ul>"

    return celebrityHTML



}