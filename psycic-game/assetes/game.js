
var firstName = prompt("What is your name");
var confirmStart = confirm("Hi," + " " + firstName + " " + "do you want to play a game with me?")
var gameIntro = confirm("It is a game of mystery and intrigue and wit! You have 26 chances to guess the letter I am thinking about. All you need to do is type the letter you think, I am thinking about. Its that easy. You may begin... if you dare?")
//paramiters of the game & Score board
var wins, losses, numGuesses, guessChoices, compChoices;
wins = 0;
losses = 0;
numGuesses = 9;
guessChoices = [];
//#a list for computer math random to choose from
compChoices = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z",
]; //how the function is recorded
document.onkeyup = function (event) {
    // my guess and the code that creates the random number to assign to a letter for the computer
    var myGuess, compGuess, options;
    myGuess = event.key;
    compGuess = compChoices[Math.floor(Math.random() *
        compChoices.length)];
    options = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z",
    ];
    // if i guess wrong my positive number is recordded as this
    if (options.indexOf(myGuess) > -1) {
        //the paramiters of how i win if i match my guess
        if (myGuess === compGuess) {
            wins++;
            numGuesses = 26;
            guessChoices = [];
        }
        // decliration that my score will not increase if the guess is wrong
        if (myGuess != compGuess) {
            numGuesses--;
            guessChoices.push(myGuess);
        }
        //what happend if i guess wrong
        if (numGuesses === 0) {
            numGuesses = 26;
            losses++;
            guessChoices = [];
        }
        // game over if I win and how the system resets its valus
        if (wins >= 3) {
            confirm("Awesome, your a winner " + firstName + "! Click (OK) to try again");
            wins = 0;
            losses = 0;
            guessChoices = [];

        }
        //game over if the computer wins and how the valus are reset
        if (losses >= 3) {
            confirm("Game over" + " " + firstName + " " + "Click (OK) to try again");
            wins = 0;
            losses = 0;
            guessChoices = [];
        }
        // how the computer knows where to update the value in the html
        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of " + firstName + "!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
        console.log(html);
        document.querySelector("#game").innerHTML = html;
    }
}