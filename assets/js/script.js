function createBoard(cards, main) {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/cards/tile-reverse-100px.png')
        card.addEventListener('click', () => {
            if (cards[i].picked === true) {
                return;
            }

            //flip the card over
            card.setAttribute('src','images/cards/ + cards[i].name' +'-100px.png');

            //When any card is selected do this to show card
            if (main.selectedCard === null) {
                main.selectedCardElement = card;
                main.selectedCard = i;
            }
            //Not clicking on the same card twice
            else if (main,selectedCard !==i) {
                var firstCard = cards[main.selectedCard];
                var secondCard = cards[i];
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
                //Either way, clean up
                main.selectedCard = null;
                main.selectedCardElement = null;
                main.attempts++;

                //Win?
                if (main.picked === (cards.length /2)) {
                    alert('Congratulations! It only took you ' + main.attempts + 'tries');
                }
            }
            // Failing?
            if (main.attempts === main.maxAttempts) {
                alert('you lose. you picked:' + main.picked);
                clearRound();
                newRound();
            }

        });
        grid.appendChild(card);
    }
}

function startGame() {
    const difficulties = document.getElementsByName('difficulty');
    let difficulty = 40;
    for (let i = 0; i <difficulties.length; i++) {
        if (difficulties[i].checked) {
            difficulty = parseInt(difficulties[i].value);
        }
    }
    clearRound();
    newRound(difficulty);
    return false;
}

function clearRound() {
    const grid = document.querySelector('.grid');
    grid.innerHTML ="";
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
    
    function flipBack(first,second, main) {
        setTimeout(() => {
            first.setAttribute('src', 'images/cards/tile-reverse-100px.png');
            first.click = undefined;
        }, main.timeout)