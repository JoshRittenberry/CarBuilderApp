import { completeOrder } from "./TransientState"

const copmleteOrderButton = (clickEvent) => {
    if (clickEvent.target.name == "completeButton") {
        console.log("Order", clickEvent.target.value, "Completed")
        completeOrder(clickEvent.target.value)
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
                <button type="button" name="completeButton" value="${order.id}">Complete Order</button>
            </div>
            `
        }
    )

    ordersHTML += arrayOfOrders.join("")
    return ordersHTML
}