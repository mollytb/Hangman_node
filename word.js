var Letter = require("./letter.js");
var Word = function(letterArray, letterWord) {
    // this.words will hold all of the possible words
    this.letterArray = [];
    this.letterWord = letterWord;
  
    

  };

  
  Word.prototype.addWord = function() {
    this.letterArray.push(new Word(Valraven));
  };
  //newWord.replace();

  var wordBank = ["rogue", "cyclops", "phoenix", "wolverine", "ice man", "beast", 
  "angel", "colossus", "nightcrawler", "storm", "shadowcat"];
  var select = Math.floor(Math.random() * wordBank.length);
  var randomWord = wordBank[select];
  //console.log(randomWord);