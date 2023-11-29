import { setVehicle } from "./TransientState.js"

const vehicleArray = await fetch("https://localhost:7085/vehicles")
const vehicles = await vehicleArray.json()

export const getVehicles = () => {
    document.addEventListener("change", changeHandler)

    let vehicleHTML = `
    <h2>Vehicle</h2>
    <select id="vehicle">
        <option value="0" id="vehicle">Select A Vehicle...</option>
    `

    for (const vehicle of vehicles) {
        vehicleHTML += `
            <option value="${vehicle.id}" id="vehicle">${vehicle.type}</option>
        `
    }
    
    vehicleHTML += `</select>`
    return vehicleHTML
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "vehicle") {
        console.log("Selected VehicleId: " + changeEvent.target.value)
        setVehicle(parseInt(changeEvent.target.value))
    }
}