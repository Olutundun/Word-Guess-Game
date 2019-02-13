//keyboard letter options//

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var avengers = ["captain america", "black panther", "thanos", "shield", "knowhere", "asgard", "infinity stones", "cloak of levitation", "hulk", "ultron", "loki", "mjolnir", "vibranium", "groot", "black widow", "nebula","scarlet witch", "shuri"];

var winCount = 0;
var lossCount = 0;
var lettersUsed = "";
var guessesLeft = 10; 
var lettersLeft = [];
var wrongGuesses = [];
var currentWord = "";
var underScore = [];
var guessedWord = "";
var gameStarted = false;

//game setup: computer picks  random word from the avengers array//

function startGame(){
  currentWord = avengers[Math.floor(Math.random() * avengers.length)];
  underScore = currentWord.split('');
  winCount = 0;
  lossCount = 0;
  guessesLeft = 10; 
  underScore = [];
  
  gameStarted= true;
  newGame();

  underScore = currentWord.length;
  for(var i = 0; i < underScore; i++)
  underScore.push('_');

  document.onkeyup = function(event) {
    var lettersUsed = event.key;
    for(var i = 0; i < letters.length; i++)
    if(lettersUsed === letters[i]) {
    console.log('lettersUsed: )

 }

};

    document.getElementById('winCount').innerHTML = winCount;
    document.getElementById('lossCount').innerHTML = lossCount;
    document.getElementById('currentWord').innerHTML = currentWord;
    document.getElementById('lettersUsed').innerHTML = lettersUsed;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;

//if user guesses wrong or right//
  











}