const form = document.querySelector('form')

let inputAdults = document.getElementById('adults')
let inputKids = document.getElementById('kids')
let inputTiming = document.getElementById('timing')

let result = document.getElementById('result')

form.onsubmit = function(event) {
    event.preventDefault()
}

function calc() {
    let adults = inputAdults.value
    let kids = inputKids.value
    let timing = inputTiming.value

    let totalAmountMeat = meatPerPerson(timing) * adults + (meatPerPerson(timing) / 2 * kids)
    let totalAmountBeer = beerPerPerson(timing) * adults
    let totalAmountDrinks = drinksPerPerson(timing) * adults + (drinksPerPerson(timing) / 2 * kids)

    // result.innerHTML = `<p>${totalAmountMeat}kg de Carne</p>`
    // result.innerHTML += `<p>${totalAmountBeer}kg de Cerveja</p>`
    // result.innerHTML += `<p>${totalAmountDrinks}kg de Bebidas</p>`
}

function meatPerPerson(timing) {
    if(timing >= 6) {
        return 650
    }else {
        return 400
    }
}

function beerPerPerson(timing) {
    if(timing >= 6) {
        return 2000
    }else {
        return 1200
    }
}

function drinksPerPerson(timing) {
    if(timing >= 6) {
        return 1500
    }else {
        return 1000
    }
}