//Letter constructor
function Letter(string, boolean){
    this.letter = letter;
    this.guessed = false;
};
//Replace _ with actual letter if it is guessed
Letter.prototype.replace = function(){
   if(this.guessed){
       console.log(this.letter)
   }
   else{
        console.log("_")
   }
};
//Check if the letter guessed is in the word
Letter.prototype.check = function(){
    if(guess === this.letter){
        this.guessed = true;
    }
};


module.exports = Letter;