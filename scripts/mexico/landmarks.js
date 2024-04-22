// Gets list of landmarks
import { getLandmarks } from './database.js'

const landmarks = getLandmarks()

export const allLandmarks = () => {
    for (const landmark of landmarks) {
        console.log(landmark)
    }
}