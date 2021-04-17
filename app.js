const spins = document.querySelectorAll('.rps > div')
const rulesField = document.querySelector('.rules')
const rulesBtn = document.querySelector('#btn-rules')
const rulesClose = document.querySelector('#rules-close')
const rps = document.querySelector('.rps')
const playField = document.querySelector('.playing')
const yourpick = document.querySelector('.you-picked')
const enemypick = document.querySelector('.enemy-picked')
const whowinField = document.querySelector('.whowin')
const scoreValue = document.querySelector('.points span:last-child')
let spinsEnemy = '';

spins.forEach((spin) => {
  spin.addEventListener('click', chooseSpin)
})
rulesBtn.addEventListener('click', toggleRules)
rulesClose.addEventListener('click', toggleRules)

function chooseSpin(event) {
  console.log(event.currentTarget.innerHTML)
  rps.classList.toggle('remove')
  play(event.currentTarget)
}

function chooseEnemy() {
  return Math.round(Math.random() * 2)
}

function toggleRules() {
  rulesField.classList.toggle('ativo')
}

function play(you) {
  spinsEnemy = spins[chooseEnemy()]
  playField.classList.toggle('remove')
  yourpick.innerHTML = you.innerHTML
  yourpick.id = (`${you.id}`)

  enemypick.innerHTML = spinsEnemy.innerHTML
  enemypick.id = (`${spinsEnemy.id}`)

  whowinField.querySelector('h2').innerText = whoWin(yourpick, enemypick)
  whowinField.classList.toggle('remove')
  whowinField.querySelector('button').addEventListener('click', () => {
    playField.classList.add('remove')
    rps.classList.remove('remove')
    whowinField.classList.add('remove')
  })
}

function whoWin(you, enemy) {
  if ((you.id === 'paper' && enemy.id === 'scissors') || (you.id === 'rock' && enemy.id === 'paper') || (you.id === 'scissors' && enemy.id === 'rock')) {
    if(+scoreValue.innerText > 0) {
      scoreValue.innerText = +scoreValue.innerText - 1
    }
    return 'You loose'
  } 
  else if (you.id === enemy.id) {
    return 'Tie' 
  }
  else {
    scoreValue.innerText = +scoreValue.innerText + 1
    return 'You win'
  }
}