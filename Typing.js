// DATA /////////////////
let score = { wins: 0, losses: 0, play: 10 }
let game = { level: 0, timer: 0 }

document.getElementById('score').innerHTML = `Plays: ${score.play} | Wins: ${score.wins} | Losses: ${score.losses}`

const wordArray1 = [
  'above',
  'affect',
  'begin',
  'catch',
  'color',
  'design',
  'energy',
  'forward',
  'interest',
  'number',
  'theory',
  'toward',
  'while',
  'wonder'
]

const wordArray2 = [
  'accumilate',
  'according' ,
  'actually',
  'administration',
  'agreement',
  'analysis',
  'beautiful',
  'business',
  'campaign',
  'character',
  'commercial',
  'community',
  'conference',
  'government'
]

const wordArray3 = [
  'apprehensive',
  'acquaintance',
  'cantankerous',
  'conscientious',
  'entrepreneur',
  'disingenious',
  'idiosyncrasy',
  'misapprehension',
  'magnanimous',
  'paraphernalia',
  'scintillating',
  'unscrupulous'
] 

const wordArray4 = [
  'honorificabilitudinitatibus',
  'incomprehensibilities',
  'interdisciplinary',
  'psychotomimetic',
  'subdermatoglyphic',
  'sesquipedalianism',
  'trichotillamania'
]


// FUNCTIONS /////////////

// set timer countdown
let getTimer = () => {
  
  if (game.timer > -1 && score.play < 10) {

    let getTime = setInterval(() => {
      game.timer--

      if (game.timer > -1 && score.play < 10) {
        document.getElementById('countdown').innerText = game.timer
        document.getElementById('countdown').classList.add('countdown')
        document.getElementById('random-word').classList.add('random-word')

      } else {
        submitAnswer()
        clearInterval(getTime)
        document.getElementById('countdown').classList.remove('countdown')
        document.getElementById('random-word').classList.remove('random-word')
    }
  }, 1000)

  } else {

      let getTime = setInterval(() => {
        game.timer--

        if (game.timer > -1 && score.play < 10) {
          document.getElementById('countdown').classList.add('countdown')
          document.getElementById('countdown').innerText = game.timer
          document.getElementById('random-word').classList.add('random-word')

        } else {
          submitAnswer()
          clearInterval(getTime)
          document.getElementById('countdown').classList.remove('countdown')
          document.getElementById('random-word').classList.remove('random-word')
        }
    }, 1000)
}}

// display beginner level words & save level selection to game object
function begininerWords() {
  const word = Math.floor(Math.random() * 14);
  document.getElementById('random-word').innerText = `${(wordArray1[word])}`;
  game.level = 1
  game.timer = 7
  changeDefault();
  disableBtns();
}

// display intermediate level words & save level selection to game object
function intermediateWords() {
  const word = Math.floor(Math.random() * 14);
  document.getElementById('random-word').innerText = `${(wordArray2[word])}`;
  game.level = 2
  game.timer = 6
  changeDefault();
  disableBtns();
};

// display advanced level words & save level selection to game object
function advancedWords() {
  const word = Math.floor(Math.random() * 14);
  document.getElementById('random-word').innerText = `${(wordArray3[word])}`;
  game.level = 3
  game.timer = 5
  changeDefault();
  disableBtns();
};

// display expert level words & save level selection to game object
function expertWords() {
  const word = Math.floor(Math.random() * 7);
  document.getElementById('random-word').innerText = `${(wordArray4[word])}`;
  game.level = 4
  game.timer = 4
  changeDefault();
  disableBtns();
};

// disable level buttons
function disableBtns() {
  document.getElementById('beg-btn').disabled = true;
  document.getElementById('int-btn').disabled = true;
  document.getElementById('adv-btn').disabled = true;
  document.getElementById('exp-btn').disabled = true;
  document.getElementById('choose').classList.add('choose-before')
}

// enable level buttons
function enableBtns() {
  document.getElementById('beg-btn').disabled = false;
  document.getElementById('int-btn').disabled = false;
  document.getElementById('adv-btn').disabled = false;
  document.getElementById('exp-btn').disabled = false;
  document.getElementById('choose').classList.remove('choose-before')
}

// check answer & update score on webpage
function submitAnswer() {
  const myInput = document.getElementById('submit-box');
  const currentWord = document.getElementById('random-word');
  score.play++
  
  if (score.play < 11) {
    if (currentWord.innerText === myInput.value) {
      score.wins++
      
    } else {
      score.losses++
    } 

      if (game.level === 1) {
        begininerWords()
      } else if (game.level === 2) {
        intermediateWords()
      } else if (game.level === 3) {
        advancedWords()
      } else if (game.level === 4) {
        expertWords()
    }  
  } else { 
   getScore()
}  document.getElementById('score').innerText = `Wins:${score.wins} | Losses:${score.losses}`;
};

// trigger submit button using Enter key
const input = document.getElementById('submit-box');
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('submit-btn').click();
  }
})

// update input default text
function changeDefault() {
  document.getElementById('submit-box').setAttribute('placeholder', 'Start typing...') 
}

// clear submit field
function clearBox() {
  document.getElementById('submit-box').value = ''
}

// get score and add to page
function getScore() {
  if (score.play >= 6 && score.losses < score.wins) {
    alert('Game over. You win!');
    score.play = 0
    score.wins = 0
    score.losses = 0
    enableBtns()
    
  } else { 
    (score.play >= 6 && score.losses > score.wins) 
    alert('Game over. You loose');
    score.play = 0
    score.wins = 0
    score.losses = 0
    enableBtns()
  }
  document.getElementById('score').innerText = `Wins:${score.wins} | Losses:${score.losses}`
}

// EVENT LISTENERS ////////////
const word = Math.floor(Math.random() * 14);

const beginner = document.getElementById('beg-btn')
beginner.addEventListener('click', begininerWords)
beginner.addEventListener('click', getTimer)

const intermediate = document.getElementById('int-btn')
intermediate.addEventListener('click', intermediateWords)
intermediate.addEventListener('click', getTimer)

const advanced = document.getElementById('adv-btn')
advanced.addEventListener('click', advancedWords)
advanced.addEventListener('click', getTimer)

const expert = document.getElementById('exp-btn')
expert.addEventListener('click', expertWords)
expert.addEventListener('click', getTimer)
 
const checkAnswer = document.getElementById('submit-btn')
checkAnswer.addEventListener('click', submitAnswer)
checkAnswer.addEventListener('click', clearBox)
