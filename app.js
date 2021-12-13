
let clickUpgrades = {

    dance1: {
        name: "Hands in Pockets",
        price: 60,
        quantity: 0,
        multiplier: 20,


    },

    dance2: {
        name: "Confident",
        price: 50,
        quantity: 0,
        multiplier: 4,

    },

    dance3: {
        name: "Spirit Fingers",
        price: 40,
        quantity: 0,
        multiplier: 4,

    },

    dance4: {
        name: "Strike a Pose",
        price: 30,
        quantity: 0,
        multplier: 4
    },

    dance5: {
        name: "Swat the Bee",
        price: 20,
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
    let move = automaticUpgrades.dance6
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price *= 2
    }
    update()
}

function upgradeDance5() {
    let move = clickUpgrades.dance5
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price += 2
    }
    update()
}

function upgradeDance4() {
    let move = clickUpgrades.dance4
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price *= 2
    }
    update()
}


function upgradeDance3() {
    let move = clickUpgrades.dance3
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price *= 2
    }
    update()
}


function upgradeDance2() {
    let move = clickUpgrades.dance2
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price *= 2
    }
    update()
}


function upgradeDance1() {
    let move = clickUpgrades.dance1
    if (happy >= move.price) {
        move.quantity++
        happy -= move.price
        move.price *= 2
    }
    update()
}


function getImage(happy) {

    let image = "";
    if (happy <= 10) {
        image = "https://thumbs.gfycat.com/WarpedAchingHagfish-size_restricted.gif"
    }
    else {
        image = "https://media3.giphy.com/media/l0E9CrSVVI3g4/giphy.gif"
    }
    return image;
    update()
}




// function imgSwap() {

//     if (happy <= 10) {

//         document.getElementById("img").src = "https://thumbs.gfycat.com/WarpedAchingHagfish-size_restricted.gif";

//     } else {
//         document.getElementById("img").src = "https://media3.giphy.com/media/l0E9CrSVVI3g4/giphy.gif";
//     }

// }


function update() {
    document.getElementById('happy').innerText = `${happy}`

    document.getElementById('dance6').innerText = `${automaticUpgrades.dance6.quantity}`

    document.getElementById('dance6Price').innerText = `${automaticUpgrades.dance6.price}`

    document.getElementById('dance5').innerText = `${clickUpgrades.dance5.quantity}`

    document.getElementById('dance5Price').innerText = `${clickUpgrades.dance5.price}`

    document.getElementById('dance4').innerText = `${clickUpgrades.dance4.quantity}`

    document.getElementById('dance4Price').innerText = `${clickUpgrades.dance4.price}`

    document.getElementById('dance3').innerText = `${clickUpgrades.dance3.quantity}`

    document.getElementById('dance3Price').innerText = `${clickUpgrades.dance3.price}`

    document.getElementById('dance2').innerText = `${clickUpgrades.dance2.quantity}`

    document.getElementById('dance2Price').innerText = `${clickUpgrades.dance2.price}`

    document.getElementById('dance1').innerText = `${clickUpgrades.dance1.quantity}`

    document.getElementById('dance1Price').innerText = `${clickUpgrades.dance1.price}`

    document.getElementById('imgSwap').innerHTML = `${happy}`
}

setInterval(autoUpgrades, 1000)