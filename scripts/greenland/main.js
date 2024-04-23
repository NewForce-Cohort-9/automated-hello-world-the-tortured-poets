// Import function that returns html populated from the database.celebs array
import { celebHTMLMachine } from "./celebrities/celebrities.js";

// Import function that returns html populated from the database.cities array
import { citiesHTMLMachine } from "./cities/cities.js";

// Import function that returns html populated from the database.landmarks array
import { landmarkHTMLMachine } from "./landmarks/landmarks.js";


// Assign a variable to the section of the page we want to insert celeb HTML into
let celebHTMLInsert = document.querySelector("#celebInsert");

// Invoke celebHTMLMachine to insert html into the greenland.html page
celebHTMLInsert = celebHTMLMachine();


// Assign a variable to the section of the page we want to insert city HTML into
let cityHTMLInsert = document.querySelector("#cityInsert");

// Invoke citiesHTMLMachine to insert html into the greenland.html page
cityHTMLInsert = citiesHTMLMachine();


// Assign a variable to the section of the page we want to insert landmark HTML into
let landmarkHTMLInsert = document.querySelector("#landmarkInsert");

// Invoke landmarkHTMLMachine to insert html into the greenland.html page
landmarkHTMLInsert = landmarkHTMLMachine();