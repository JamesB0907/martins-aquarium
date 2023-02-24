import { getFish } from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}

import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".s1")


parentHTMLElement.innerHTML = FishList()
