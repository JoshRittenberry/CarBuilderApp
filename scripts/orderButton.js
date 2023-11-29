import { saveOrder } from "./TransientState.js"

const handleOrderButton = (clickEvent) => {
    if (clickEvent.target.name === "orderButton") {
        console.log("Order Created")
        saveOrder()
    }
}

export const orderButton = () => {
    document.addEventListener("click", handleOrderButton)

    return `
    <button type="button" name="orderButton">Place Car Order</button>
    `
}