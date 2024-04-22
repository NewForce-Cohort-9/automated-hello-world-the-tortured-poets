// Gets list of celebrities
import { getCelebs } from './database.js'

const celebs = getCelebs()

export const allCelebs = () => {
    for (const celeb of celebs) {
        console.log(celeb)
    }
}