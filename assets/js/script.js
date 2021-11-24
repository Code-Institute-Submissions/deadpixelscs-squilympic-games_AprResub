function createBoard(cards, main) {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'assets/images/cards/tile-reverse-100px.png')
        card.addEventListener('click', () => {
            if (cards[i].picked === true) {
                return;
            }

            //flip the card over
            card.setAttribute('src','assets/images/cards/ + cards[i].name' +'-100px.png');

            //When any card is selected do this to show card
            if (main.selectedCard === null) {
                main.selectedCardElement = card;
                main.selectedCard = i;
            }
            //Not clicking on the same card twice
            else if (main,selectedCard !==i) {
                var firstCard = cards[main.selectedCard];
                var secondCard = cards[i]
                var secondCardElement = card;
                //clicking the other card of the pair
                if (firstCard.name === secondCard.name) {
                    firstCard.picked = true;
                    secondCard.picked = true;
                    main.picked++;
                    
                }
                })

            }



    
    //cardArray.sort(() => 0.5 - Math.random())

    //const grid = document.querySelector('.grid')
    //const resultDisplay = document.querySelector('#result')
    //let cardsChosen = []
    //let cardsChosenId = []
    //let cardsWon = []

    //start creating the game board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/images/tile-reverse-100px.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matching pairs
    function checkForMatch() {
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

    createBoard()
})