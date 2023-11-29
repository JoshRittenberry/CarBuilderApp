import { setPaint } from "./TransientState.js"

const paintArray = await fetch("https://localhost:7085/paintcolors")
const paints = await paintArray.json()

export const getPaints = () => {
    document.addEventListener("change", changeHandler)

    let paintHTML = `
    <h2>Paint</h2>
    <select id="paint">
        <option value="0" id="paint">Select A Paint...</option>
    `

    for (const paint of paints) {
        paintHTML += `
            <option value="${paint.id}" id="paint">${paint.color}</option>
        `
    }

    paintHTML += `</select>`
    return paintHTML
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        console.log("Selected PaintID: " + changeEvent.target.value)
        setPaint(parseInt(changeEvent.target.value))
    }
}