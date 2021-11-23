function createBoard(cards, main) {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'assets/images/tile-reverse-100px.png')
        card.addEventListener('click', () => {
            if (cards[i].picked === true) {
                return;
            }

    //create an array for a pair of all 10 image slides

    //const cardArray = [
        {
            name: '456',
            img: 'assets/images/player-456-100px.png'
        },
        {
            name: '456',
            img: 'assets/images/player-456-100px.png'
        },
        {
            name: 'front man',
            img: 'assets/images/front-man-100px.png'
        },
        {
            name: 'front man',
            img: 'assets/images/front-man-100px.png'
        },
        {
            name: 'square bad guy',
            img: 'assets/images/square-bad-guy-100px.png'
        },
        {
            name: 'square bad guy',
            img: 'assets/images/square-bad-guy-100px.png'
        },
        {
            name: 'player 001',
            img: 'assets/images/player-001-100px.png'
        },
        {
            name: 'player 001',
            img: 'assets/images/player-001-100px.png'
        },
        {
            name: 'circle bad guy',
            img: 'assets/images/circle-bad-guy-100px.png'
        },
        {
            name: 'circle bad guy',
            img: 'assets/images/circle-bad-guy-100px.png'
        },
        {
            name: 'player 067',
            img: 'assets/images/player-067-100px.png'
        },
        {
            name: 'player 067',
            img: 'assets/images/player-067-100px.png'
        },
        {
            name: 'triangle bad guy',
            img: 'assets/images/triangle-bad-guy-100px.png'
        },
        {
            name: 'triangle bad guy',
            img: 'assets/images/triangle-bad-guy-100px.png'
        },
        {
            name: 'circle',
            img: 'assets/images/circle-100px.png'
        },
        {
            name: 'circle',
            img: 'assets/images/circle-100px.png'
        },
        {
            name: 'triangle',
            img: 'assets/images/triangle-100px.png'
        },
        {
            name: 'triangle',
            img: 'assets/images/triangle-100px.png'
        },
        {
            name: 'square',
            img: 'assets/images/square-100px.png'
        },
        {
            name: 'square',
            img: 'assets/images/square-100px.png'
        }
    ]

    //cardArray.sort(() => 0.5 - Math.random())

    //const grid = document.querySelector('.grid')
    //const resultDisplay = document.querySelector('#result')
    //let cardsChosen = []
    //let cardsChosenId = []
    //let cardsWon = []

    //start creating the game board

    //function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/images/tile-reverse-100px.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matching pairs
    //function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/images/tile-reverse-100px.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/tile-reverse-100px.png')
            alert('You have clicked this tile already!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You are closer to survival!!!')
            cards[optionOneId].setAttribute('src', 'assets/images/white-100px.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/white-100px.png')
            cards[optionOneId].removeEventListener('click', 'flipCard')
            cards[optionTwoId].removeEventListener('click', 'flipCard')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/tile-reverse-100px.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/tile-reverse-100px.png')
            alert('Ha, Ha, Ha, say goodbye to your family')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'You survived!!!!!...for now ;)'
        }
    }

    //flip the card over
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===3) {
            setTimeout(checkForMatch, 500)
        }
    }

    //createBoard()
})