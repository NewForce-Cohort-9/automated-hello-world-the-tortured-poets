const database = {
    cities: [
        {
            id: 1,
            name: "Hamilton, Bermuda",
            population: 850,
            image: "",
        },
        {
            id: 2,
            name: "St. George's town, Bermuda",
            population: 1500,
            image: "",
        },
        {
            id: 3,
            name: "Atlantis",
            population: 60000000,
            image: "",
        }
    ],

    landmarks: [
        {
            id: 1,
            name: "Gibb's Hill Lighthouse",
            location: "Lighthouse Road, St Anne's Rd, Cross Bay SN 01, Bermuda",
            image: "",
            facts: "Built in 1844 by Cottam and Hallen of Cornwall Road, Lambeth; in their works within sight of Waterloo Bridge Erected by the Royal Engineers, the Gibb's Hill Lighthouse is the taller of two lighthouses on Bermuda, and one of the first lighthouses in the world to be made of cast-iron."
        },
        {
            id: 2,
            name: "Royal Naval Dockyard",
            location: "5 Freeport Drive, Sandys MA 01, Bermuda",
            image: "",
            facts: "HMD Bermuda was the principal base of the Royal Navy in the Western Atlantic between American independence and the Cold War. The Imperial fortress colony of Bermuda had occupied a useful position astride the homeward leg taken by many European vessels from the New World since before its settlement by England in 1609."
        },
        {
            id: 3,
            name: "Fort St. Catherine",
            location: "15 Coot Pond Road St. George's, Bermuda",
            image: "",
            facts: "Fort St. Catherine, or Fort St. Catherine's, is a coastal artillery fort at the North-East tip of St. George's Island, in the Imperial fortress colony of Bermuda. Successively redeveloped, the fort was used first by Bermudian Militia and then by regular Royal Artillery units from 1612 into the 20th century."
        }
    ],

    celebs: [
        {
            id: 1,
            name: "Lena Headey",
            image: "",
            birthplace: "Hamilton, Bermuda",
            bio: "Lena Kathren Headey is an English actress. She gained international recognition and acclaim for her portrayal of Cersei Lannister on the HBO fantasy drama series Game of Thrones, for which she received five Primetime Emmy Award nominations and a Golden Globe Award nomination, and Queen Gorgo in 300."
        },
        {
            id: 2,
            name: "Heather Nova",
            image: "",
            birthplace: "Boat, Bermuda",
            bio: "Heather Nova is a Bermudian singer-songwriter and poet. As of 2022, she has released eleven full-length albums, six EPs and twelve singles."
        },
        {
            id: 3,
            name: "Earl Cameron",
            image: "",
            birthplace: "Pembroke Parish, Bermuda",
            bio: "Earlston Jewett Cameron, CBE, known as Earl Cameron, was a Bermudian actor who lived and worked in the United Kingdom. After appearing on London's West End stage, he became one of the first black stars in the British film industry."
        }
    ],
}
export const getCelebs = () => {
    return database.celebs.map(celebs => ({...celebs}));
}

export const getCities = () => {
    return database.cities.map(cities => ({...cities}));
}

export const getLandmarks = () => {
    return database.landmarks.map(landmarks => ({...landmarks}));
}