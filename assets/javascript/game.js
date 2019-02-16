//this array lists all the avenger word options//
var avengers = [
  "captain america",
  "black panther",
  "thanos",
  "shield",
  "knowhere",
  "asgard",
  "infinity stones",
  "cloak of levitation",
  "hulk",
  "ultron",
  "loki",
  "mjolnir",
  "vibranium",
  "groot",
  "black widow",
  "nebula",
  "scarlet witch",
  "shuri"
];
//initialized variables//
var wins = 0;
var losses = 0;
var gameStarted = false;
var userGuesses = [];
var avengerWords = [];
var underScore = 0;
var currentWord = "";
var correctLetters = [];
max_guess = get_longest_word_len()
player_guess = 0

var rulesContainer = document.querySelectorAll("#rules")[0];
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && !gameStarted) {
    rulesContainer.innerHTML = "GAME HAS STARTED";
    runGame();
    gameStarted = true;
  }

  if (gameStarted) {
    const letter = event.key;
    console.log({ letter });
    //make sure user input are letters
    if (
      event.keyCode >= 65 &&
      event.keyCode <= 90
    ) {
      if (player_guess_complete()){
        gameStarted = false;
        rulesContainer.innerHTML = "Guesses Finished, You've Lost!";
        losses++
        return
      }
      if (currentWord.includes(letter)) {
        correctLetters.push(letter);
        updatePlaceHolder();
        checkForEndGame();
      } else {
        updateWrongLetters(letter);
      }
    }
  }
});

function player_guess_complete(){
  if (player_guess == max_guess){
    return true
  }
  player_guess++
  document.getElementById("guesses-left").innerHTML = "Number of guesses remaining: " + (max_guess - player_guess)
  return false
}

function runGame() {
  currentWord = avengers[Math.floor(Math.random() * avengers.length)].split("");
  console.log("currentWord - ", currentWord.join(""), currentWord);
  updatePlaceHolder();
}

function updatePlaceHolder() {
  const wordPlaceHolderContainer = document.querySelectorAll(
    "#word-placeholder span"
  )[0];

  const placeholderText = currentWord.map(char => {
    if (correctLetters.includes(char) || char == " ") {
      return char;
    }
    return "_";
  });
  if(wordPlaceHolderContainer!=undefined){
    wordPlaceHolderContainer.innerHTML = placeholderText
      .join(" ")
      .replace(/ /g, "&nbsp;"); //use regex to replace "," in string
  }

}

function updateWrongLetters(letter) {
  const wrongLetterContainer = document.getElementById("wrong-letters");
  const text = document.createTextNode(letter + ", ");
  wrongLetterContainer.appendChild(text);
}

function checkForEndGame() {
  let correctWord = currentWord.join("").replace(/ /g, "");

  correctLetters.forEach(char => {
    
    const regex = new RegExp(char, "g");
    correctWord = correctWord.replace(regex, "");
    console.log("checkforEndGame -> ", correctWord);
  });

  if (correctWord.length === 0) {
    gameStarted = false;
    rulesContainer.innerHTML = "You've won!";
    wins++
    get_wins()
  }
}

function reset_fields(){
  rulesContainer.innerHTML = "PRESS ENTER KEY TO BEGIN!!!";
  document.getElementById("wrong-letters").innerHTML = "Wrong Letters: "
  document.getElementById("word-placeholder").innerHTML = "Your Guess: <span> </span>"
  max_guess = 10
  player_guess = 0
  avengerWords = [];
  underScore = 0;
  currentWord = "";
  correctLetters = [];
  get_wins()
  get_max_guesses()
  get_losses()

}

function get_wins(){
  document.getElementById("win-count").innerHTML = "Wins: " + wins
}
function get_losses(){
  document.getElementById("loss-count").innerHTML = "Losses: "+ losses
}
function get_max_guesses(){
  document.getElementById("guesses-left").innerHTML = "Number of guesses remaining: " + max_guess
}

$(document).ready ( function(){
  get_wins()
  get_max_guesses()
  get_losses()

})

function get_longest_word_len(){
  longest_word = 0
  for(i in avengers){
    word = avengers[i]
    if(word.length > longest_word){
      longest_word = word.length
    }
  }
  return longest_word
}
