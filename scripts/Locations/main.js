import { getLocation } from './database.js'

const allLocation = getLocation()

for (const singleLocation of allLocation) {
    console.log(singleLocation)
}

import { locationList } from './locationslist.js'

const parentHTMLElement = document.querySelector(".location__list")


parentHTMLElement.innerHTML = locationList()
