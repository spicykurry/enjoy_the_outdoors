
let filterParkLocation = document.querySelector("#filterByParkLocation")
let filterParkType = document.querySelector("#filterByParkType")
let filterViewAll = document.querySelector("#viewAllParks")
let theLocationsUL = document.querySelector("#locations")
let types = document.querySelector("#types")


//get the dropdown list into the JS file for us to work with
let searchTypeDDL = document.querySelector("#filterOptions");

//get the locations dropdown so we can work with it
let locationsDDL = document.querySelector("#stateListDropdown")

//get the types dropdown so we can work with it
let typesDDL = document.querySelector("#parkTypesListDropdown")


//hide all the dropdowns and then check which is supposed to show below
searchTypeDDL.addEventListener("change", function (event) {
    locationsDDL.classList.add("d-none");
    typesDDL.classList.add("d-none");

    if (event.target.value === "location") {
        generateLocationsDDLOptions()
        locationsDDL.classList.remove("d-none")
        typesDDL.classList.add("d-none")
    }

    if (event.target.value === "type") {
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
        locationsDDL.classList.add("d-none")
    }
})

// This is a function that populates state dropdown when user selects to search by location

function generateLocationsDDLOptions() {
    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`
    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    });
}

// This is a function that populates type dropdown when a user selects to search by park type

function generateTypesDDLOptions() {
    typesDDL.innerHTML = `<option value="">Choose A Park Type</option>`
    parkTypesArray.forEach((type) => {
        typesDDL.innerHTML += `<option value="${type}">${type}</option>`
    })
}
// When user selects a state in the dropdown, this code is executed
locationsDDL.addEventListener("change", function (event) {

    let locationSelection = nationalParksArray.filter(nationalPark => nationalPark.State === event.target.value);
    console.log(locationSelection)


    let filteredLocationArray = nationalParksArray.filter((parks) => {
        return parks.State === locationSelection
    })
    console.log(filteredLocationArray)

    // then call a function that creates a card or table row for each item in the array

})

// When user selects a park type in the dropdown, this code is executed
typesDDL.addEventListener("change", function (event) {

    let typeSelection = parkTypesArray.filter(parkType => parkType === event.target.value);
    console.log(typeSelection)

    let filteredTypeArray = nationalParksArray.filter((parks) => {
        //return if object.locationName contains typeSelection
        // need to make both all lower or all upper case
        return parks.locationName.includes(typeSelection)
    })
    console.log(filteredTypeArray)
})



