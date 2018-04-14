var Letter = require("./letter.js");

//word constructor
function Word(word)  {
    // will hold all of the letters of the current word.
    this.letters = [];
    
    
  
    this.getLetters = function() {
      //populate the this.letters array with new Letter objects
      for(var i = 0; i< this.length; i++){
        var newLetter = new Letter([i]);
        this.letters.push(newLetter);
      }
    };
  };
    
  //Word.prototype.addWord = function() {
  //  this.letterArray.push(randomWord);
  //};
  
 


  module.exports = Word;