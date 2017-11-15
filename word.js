var Letter = require("./letter.js");

var Word = function(currentWord){
    this.wordLetters = currentWord.split("").map(function(letter){
        return new Letter(letter);
    });  
    this.printWord = function(){
        var word =[];
      for(i=0; i < this.wordLetters.length; i++){
       word.push(this.wordLetters[i].print());
      }
      console.log(word.join(""));
    }
    this.checkGuess = function(guess){
        for(i=0;i< this.wordLetters.length; i++){
            if(!this.wordLetters[i].checkGuess(guess)){
                return false
            }     
        }
        return true
    }
    this.isSolved = function(){
        for(i=0;i< this.wordLetters.length; i++){
           if (!this.wordLetters[i].isVisible()){
               return false
           }
        }
        return true;
    }
}


module.exports = Word;