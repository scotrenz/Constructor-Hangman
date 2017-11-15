var Letter = function(letter){
    this.letter = letter;
    this.visible = false;
    this.print = function(){
        if(this.visible){
            return letter
        }else{
            return "_ "
        }
    };
    this.checkGuess = function(guess){
        var guessLower = guess.toLowerCase();
        if(letter.toLowerCase() === guessLower){
            this.visible = true;
        }
        return this.visible
    };
    this.isVisible = function(){
         return this.visible
    };
}


module.exports = Letter;