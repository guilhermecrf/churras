const form = document.querySelector('form')

let inputAdults = document.querySelector('#adults')
let inputKids = document.querySelector('#kids')
let inputTiming = document.querySelector('#timing')

const modalWrapper = document.querySelector('.modal-result')
const modalMessage = document.querySelector('#change')
const modalButtonClose = document.querySelector('#close')

form.onsubmit = event => {
    event.preventDefault()

    let adults = inputAdults.value
    let kids = inputKids.value
    let timing = inputTiming.value

    let totalAmountMeat = meatPerPerson(timing) * adults + (meatPerPerson(timing) / 2 * kids)
    let totalAmountBeer = beerPerPerson(timing) * adults
    let totalAmountDrinks = drinksPerPerson(timing) * adults + (drinksPerPerson(timing) / 2 * kids)

    const message = `Precisará de ${totalAmountMeat / 1000} Kg de Carne, ${Math.ceil(totalAmountBeer / 355)} latas de cerveja e, ${Math.ceil(totalAmountDrinks / 2000)} garrafas de bebidas.`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}

modalButtonClose.onclick = () => modalWrapper.classList.remove('open')

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