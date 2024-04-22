database= {
    celebrities: [
        {
            id: 1,
            name: "Maligiaq Padilla",
            image: `src="https://cdn.shopify.com/s/files/1/0271/6663/files/MPandQayaq.JPG?v=1575572984" alt="Photo of Maligiaq with a kayak"`,
            birthplace: "Sisimiut, Greenland",
            bio: "Maligiaq Johnsen Padilla is a Greenlandic kayaker known for his skill with the sea kayak. In 1994, at the age of 12, he won every event in his age group at the National Kayaking Championship. In 2010 Padilla moved to Alaska where he is working to revive traditional kayaking culture. He and wife Elizabeth Saagulik Hensley, an Iñupiaq attorney, have two children. Padilla is the only person in history to win four Greenland National Kayaking Championships, winning his first title at 16.",
        },
        {
            id: 2,
            name: "Jesper Grønkjær",
            image: `src="https://upload.wikimedia.org/wikipedia/commons/4/42/JesperGronkjaer_cropped.jpg" alt="Photo of Jesper on a soccer field."`,
            birthplace: "Godthåb, Greenland",
            bio: "Jesper Grønkjær (born 12 August 1977) is a Danish former professional footballer. A pacey winger, Grønkjær played primarily on the right or left wing, or as a second striker. He played a total 400 league games for a number of European clubs, most notably winning the 1999 Dutch Cup with Ajax and playing more than 100 games for English club Chelsea."
        },
        {
            id: 3,
            name: "Agnethe Davidsen",
            image: `src="https://64.media.tumblr.com/ed6e8cf426567192b63f5cd766e158ed/tumblr_mo5e2lOf4O1rpkenpo1_400.jpg" alt="Photo of Agnethe"`,
            birthplace: "Nuuk, Greenland",
            bio: "Agnethe Davidsen (29 August 1947 – 25 November 2007) was a Greenlandic judge who was the first female government minister in Greenland and only the second female mayor of Nuuk, the capital of Greenland, where she was mayor for more than 14 years until she died suddenly at the age of 60."
        }
    ],
    cities: [
        {
            id: 1,
            name: "Nuuk",
            population: 19604,
            image: `src="https://visitgreenland.com/wp-content/uploads/nuuk-in-the-capital-region-in-greenland.jpg" alt="Photo of Nuuk"`
        },
        {
            id: 2,
            name: "Sisimiut",
            population: 5582,
            image: `src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sisimiut_Port_in_summer_2010_%289%29.JPG/450px-Sisimiut_Port_in_summer_2010_%289%29.JPG" alt="Photo of Sisimiut"`
        },
        {
            id: 3,
            name: "Ilulissat",
            population: 4670,
            image: `src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ilulissat.jpg/1024px-Ilulissat.jpg" alt="Photo of Ilulissat"`
        }
    ],
    landmarks: [
        {
            id: 1,
            name: "Nuuk Fjord",
            location: "Nuuk, Greenland",
            facts: "The Nuuk Fjord is the second-largest fjord system in the world and home to Greenland’s capital city. It is located about 240km south of the Arctic Circle on the mid-west coast of Greenland and stretches for 160km inland towards the Great Greenland Ice Sheet.",
            image: `src="https://guidetogreenland.com/wp-content/uploads/2020/06/weekend-stand-up-paddleboard-with-whales-or-by-sermitsiaq-waterfall-i-nuuk-1-1024x683.jpg.webp" alt="Stand up paddleboarding in Nuuk Fjord"`
        },
        {
            id: 2,
            name: "Sisimiut Museum",
            location: "Sisimiut, Greenland",
            facts: "Located in a historical building near the harbor, the Sisimiut Museum specializes in Greenlandic trade, industry and shipping, with artifacts based on ten years of archaeological research and excavations of the ancient Saqqaq culture settlements near the town, offering an insight into the culture of the region of 4,000 years ago.",
            image: `src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sisimiut-museum-turf-house.jpg/330px-Sisimiut-museum-turf-house.jpg" alt="Photo of Sisimiut Museum"`
        },
        {
            id: 3,
            name: "Ilulissat Art Museum",
            location: "Ilulissat, Greenland",
            facts: "The museum building was originally built in 1923 by architect Helge Møller. It served as the residence of the colony manager; 5 colony managers and 5 commercial principals have lived in the house.[1] Later on, the house was acquired by the municipal colony and turned into the museum which was opened in 1995.",
            image: `src="http://www.museum.gl/Files/Billeder/Museerne/Ilulissat%20kunstmuseumweb.jpg" alt="Photo of Ilulissat Art Museum"`
        }
    ]
};

export const getCelebrities = () => {
    return database.celebrities.map(celebrities => ({...celebrities}));
}

export const getCities = () => {
    return database.cities.map(cities => ({...cities}));
}

export const getLandmarks = () => {
    return database.landmarks.map(landmarks => ({...landmarks}));
}