const gameTextDisplay = document.getElementById('gameText')
const gameImageDisplay = document.getElementById('gameTv')
const bodyColorDisplay = document.getElementById('bodyColor')
const buttonL = document.getElementById('buttonLeft')
const buttonC = document.getElementById('buttonCenter')
const buttonR = document.getElementById('buttonRight')
const allButtons = document.querySelectorAll('butt')
const start = document.getElementById('startButton')
let myChoice
let counter = 0

start.addEventListener('click', startGame)



//start game button
function startGame() {
    console.log('started the game')
    bodyColorDisplay.classList.add('grey')
    gameTextDisplay.classList.remove('hide')
    bodyColorDisplay.classList.remove('red')
    gameTextDisplay.innerHTML = 'Welcome <br /> <br /> to the first game created 100% by Eric Polley  <br /> <br /> <br />I am the unicorn. <br /> <br /> Where would you like to go...?'
    start.classList.add('hide')
    buttonL.classList.remove('hide')
    buttonC.classList.remove('hide')
    buttonR.classList.remove('hide') 
    gameImageDisplay.classList.remove('hide', 'darkGrey', 'red') 
    gameImageDisplay.classList.add('unicorn01', 'black')
//buttons changers
    buttonL.addEventListener('click', option001)
    buttonC.addEventListener('click', option000)
    buttonR.addEventListener('click', option001)
}


function option000() {
    gameTextDisplay.innerHTML = 'Ow! <br /> You hit me.. <br /> <br /> I\'m not playing any more.. '
    console.log('option000 function')
    buttonL.classList.add('hide')
    buttonC.classList.add('hide')
    buttonR.classList.add('hide')
    start.classList.remove('hide')
    gameImageDisplay.classList.remove('black')
    bodyColorDisplay.classList.remove('grey', 'black')
    bodyColorDisplay.classList.add('red')
    gameImageDisplay.classList.add('red')
}

function option001() {
    bodyColorDisplay.classList.remove('grey', 'red')
    gameTextDisplay.innerHTML = 'Great. You chose correctly <br /> No clues, no hints, not really a game even. <br /> Which way do you go?'
    buttonL.addEventListener('click', option002)
    buttonC.addEventListener('click', option000)
    buttonR.addEventListener('click', option002)
}

function option002() {
    gameTextDisplay.innerHTML = 'Sure... In a minute. <br /> So. <br /> What is your <br />political stance?'
    buttonL.addEventListener('click', option003)
    buttonC.addEventListener('click', option000)
    buttonR.addEventListener('click', option003)
}

function option003() {
    gameTextDisplay.innerHTML = 'Oh. <br /> Ha ha Yeah, <br />Me too. <br /> I am an evil Unicorn <br / > after all... <br /> <br /> \< Run Away. Stand and Stare \>'
    buttonL.addEventListener('click', option004)
    buttonC.addEventListener('click', option000)
    buttonR.addEventListener('click', option005)
}

function option004() {
    gameTextDisplay.innerHTML = 'Whoa hey, where <br /> are you going?'
    buttonL.addEventListener('click', option006)
    buttonC.addEventListener('click', option000)
    buttonR.addEventListener('click', option006)
}

function option005() {
    gameTextDisplay.innerHTML = '.....? <br /> What are you looking at? '
    buttonC.addEventListener('click', option000)
    buttonR.classList.add('hide')
    buttonL.classList.add('hide')
}

function option006() {
    gameTextDisplay.innerHTML = 'Sorry. I can\'t <br /> let you go. '
    buttonC.addEventListener('click', option000)
    buttonR.classList.add('hide')
    buttonL.classList.add('hide')
}



