import { getTips } from './database.js'

export const tipList = () => {
    const tips = getTips()

    let htmlString = '<ul class= "tiplist">'

    for (let singleTip of tips) {

    htmlString += `<li>
    <div class="tip"> ${singleTip.tipObject}</div>
    </li>`

    }
    htmlString += `</ul>`

    return htmlString
}
const tips = getTips()
console.log(tips)