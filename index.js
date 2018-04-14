var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");

//wrong guesses allowed before game terminates
var guessesLeft = 10

//function to select random word from word bank to use during game
randomWord = function randomWord() {
    //possible words for game
    var wordBank = ["rogue", "cyclops", "phoenix", "wolverine", "ice man", "beast",
        "angel", "colossus", "nightcrawler", "storm", "shadowcat"];
    //pick a possible word randomly
    var select = Math.floor(Math.random() * wordBank.length);
    //get word for game
    var chosenWord = wordBank[select];
    //console.log(randomWord);
    return chosenWord;
}



//array of letters already guessed
var lettersGuessed = [];


function play() {
    if (lettersGuessed.length === 0) {
        randomWord();
        //var newWord = Word(chosenWord);
        inquirer.prompt([
            {
                type: "confirm",
                message: "Do you want to play a game?",
                name: "playGame",
                default: true
            },
        ])
            .then(function (answers) {
                if (answers.playGame) {
                    //I can't get my randomWord function to generate a word that is recognized and then can be
                    //used to create a new word object and fill in the letters array
                    console.log("Let's go!");
                    //construct a new word using the random word selected from the word bank
                        //console.log(newWord);
                        startGame();
                    
                } else {
                    console.log("Fine, no one wants to play with you anyway.")
                };
                });

    

}
}
function startGame() {
    if (guessesLeft > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter.",
                //Do not allow numbers or special characters to be guessed
                //should stop repeat guesses from counting against player
                validate: function (str) {
                    var regEx = new RegExp('^[a-zA-Z\s]{1,1}$')
                    return regEx.test(str);
                    if (lettersGuessed.indexOf(str) === -1) lettersGuessed.push(str);
                }
            },
        ])
            .then(function (answers) {
                //this is where my check function should be, but I can't get it to work.
                if (answers.guess === 20) {
                    if (lettersGuessed.indexOf(answers.guess) === -1) lettersGuessed.push(answers.guess);
                    
                    console.log(lettersGuessed);
                    console.log("You have " + (guessesLeft - 1) + " guesses left.");
                    //console.log(newWord);
                    startGame();
                } else {
                    console.log(lettersGuessed);
                    console.log("You have " + (guessesLeft - 1) + " guesses left.");
                    //console.log(newWord);
                    guessesLeft--;
                    if (lettersGuessed.indexOf(answers.guess) === -1) lettersGuessed.push(answers.guess);
                    startGame();
                }
            });
    }else{
        console.log(lettersGuessed);
        console.log("                GAME OVER")
    }
};

play();

