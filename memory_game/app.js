// create cards array for grid

const cardArray = [

    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },

    {
        name: 'fries',
        img: 'img/fries.png',
    },

    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },

    {
        name: 'pizza',
        img: 'img/pizza.png',
    },

    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },

    {
        name: 'fries',
        img: 'img/fries.png',
    },

    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },

    {
        name: 'pizza',
        img: 'img/pizza.png',
    }
]


// get cards in random order

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createCard() {

    for( let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
} 

createCard()

// function that checks for a match

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match!')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('You clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You've got a match!")
        cards[optionOneId].setAttribute('src', 'img/black.png')
        cards[optionTwoId].setAttribute('src', 'img/black.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Sorry, try again!')
    }

    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulations, you've found them all!"
    }
}

// create function that flip card

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 300)
    }
}