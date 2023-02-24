import { getLocation } from './database.js'

export const locationList = () => {
    const Locations = getLocation()

    let htmlString = '<article class= "location__list">'

    for (let singleLocation of Locations) {

    htmlString += `<section>
    <h1 class="place"> ${singleLocation.Place}</h1>
    <div class="description"> ${singleLocation.Description}</div>
    </section>`

    }
    htmlString += `</article>`

    return htmlString
}
