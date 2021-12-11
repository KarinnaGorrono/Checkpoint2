
let clickUpgrades = {

    dance1: {
        name: "Swat the Bee",
        price: 60,
        quantity: 0,
        multiplier: 20,


    },

    dance2: {
        name: "Hands in Pockets",
        price: 50,
        quantity: 0,
        multiplier: 4,

    },

    dance3: {
        name: "Shoot that Basketball without lookin'",
        price: 40,
        quantity: 0,
        multiplier: 4,

    },

    dance4: {
        name: "The 'I see you audience' - Confident",
        price: 30,
        quantity: 0,
        multplier: 4
    },
}

let automaticUpgrades = {

    dance6: {
        name: "The Jazzy Slither",
        price: 100,
        quantity: 0,
        multiplier: 1,

    }

}
let happy = 0
let totalMultiplier = 1

function clickUpgradesTotal() {
    let total = 0
    total = + clickUpgrades.dance1.quantity * clickUpgrades.dance1.multiplier
    return total
}


function dance() {
    happy += totalMultiplier
    happy += clickUpgradesTotal()
    update()
}

function autoUpgrades() {
    happy += automaticUpgrades.dance6.quantity * automaticUpgrades.dance6.multiplier
    update()
}

function upgradeDance6() {
    let move = automaticUpgrades.dance5
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price *= 2
    }
    update()
}





function update() {
    document.getElementById('happy').innerText = `${happy}`
    document.getElementById('dance6').innerText = `${automaticUpgrades.dance6.quantity}`
}