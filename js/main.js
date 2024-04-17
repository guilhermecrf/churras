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
    console.log(totalAmountMeat)
}

function meatPerPerson(timing) {
    if(timing >= 6) {
        return 650
    }else {
        return 400
    }
}