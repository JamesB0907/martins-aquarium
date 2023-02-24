const database = {
    Locations: [
        {
            Place: "Atlantis",
            Description: "Atlantis is made up of concentric islands separated by wide moats and linked by a canal that penetrated to the center. The lush islands contain gold, silver, and other precious metals and support an abundance of rare, exotic wildlife. There is a great capital city on the central island."
        },
        {
            Place: "Utopia",
            Description: "A complex, self-contained community set on an island, in which people share a common culture and way of life."
        },
        {
            Place: "Fantasia",
            Description: "A place composed entirely of musical pieces and cartoon characters."
        }
    ]
}

export const getLocation = () => {
    return database.Locations.map(copyOfSingleLocationObject => ({...copyOfSingleLocationObject}))
}
