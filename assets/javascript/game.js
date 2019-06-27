var win = 0;
var loss = 0;
var guesses_so_far = []; // This needs to be an array of strings, each string represents a guess
var guesses_left = 10;

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Get an int in the range of [0 - letters.length -1] 
var random_int = Math.floor(Math.random() * letters.length);
var letter_picked = letters[random_int];

var winsElement = document.getElementById("wins");
winsElement.innerText = 0;
var lossesElement = document.getElementById("losses");
lossesElement.innerText = 0;
var guessesLeftElement = document.getElementById("guesses_left");
guessesLeftElement.innerText = 10;

function restartGame(){
    console.log("Reset Game");
    // After a loss or a win do the following
    // win and losses stays the same
    // guesses_left variable resets to default value
    guesses_left = 10;
    // total_guesses array variable resets
    guesses_so_far = [];
    // random_int and letter_picked needs to be reset
    random_int = Math.floor(Math.random() * letters.length);
    letter_picked = letters[random_int];
    var winsElement = document.getElementById("wins");
    winsElement.innerText = win;
    var lossesElement = document.getElementById("losses");
    lossesElement.innerText = loss;
    var guessesLeftElement = document.getElementById("guesses_left");
    guessesLeftElement.innerText = guesses_left;
    
}
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    console.log(letter_picked);
    // Check if userGuess is letter_picked
    if (letter_picked === userGuess) {
        // increase win variable
        win++;
        // Get html element that shows win count
        var winCounter = document.getElementById("wins");
        // Set html element with updated win variable count
        winCounter.innerText = win;
        // start new round
        restartGame();
    } else {
        console.log("Incorrect");
        // Do the following if incorrect
        // decrement guesses_left
        guesses_left--;
        // check if they ran out of guesses
        if (guesses_left <= 0) {
            console.log("No more guesses left");
            // No more guesses left
            // loss variable increases by one
            loss++;
            // restart game
            restartGame();
        }
        // display guess user has made
        // Add letter that the user guessed to guesses_so_far array
        guesses_so_far.push(userGuess);
        // display updated guesses_so_far array in html page
        // Get the element 
        var guessesSoFarElement = document.getElementById("total_guesses");
        // Update the content of the element
        guessesSoFarElement.innerText += " " + userGuess;
        // Get guesses_left html element
        var guessLeftElement = document.getElementById("guesses_left");
        // Set the html element with updated guesses_left variable count
        guessLeftElement.innerText = guesses_left;
    }
}
