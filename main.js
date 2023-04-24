// Функция для добавления карточек
class Card {
  _open = false
  _success = false

  constructor(container, number, action) {
    this.card = document.createElement('div')
    this.card.classList.add('card')
    this.card.textContent = number
    this.number = number

    this.card.addEventListener('click', () => {
      if (this.open == false && this.success == false) {
          this.open = true
          action(this)
        }
      })
      container.append(this.card)
    }

    set open(value) {
      this._open = value
      value ? this.card.classList.add('open') : this.card.classList.remove('open')

    }

    get open() {
      return this._open
    }

    set success(value) {
      this._success = value
      value ? this.card.classList.add('success') : this.card.classList.remove('success')
    }

    get success() {
      return this._open
    }
}

// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function newGame(container, cardsCount) {
   let cardsNumberArray = []
    cardsArray = [],
    firstCard = null,
    secondCard = null

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }
// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел
  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip ))
  }

  function flip(card) {
    if(firstCard !== null && secondCard !== null) {
      if(firstCard.number !== secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard = null
        secondCard = null
      }
    }

    if(firstCard == null) {
      firstCard = card
    } else {
      if (secondCard == null) {
          secondCard = card
      }
    }

    if(firstCard !== null && secondCard !== null) {
      if(firstCard.number == secondCard.number) {
        firstCard.success = true
        secondCard.success = true
        firstCard = null
        secondCard = null
      }
    }

    if(document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
      alert('Игра окончена')
      container.innerHTML = ''
      cardsNumberArray = []
      cardsArray = [],
      firstCard = null,
      secondCard = null

      newGame(container, cardsCount)
    }
  }
}

newGame(document.getElementById('game'), 8)




