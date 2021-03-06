import { useParks } from "./ParkProvider.js"

export const ParksHtml = (park) => {
    return `
        <section class="park previewSelect">
            <h3 class="park__name">${park.fullName}</h3>
            <div class="park__">${park.states}</div>
            <button class="detailsButton" id="park--${park.id}">${park.fullName} Details</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkDiv")

eventHub.addEventListener("click", event => {
    // console.log(event)
    if(event.target.id.startsWith("park--")) {
        const [prefix, parkId] = event.target.id.split("--") 
    
            const parksArray = useParks()
            const selectedPark = parksArray.find((park) => park.id === parkId)
            // console.log(selectedPark)
            contentTarget.innerHTML = `
            ${detailsWindow(selectedPark)}
            `
            // detailsWindow(selectedpark)
        // console.log(prefix, event)
        // const customEvent = new CustomEvent("ParkButtonClicked", {
        //     detail: {
        //         parkId: parseInt(parkId)
        //     }
        // })
        // console.log(customEvent)
        // eventHub.dispatchEvent(customEvent) 
    }
})

export const detailsWindow = (park) => {
    // console.log(park)
    return `
    <section class="windowContainerContent previewSelect">
    <h2>Park: ${park.fullName}</h2>
    <p>Description: ${park.description}</p> 
    <p>Activities: ${park.activities.map(activity => {
        return activity.name
    }).join(", ")}</p>
    </section> 
    `
}