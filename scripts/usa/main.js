//import the function references that generate the html of cities, landmarks and celebrities
import { CelebrityList } from "./celebrities/celebrities.js"

import { CityList } from "./cities/cities.js"

import { LandmarksList } from "./landmarks/landmarks.js"

//capture the return values of the html list generators

const celebrityHTML = CelebrityList()

const cityHTML = CityList()

const landmarksHTML = LandmarksList()

//Build up a single string containing all chunks of HTML

const theWholeThing = `
    <h1>celebrities</h1>
    ${CelebrityList}

    <h1>cities</h1>
    ${CityList}

    <h1>landmarks</h1>
    ${LandmarksList}
    `

// More Code to insert below