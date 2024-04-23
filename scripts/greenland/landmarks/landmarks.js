// Import function from /greenland/database.js that returns a copy of landmarks array of objects
import { getLandmarks } from "../database.js";

// Define and export a function that takes a copy of the array of objects holding landmark data and add html formatting
export const landmarkHTMLMachine = () => {

    // Invoke getLandmarks function and store the copy of the array of objects in landmarks variable
    const landmarks = getLandmarks();

    // Create a variable to begin storing formatted html info
    let htmlString = `<section class="landmarkList">`;

    // Build location card 
    for (const landmark of landmarks) {
        htmlString += `<div class="landmark">
        <div><img class="landmarkImg" ${landmark.image}></div>
        <div class="landmarkName"><strong>${landmark.name}</strong></div>
        <div class="landmarkLocation"><strong>Located in: </strong>${landmark.location}</div>
        <div class="landmarkFacts"><strong>Facts: </strong>${landmark.facts}</div>
    </div>`;
    }

    // Close the section tag
    htmlString += `</section>`;

    // Return HTML content
    return htmlString;
}
