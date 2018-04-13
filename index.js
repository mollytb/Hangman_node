var inquirer = require("inquirer");
var letter = require("./letter.js");
var word = require("./word.js");
var guessesLeft = 10
var lettersGuessed = [];

function play() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to play a game?",
            name: "playGame",
            default: true
        },
    ])
        .then(function (answers) {
            if (answer.playGame) {
                startGame();
            } else {
                console.log("Fine, no one wants to play with you anyway.")
            };

        });
}
function startGame() {
    if (guessesLeft >= 10)
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter.",
                //Do not allow numbers or special characters to be guessed
                validate: function (str) {
                    var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
                    return regEx.test(str);
                    lettersGuessed.push(guess.value)
                    console.log(lettersGuessed)
                }
            },
        ]);
    //.then(function(answers){

    // })
}

play();

