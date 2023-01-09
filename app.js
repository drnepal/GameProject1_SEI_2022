document.addEventListener('DOMContentLoaded', () => {
  //card options array of obects
  const cardArray = [
    {
      name: 'diamond-1',
      img: 'images/diamond-1.png'
    },
    {
      name: 'diamond',
      img: 'images/diamond.png'
    },
    {
      name: 'gem-1',
      img: 'images/gem-1.png'
    },
    {
      name: 'gem-2',
      img: 'images/gem-2.png'
    },
    {
      name: 'gem-3',
      img: 'images/gem-3.png'
    },
    {
      name: 'gem',
      img: 'images/gem.png'
    },
    
    {
      name: 'diamond-1',
      img: 'images/diamond-1.png'
    },
    {
      name: 'diamond',
      img: 'images/diamond.png'
    },
    {
      name: 'gem-1',
      img: 'images/gem-1.png'
    },
    {
      name: 'gem-2',
      img: 'images/gem-2.png'
    },
    {
      name: 'gem-3',
      img: 'images/gem-3.png'
    },
    {
      name: 'gem',
      img: 'images/gem.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/white.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 300)
    }
  }

  createBoard()
})
function resetGame() {
  window.location.reload();
}


