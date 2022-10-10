// State: what data do we need to keep track of?


var wins = 0;
var losses = 0;
var draws = 0;
var OPTIONS = ["r","p","s"]

do {


var userChoice = "";
var computerChoice = "";
var outcomeMessage = ""
var playAgain = true
// What are the steps?

// 1. Show prompt asking for R,P,S (UI)

userChoice = prompt("Choose R, P, or S.")
userChoice = userChoice.toLowerCase()
alert (userChoice)


// 2. User submits selection (Event)
// HANDLE EVENT
// 3. Store value in userChoice (Update state)
// 4. Generate a random computer selection (Update state)

var random = Math.floor(Math.random() * OPTIONS.length);
computerChoice =(random, OPTIONS[random]);

// 5. Alert with computer choice (UI)
alert("The computer chose " + computerChoice)
// 6. Compare (Update State)


// if (userChoice.toLowerCase === "r") {
//     if (computerChoice === "r") {
//         draws += 1 ;
//         outcomeMessage = "It was a tie." ;
//     }
//     else if (computerChoice = "s") {
//         wins += 1;
//         outcomeMessage = "You won!";
//     }
//     else if (computerChoice = "p") {
//         losses +=1;
//         outcomeMessage = "Technology won, yet again.";
//     }
// }


//    6.1 if user rock:
//      6.1.1 if cpu rock then add 1 to draws
//      6.1.2 if cpu scissors then add 1 to wins
//      6.1.3 if cpu paper then add one to losses

if (userChoice === "r" && computerChoice === "r"){
    draws = draws +1;
    outcomeMessage = "It was a tie";
} else if (userChoice ==="r" && computerChoice ==="s"){
    wins = wins +1;
    outcomeMessage = "You won!"
} else if (userChoice === "r" && computerChoice ==="p"){
    losses = losses + 1;
    outcomeMessage = "Technology won.";
} else if (userChoice === "p" && computerChoice === "r"){
    wins = wins +1;
    outcomeMessage = "You won!";
} else if (userChoice ==="p" && computerChoice ==="s"){
    losses = losses +1;
    outcomeMessage = "Technology won.";
} else if (userChoice === "p" && computerChoice === "p"){
    draws = draws + 1;
    outcomeMessage = "It was a tie.";
} else if (userChoice === "s" && computerChoice === "r"){
    losses = losses + 1;
    outcomeMessage = "Technology won.";
} else if (userChoice === "s" && computerChoice === "s"){
    draws = draws + 1;
    outcomeMessage = "It was a tie.";
} else if (userChoice === "s" && computerChoice === "p") {
    wins = wins + 1;
    outcomeMessage = "You won!";
} else { outcomeMessage = "Your entry was not valid." }



//    6.2 if user paper:
//      6.2.1 if cpu rock then add 1 to wins
//      6.2.2 if cpu scissors then add 1 to losses
//      6.2.3 if cpu paper then add one to draws



alert(outcomeMessage + "wins " + wins + "draws " + draws + "losses " + losses)

outcomeMessage = ""

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("draws").innerHTML = "Draws: " + draws;
playAgain = window.confirm("Do you want to play again?")

} while (playAgain = true) ;

//    6.3 if user scissors:
//      6.3.1 if cpu rock then add 1 to losses
//      6.3.2 if cpu scissors then add 1 to draws
//      6.3.3 if cpu paper then add one to wins
// 7. Alert user of outcome (UI)
// 5. Alert user of scoreboard (UI)
// 6. Confirm play again (Event)
// HANDLE EVENT
//    6.1 if true, start over

/************************************************
 * Questions:
 * 1. How can we trigger the game so that we can restart it later?
 * 2. How do we randomly choose an answer?
 */
