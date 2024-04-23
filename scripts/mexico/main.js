import { allCelebs } from "./celebrities.js"
import { allCities } from "./cities.js"
import { allLandmarks } from "./landmarks.js"

const celebHTML = allCelebs()
const showCelebs = `${celebHTML}`
const cityHTML = allCities()
const showCities = `${cityHTML}`
const landmarkHTML = allLandmarks()
const showLandmarks = `${landmarkHTML}`

const parentHTMLElement = document.querySelector("#mexico-container")
parentHTMLElement.innerHTML = showCelebs + showCities + showLandmarks
