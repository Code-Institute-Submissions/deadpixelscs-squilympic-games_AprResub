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
                    //Flip card to white if correct match
                    flipWhite(main.selectedCardElement, secondCardElement, main);
                }
                //Flip the card back when wrong
                else {
                    flipBack(main.selectedCardElement, secondCardElement, main);
                }
            }

            });
            grid.appendChild(card);
        }
    }

    function newRound(difficulty) {
        var main = {
            selectedCard: null,
            selectedCardElement: null,
            attempts: 0,
            maxAttempts: difficulty,
            picked: 0,
            timeout: 500
        }; 
        var cards = getCards();
        createBoard(cards, main); 
    }
}