
let theSimpleButton = document.querySelector("#simpleButton")
let theSampleUL = document.querySelector("#locations")
let theParksUL = document.querySelector("#parks")

theSimpleButton.addEventListener("click", function(event){
    console.log(locationsArray)
    console.log(nationalParksArray)
    console.log(parkTypesArray)

    locationsArray.forEach((location) => {
        theSampleUL.innerHTML += `<li>${location}</li>`
    });

nationalParksArray.forEach((park) => {
    theParksUL.innerHTML += `<li>${park.locationName}</li>`
});

    theSampleUL.classList.remove("d-none")

    theParksUL.classList.remove("d-none")

})