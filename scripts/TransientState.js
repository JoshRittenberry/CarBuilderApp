export const transientState = {
    "vehicleId": 0,
    "paintId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelId": 0
}

export const setVehicle = (vehicleId) => {
    transientState.vehicleId = vehicleId
    console.log("The T-State's vehicleId property was updated to: " + vehicleId)
}

export const setPaint = (paintId) => {
    transientState.paintId = paintId
    console.log("The T-State's paintId property was updated to: " + paintId)
}

export const setInerior = (interiorId) => {
    transientState.interiorId = interiorId
    console.log("The T-State's interiorId property was updated to: " + interiorId)
}

export const setTechnology = (technologyId) => {
    transientState.technologyId = technologyId
    console.log("The T-State's technologyId property was updated to: " + technologyId)
}

export const setWheel = (wheelId) => {
    transientState.wheelId = wheelId
    console.log("The T-State's wheelId property was updated to: " + wheelId)
}

export const saveOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    console.log(transientState)

    const orders = await fetch("https://localhost:7085/orders", postOptions)

    const newOrder = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrder)
}

export const completeOrder = async (id) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    }

    console.log(id)

    const orders = await fetch(`https://localhost:7085/orders/${id}/complete`, postOptions)

    const orderUpdated = new CustomEvent("orderUpdated")
    document.dispatchEvent(orderUpdated)
}