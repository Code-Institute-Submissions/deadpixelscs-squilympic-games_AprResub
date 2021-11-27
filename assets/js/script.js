/*jshint esversion: 6 */
window.document.addEventListener('DOMContentLoaded', () => {
    //start the game immediately
    startGame();
});

function createBoard(cards, main) {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/images/cards/tile-reverse-100px.png');
        card.addEventListener('click', () => {
            if (cards[i].picked === true) {
                return;
            }

            // flip the card
            card.setAttribute('src', 'assets/images/cards/' + cards[i].name + '-100px.png');

            // Any card selected?
            if (main.selectedCard === null) {
                main.selectedCardElement = card;
                main.selectedCard = i;
            }
            // We're not clicking the same card twice are we?
            else if (main.selectedCard !== i) {
                var firstCard = cards[main.selectedCard];
                var secondCard = cards[i];
                var secondCardElement = card;
                // Did we click the other card of the pair?
                if (firstCard.name === secondCard.name) {
                    firstCard.picked = true;
                    secondCard.picked = true;
                    main.picked++;
                    // We did! Well done! Flip to white
                    flipWhite(main.selectedCardElement, secondCardElement, main);
                } else {
                    // Nope, picked the wrong one. Flip back
                    flipBack(main.selectedCardElement, secondCardElement, main);
                }
                // Either way, clean up
                main.selectedCard = null;
                main.selectedCardElement = null;
                main.attempts++;

                // Did we win?
                if (main.picked === (cards.length / 2)) {
                    alert('congrats! only took you ' + main.attempts + ' tries');
                }
            }
            // Are we done failing yet?
            if (main.attempts === main.maxAttempts) {
                alert('you lose. you picked: ' + main.picked);
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
    for (let i = 0; i < difficulties.length; i++) {
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
    grid.innerHTML = "";
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

function flipBack(first, second, main) {
    setTimeout(() => {
        first.setAttribute('src', 'assets/images/cards/tile-reverse-100px.png');
        second.setAttribute('src', 'assets/images/cards/tile-reverse-100px.png');
    }, main.timeout);
}

function flipWhite(first, second, main) {
    setTimeout(() => {
        first.setAttribute('src', 'assets/images/cards/white-100px.png');
        first.click = undefined;

        second.setAttribute('src', 'assets/images/cards/white-100px.png');
        second.click = undefined;
    }, main.timeout);
}

function getCards() {
    var cards = [{
            name: 'triangle',
            picked: false
        },
        {
            name: 'square',
            picked: false
        },
        {
            name: 'circle',
            picked: false
        },
        {
            name: 'triangle-bad-guy',
            picked: false
        },
        {
            name: 'square-bad-guy',
            picked: false
        },
        {
            name: 'circle-bad-guy',
            picked: false
        },
        {
            name: 'player-001',
            picked: false
        },
        {
            name: 'player-067',
            picked: false
        },
        {
            name: 'player-456',
            picked: false
        },
        // Second set
        {
            name: 'triangle',
            picked: false
        },
        {
            name: 'square',
            picked: false
        },
        {
            name: 'circle',
            picked: false
        },
        {
            name: 'triangle-bad-guy',
            picked: false
        },
        {
            name: 'square-bad-guy',
            picked: false
        },
        {
            name: 'circle-bad-guy',
            picked: false
        },
        {
            name: 'player-001',
            picked: false
        },
        {
            name: 'player-067',
            picked: false
        },
        {
            name: 'player-456',
            picked: false
        },
    ];

    var shuffled = shuffleCards(cards);
    return shuffled;
}

function shuffleCards(cards) {
    var currentIndex = cards.length;
    var randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.trunc(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

    return cards;
}