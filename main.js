var Inquirer = require("inquirer");
var Word = require("./word.js");
var WordBank = require("./wordBank.js")
var guessRemaining = 10;

console.log("Welcome to State Hangman!")
var word = new Word(WordBank[0])


var letter = "m";
word.checkGuess(letter);
word.printWord();
console.log(word.isSolved());
var letter = "p";
word.checkGuess(letter);
var letter = "s";
word.checkGuess(letter);
word.printWord();
console.log(word.isSolved());


Inquirer.prompt([
    {
        type: "input",
        name: "guess",
        message: "Guess a letter",
        validate: function(value){
           return /[a-z]/gi.test(value);
        }
    }
]).then(function(result){
    console.log(word.checkGuess(result.guess))
    word.printWord();
    word.isSolved();
})


// function play(){
// Inquirer.prompt([
//     {
//         type: "input",
//         name: "guess",
//         message: "Guess a letter",
//         validate: function(value){
//            return /[a-z]/gi.test(value);
//         }
//     }
// ]).then(function(guess){

// });
// }
