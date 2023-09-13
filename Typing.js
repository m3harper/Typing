// DATA /////////////////
let score = { wins: 0, losses: 0, play: 0 }
let game = { level: 0, timer: 0 }

document.getElementById('score').innerHTML = `Wins:${score.wins} | Losses:${score.losses}`


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

// EVENT LISTENERS ////////////

const word = Math.floor(Math.random() * 14);


const beginner = document.getElementById('beg-btn')
beginner.addEventListener('click', begininerWords)



const intermediate = document.getElementById('int-btn')
intermediate.addEventListener('click', intermediateWords)



const advanced = document.getElementById('adv-btn')
advanced.addEventListener('click', advancedWords)



const expert = document.getElementById('exp-btn')
expert.addEventListener('click', expertWords)

 

const checkAnswer = document.getElementById('submit-btn')
checkAnswer.addEventListener('click', submitAnswer)
checkAnswer.addEventListener('click', clearBox)



// function to trigger submit button using Enter key
const input = document.getElementById('submit-box');
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('submit-btn').click();
    getTimer()
  }
})


// FUNCTIONS /////////////

// function to display beginner level words & save level selection to game object
function begininerWords() {
  const word = Math.floor(Math.random() * 14);
  document.getElementById('random-word').innerHTML = `${(wordArray1[word])}`;
  game.level = 1
  game.timer = 7
  getTimer();
  changeDefault();
}


// function to display intermediate level words & save level selection to game object
function intermediateWords() {
  const word = Math.floor(Math.random() * 14);
  document.getElementById('random-word').innerHTML = `${(wordArray2[word])}`;
  game.level = 2
  game.timer = 6
  getTimer();
  changeDefault();
};


// function to display advanced level words & save level selection to game object
function advancedWords() {
  const word = Math.floor(Math.random() * 14);
  document.getElementById('random-word').innerHTML = `${(wordArray3[word])}`;
  game.level = 3
  game.timer = 5
  getTimer();
  changeDefault();
};


// function to display expert level words & save level selection to game object
function expertWords() {
  const word = Math.floor(Math.random() * 7);
  document.getElementById('random-word').innerHTML = `${(wordArray4[word])}`;
  game.level = 4
  game.timer = 4
  getTimer();
  changeDefault();
};


// function to check answer & update score on webpage
function submitAnswer() {
  const myInput = document.getElementById('submit-box');
  const currentWord = document.getElementById('random-word');
  getTimer();
  score.play++
  
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
  getScore()
};

// function to update submit input default text
function changeDefault() {
  document.getElementById('submit-box').setAttribute('placeholder', 'Start typing...') 
}


// function to clear submit field
function clearBox() {
  document.getElementById('submit-box').value = ''
}

// function to get score and add to page
function getScore() {
  if (score.play > 1 && score.losses < score.wins) {
    reset()
    //alert('Game over. You win!');
    
  } else if (score.play > 1 && score.losses > score.wins) {
    reset()
    //alert('Game over. You loose');
    
  }
  document.getElementById('score').innerText = `Wins:${score.wins} | Losses:${score.losses}`
  
}


// function to set timer countdown
let timeBreak = false;

function getTimer() {
  
  if (!timeBreak) {
    timer = setInterval(function function1() {

      document.getElementById('countdown').classList.remove('black-out')
      document.getElementById('countdown').classList.add('countdown')
      document.getElementById("countdown").innerText = game.timer
      game.timer--;

      if (game.timer < 0) {
        submitAnswer();
        setInterval(timer);
      }

    }, 1000);

    // stops the above if statement running. Without stopping this our timer would continue running and another timer would run / run very fast!
    timeBreak = true;

  } else {
    setInterval(timer);

  } 
}


function reset() {
  score.wins = 5
  score.losses = 0
  score.play = 0
  game.level = 0
  game.timer = 0
  const beginner = document.getElementById('beg-btn')
  beginner.removeEventListener('click', begininerWords)

  const intermediate = document.getElementById('int-btn')
  intermediate.removeEventListener('click', intermediateWords)

  const advanced = document.getElementById('adv-btn')
  advanced.removeEventListener('click', advancedWords)

  const expert = document.getElementById('exp-btn')
  expert.removeEventListener('click', expertWords)
}