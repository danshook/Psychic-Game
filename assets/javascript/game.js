// Creating variable to hold the number of wins. They start at 0.
var wins = 0;

// Display number of wins
document.getElementById("wins").innerHTML = wins;

// Creating variable to hold the number of losses. They start at 0.
var losses = 0;

// Display number of losses
document.getElementById("losses").innerHTML = losses;


// Creating variable to hold the number of remaining guesses. They start at 10.
var guessesLeft = 10

// Display number of remaining guesses.
document.getElementById("guessesLeft").innerHTML = guessesLeft;

// Creating variable to hold the user's guesses (letters of the alphabet).
var guessesSoFar = [];

// Creates an array that lists out all of the options (each letter of the alphabet).
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Randomly chooses a letter from the alphabet array.
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);

// Capture user guess and insert into guessesSoFar array.
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    if (guessesSoFar.indexOf(userGuess)== -1) {
        guessesSoFar.push(userGuess);
  
  // Display user guesses
        document.getElementById("guesses").innerHTML = guessesSoFar;
        if (userGuess.toUpperCase() === randomLetter) {
          result = wins++
          alert ("Lucky guess!")
          document.getElementById("wins").innerHTML = wins;
                guessesLeft = 10
                guessesSoFar = [];
                document.getElementById("guesses").innerHTML = guessesSoFar;
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                console.log(randomLetter);
          }

          else result = guessesLeft--;
          document.getElementById("guessesLeft").innerHTML = guessesLeft;
          if (guessesLeft === 0) {
             result = losses++
            alert ("game over!");
//   Display remaining guesses.
            document.getElementById("losses").innerHTML = losses;
            guessesLeft = 10
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            guessesSoFar = [];
            document.getElementById("guesses").innerHTML = guessesSoFar;
            randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(randomLetter);

        }
    }
}
