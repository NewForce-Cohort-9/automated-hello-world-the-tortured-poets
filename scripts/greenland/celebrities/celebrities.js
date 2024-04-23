// Import function from ./greenland/database.js that returns a copy of celebrities array of objects
import { getCelebrities } from "../database.js";

// Define and export a function that takes a copy of the array of objects holding celebrity data and add html formatting
export const celebHTMLMachine = () => {

    // Invoke getCelebrities and store the returned array of objects in const celebs
    const celebs = getCelebrities();

    // Create a variable to store the html from the data in the celebs array
    let htmlString = `<section class="celebList">`;

    // Build celeb card from celebs array of objects
    for (const celeb of celebs) {
        htmlString += `<div class="celeb">
            <div><img class="celebImg" ${celeb.image}></div>
            <div class="celebName"><strong>Name:</strong> ${celeb.name}</div>
            <div class="celebBirthplace"><strong>Birthplace: </strong>${celeb.birthplace}</div>
            <div class="celebBio"><strong>Bio: </strong>${celeb.bio}</div>
        </div>`;
    }
    // Close the section for the celeb list
    htmlString += `</section>`;

    return htmlString;
}
