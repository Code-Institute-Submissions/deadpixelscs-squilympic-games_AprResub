document.addEventListener('DOMContentLoaded', () => {

//create an array for a pair of all 10 image slides

    const cardArray = [
        {
            name: '456',
            img: 'images/player-456-100px.png'
        },
        {
            name: '456',
            img: 'images/player-456-100px.png'
        },
        {
            name: 'front man',
            img: 'images/front-man-100px.png'
        },
        {
            name: 'front man',
            img: 'images/front-man-100px.png'
        },
        {
            name: 'square bad guy',
            img: 'images/square-bad-guy-100px.png'
        },
        {
            name: 'square bad guy',
            img: 'images/square-bad-guy-100px.png'
        },
        {
            name: 'player 001',
            img: 'images/player-001-100px.png'
        },
        {
            name: 'player 001',
            img: 'images/player-001-100px.png'
        },
        {
            name: 'circle bad guy',
            img: 'assets/images/circle-bad-guy-100px.png'
        },
        {
            name: 'circle bad guy',
            img: 'images/circle-bad-guy-100px.png'
        },
        {
            name: 'player 067',
            img: 'images/player-067-100px.png'
        },
        {
            name: 'player 067',
            img: 'images/player-067-100px.png'
        },
        {
            name: 'triangle bad guy',
            img: 'images/triangle-bad-guy-100px.png'
        },
        {
            name: 'triangle bad guy',
            img: 'images/triangle-bad-guy-100px.png'
        },
        {
            name: 'circle',
            img: 'images/circle-100px.png'
        },
        {
            name: 'circle',
            img: 'images/circle-100px.png'
        },
        {
            name: 'triangle',
            img: 'images/triangle-100px.png'
        },
        {
            name: 'triangle',
            img: 'images/triangle-100px.png'
        },
        {
            name: 'square',
            img: 'images/square-100px.png'
        },
        {
            name: 'square',
            img: 'images/square-100px.png'
        }
    ]


const grid = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//start creating the game board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/white-100px.png');
        card.setAttribute('data-id', i);
        // card.addEventListener('click' slide tuning over)
        grid.appendChild(card);
    }
}

// check for matching pairs
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen [1]) {
        alert('You are closer to survival!!!');
        cards[optionOneId].setAttribute('src', 'images/white-100px.png');
        cards[optionTwoId].setAttribute('src', 'images/white-100px.png');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src','images/eliminated-100px.png');
        cards[optionTwoId].setAttribute('src','images/eliminated-100px.png');
        alert('Ha, Ha, Ha, say goodbye to your family');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay;
}

//flip the card over
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 800)
    }
}

createBoard();

});