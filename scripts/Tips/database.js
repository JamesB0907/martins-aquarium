const database = {
    tip: [
    {
        tipObject: "The bigger the tank or aquarium the better. Most fish may be small in size, but they still need plenty of room to swim, especially if you have decided to get more than one."
    }
    ,{
        tipObject:"Think about where you place your tank. Keep it out of direct sunlight, away from windows and heating. The last thing you want is for the water in the tank to heat up out of your control. Invest in a decent filter. This will keep the water in the tank cleaner for longer, removing any debris, pollutants and waste. Add an air pump. This will keep the water in the tank oxygenated and keep it moving which is great for your fish."
    }
    ,{
        tipObject: "Fish may need heat and light. Depending on the breed of fish, heating could be crucial. If your fish are tropical there will be certain temperatures that you to need to ensure the water is kept to. Goldfish and cold water fish are an exception and will require no heat. Lighting will help any plant life in the tank to grow and will also show off the colours of your fish for you to enjoy."
    }
    ,{
        tipObject: "Include some plants and greenery. Using different varieties of plant life will give your fish somewhere to hide and play, helping them to feel safe. Real plants will help to maintain the nutrients in the tank, but artificial plants will work just as well for giving your fish somewhere to hide."
    }
]
}
export const getTips = () => {
    return database.tip.map(copyOfSingleTipObject => ({...copyOfSingleTipObject}))
}
