import { getFish } from "./database.js"

export const FishList = () => {
    const fishes = getFish()

    let htmlString = '<article class="fishList">'

    for (let singleFish of fishes) {

        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${singleFish.imgUrl}" /></div>
            <div class="fish__name">Name: ${singleFish.name}</div>
            <div class="fish__species">Species: ${singleFish.species}</div>
            <div class="fish__length">Length: ${singleFish.length} inches</div>
            <div class="fish__location">Location Harvested: ${singleFish.locationHarvested}</div>
            <div class="fish__diet">Food: ${singleFish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}
