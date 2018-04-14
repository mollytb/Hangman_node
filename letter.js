//Letter constructor
function Letter(char){
    this.name = name;
    this.guessed = false;
};
//Replace _ with actual letter if it is guessed
Letter.prototype.toString = function(){
   if(this.guessed){
       return this.name;
   }
   else{
        return "_";
   }
};
//Check if the letter guessed is in the word
Letter.prototype.check = function(){
    if(answer.guess === this.letter){
        this.guessed = true;
    }
};

module.exports = Letter;