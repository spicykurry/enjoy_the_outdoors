"use strict"

// get the dropdown list into the js file for us to work with
let mountainsDDL = document.querySelector("#mountainSelect")

let mountainsArray = []

window.onload = function () {

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;

        // this is the function to generate the list of mountains as soon as the data loads
        mountainsArray.forEach((mountain) => {
            mountainsDDL.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
        });


    })

}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}