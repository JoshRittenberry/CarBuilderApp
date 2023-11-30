import { completeOrder } from "./TransientState.js"

const copmleteOrderButton = (clickEvent) => {
    if (clickEvent.target.name == "completeButton") {
        console.log("Order", clickEvent.target.id, "Completed")
        completeOrder(parseInt(clickEvent.target.id))
    }
}

export const getOrders = async () => {

    const orderArray = await fetch("https://localhost:7085/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel&_expand=vehicle")
    const orders = await orderArray.json()

    document.addEventListener("click", copmleteOrderButton)

    let ordersHTML = `
    <h2>Custom Car Orders</h2>
    `

    const arrayOfOrders = orders.map(
        (order) => {
            return `
            <div>
                <p>A customer ordered a ${order.paint.color} ${order.vehicle.type} with ${order.wheel.style} wheels, ${order.interior.material} interior, and the ${order.technology.package} for a total cost of $${order.totalCost}</p>
                <input type="button" name="completeButton" id="${order.id}" value="Complete"/>
            </div>
            `
        }
    )

    ordersHTML += arrayOfOrders.join("")
    return ordersHTML
}