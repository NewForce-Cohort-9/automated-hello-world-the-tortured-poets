import {getCelebrities} from "../database.js"

const celebrities = getCelebrities()

export const CelebrityList = () => {
    let celebrityHTML = "<ul>"

    for (const celebrity of celebrities) { celebrityHTML += `<li>${celebrity.name}</li> 
    <li><img ${celebrity.image} ></li>
    <li>${celebrity.birthplace}</li>
    <l1>${celebrity.bio}</l1>`
        
    }

  celebrityHTML +=  "</ul>"

    return celebrityHTML



}