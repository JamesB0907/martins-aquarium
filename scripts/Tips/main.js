import { tipList } from './tiplist.js'

const newList = tipList()

const parentHTMLElement = document.querySelector(".aside")

parentHTMLElement.innerHTML = newList

console.log(newList)
