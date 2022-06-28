
let filterParkLocation = document.querySelector("#filterByParkLocation")
let filterParkType = document.querySelector("#filterByParkType")
let filterViewAll = document.querySelector("#viewAllParks")
let stateList = document.querySelector("#stateListDropdown")
let typeList = document.querySelector("#parkTypeListDropdown")
let theLocationsUL = document.querySelector("#locations")
let types = document.querySelector("#types")

// This is listening for the user to select "filter by location"
// and populates the state/location dropdown list
filterParkLocation.addEventListener("click", function (event) {
    locationsArray.forEach((location) => {
        theLocationsUL.innerHTML += `<li>${location}</li>`
    });
    
    stateList.classList.remove("d-none")
})

// This is listening for the user to select "filter by type"
// and populates the type dropdown list
filterParkType.addEventListener("click", function () {
    parkTypesArray.forEach((type)=>{
        types.innerHTML += `<li>${type}</li>`
    })
    typeList.classList.remove("d-none")

})

filterViewAll.addEventListener("click", function () {


})