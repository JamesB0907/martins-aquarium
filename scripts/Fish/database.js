const database = {
    fish: [
        {
            imgUrl: `https://media.istockphoto.com/id/172126096/photo/sad-goldfish.jpg?s=612x612&w=0&k=20&c=VNwQCnZolnoHWBObTpJdQcVnBULpWEzCpW4RiJB2uZE=`,
            species: "Sad Goldfish",
            length: 4,
            name: "Tiny Tim",
            food: "Hopes and Dreams",
            locationHarvested:"Atlantis"
        }
        ,{
            imgUrl:`https://media.istockphoto.com/id/172126096/photo/sad-goldfish.jpg?s=612x612&w=0&k=20&c=VNwQCnZolnoHWBObTpJdQcVnBULpWEzCpW4RiJB2uZE=` ,
            species: "Unhappy Goldfish",
            length: 10,
            name: "Gollum",
            food: "Other goldfish",
            locationHarvested:"Utopia"
        }
        ,{
            imgUrl: `https://media.istockphoto.com/id/172126096/photo/sad-goldfish.jpg?s=612x612&w=0&k=20&c=VNwQCnZolnoHWBObTpJdQcVnBULpWEzCpW4RiJB2uZE=` ,
            species: "Depressed Goldfish",
            length: 9,
            name: "Speck",
            food: "Breadcrumbs",
            locationHarvested:"Fantasia"
        }
    ]
}

// export const mostHolyFish = () => {
//      const holyFish = []

//     for (singleFish of database.fish) {
//         if (singleFish.length % 3 === 0){
// holyFish.push (singleFish)
//         }
//     }

//     return holyFish
// }

// export const soldierFish = () => {
//     const soldierFish = []

//     for (singleFish of database.fish) {
//         if (singleFish.length % 5 === 0){
// soldierFish.push (singleFish)
//         }
//     }
//     return soldiers
// }

// export const nonHolyFish = () => {
//     for (singlefish of database.fish){
//         if  (singleFish.length % 3 !== 0 || singleFish.length % 5 !== 0){
// nonHolyFish.push (singleFish)
//         }
//     }
//     return regularFish
// }

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}


