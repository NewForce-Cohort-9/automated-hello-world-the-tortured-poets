const database = {
    cities: [
        {
            id: 1,
            name: "Hamilton, Bermuda",
            population: 850,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Front_Street_Hamilton_Bermuda.jpg/450px-Front_Street_Hamilton_Bermuda.jpg",
        },
        {
            id: 2,
            name: "St. George's town, Bermuda",
            population: 1500,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bermuda-Harbour_and_Town_of_St_George.jpg",
        },
        {
            id: 3,
            name: "Atlantis",
            population: 60000000,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Atlantis_Monsu_Desiderio.jpg",
        }
    ],

    landmarks: [
        {
            id: 1,
            name: "Gibb's Hill Lighthouse",
            location: "Lighthouse Road, St Anne's Rd, Cross Bay SN 01, Bermuda",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Gibbs_Hill_Lighthouse.jpg/330px-Gibbs_Hill_Lighthouse.jpg",
            facts: "Built in 1844 by Cottam and Hallen of Cornwall Road, Lambeth; in their works within sight of Waterloo Bridge Erected by the Royal Engineers, the Gibb's Hill Lighthouse is the taller of two lighthouses on Bermuda, and one of the first lighthouses in the world to be made of cast-iron."
        },
        {
            id: 2,
            name: "Royal Naval Dockyard",
            location: "5 Freeport Drive, Sandys MA 01, Bermuda",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/BermudaDockyard2.jpg/450px-BermudaDockyard2.jpg",
            facts: "HMD Bermuda was the principal base of the Royal Navy in the Western Atlantic between American independence and the Cold War. The Imperial fortress colony of Bermuda had occupied a useful position astride the homeward leg taken by many European vessels from the New World since before its settlement by England in 1609."
        },
        {
            id: 3,
            name: "Fort St. Catherine",
            location: "15 Coot Pond Road St. George's, Bermuda",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Fort_St._Catherine%27s%2C_St._George%27s_Island%2C_Bermuda.jpg/375px-Fort_St._Catherine%27s%2C_St._George%27s_Island%2C_Bermuda.jpg",
            facts: "Fort St. Catherine, or Fort St. Catherine's, is a coastal artillery fort at the North-East tip of St. George's Island, in the Imperial fortress colony of Bermuda. Successively redeveloped, the fort was used first by Bermudian Militia and then by regular Royal Artillery units from 1612 into the 20th century."
        }
    ],

    celebs: [
        {
            id: 1,
            name: "Lena Headey",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lena_Headey_Heroes_Comic_Con_2017.jpg/255px-Lena_Headey_Heroes_Comic_Con_2017.jpg",
            birthplace: "Hamilton, Bermuda",
            bio: "Lena Kathren Headey is an English actress. She gained international recognition and acclaim for her portrayal of Cersei Lannister on the HBO fantasy drama series Game of Thrones, for which she received five Primetime Emmy Award nominations and a Golden Globe Award nomination, and Queen Gorgo in 300."
        },
        {
            id: 2,
            name: "Heather Nova",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Heather_Nova.jpg/330px-Heather_Nova.jpg",
            birthplace: "Boat, Bermuda",
            bio: "Heather Nova is a Bermudian singer-songwriter and poet. As of 2022, she has released eleven full-length albums, six EPs and twelve singles."
        },
        {
            id: 3,
            name: "Earl Cameron",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Earlp8_%28cropped%29.jpg/330px-Earlp8_%28cropped%29.jpg",
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