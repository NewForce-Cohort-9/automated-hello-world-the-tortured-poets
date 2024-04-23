import { allCelebs } from "./celebrities/celebrities.js"
import { allCities } from "./cities/cities.js"
import { allLandmarks } from "./landmarks/landmarks.js"

const celebHTML = allCelebs()
const showCelebs = `${celebHTML}`
const cityHTML = allCities()
const showCities = `${cityHTML}`
const landmarkHTML = allLandmarks()
const showLandmarks = `${landmarkHTML}`

const parentHTMLElement = document.querySelector("#bermuda-container")
parentHTMLElement.innerHTML = showCelebs + showCities + showLandmarks
