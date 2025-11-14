if (location.hostname.includes("github.io")) {
    alert = function(){};
    prompt = function(){ return ""; };
    confirm = function(){ return false; };
}
//Q-01
let userInput = prompt("Enter your Value:");
console.log("Number : ", userInput);
let roundValue = Math.round(userInput);
console.log("Round Value : ", roundValue);

let flooValue = Math.floor(userInput);
console.log("Floor Value : ", flooValue);

let ceilValue = Math.ceil(userInput);
console.log("Ceil Value : ", ceilValue);

console.log("Total Value:", roundValue + " " + flooValue + " " + ceilValue);

//Q-02
let inputUser = prompt("Enter your Negative Value:");
console.log(inputUser);
let valuRound = Math.round(inputUser);
console.log("Negative Value of Round : ", valuRound);

let valuFloor = Math.floor(inputUser);
console.log("Negative Value of Floor : ", valuFloor);

let valuCeil = Math.ceil(inputUser);
console.log("Negative Value of Ceil : ", valuCeil);

//Q-03
let userAbsolute = -4.51;
console.log("Negative Numeber :", userAbsolute);
console.log("Absolute Value of Negative Number : ", Math.abs(userAbsolute));

// Q-04
function diceflow() {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    alert("Random Dice Value : " + diceNum);
    console.log("Random Dice Value :", diceNum);
}

//Q-05
function coinValue() {
    let coinNum = Math.floor(Math.random() * 2);
    let coinSide;
    if (coinNum == 0) {
        coinSide = "Head";
    } else {
        coinSide = "Tail";
    }
    alert("The Value of Coin is : " + coinSide);
    console.log("The Value of Coin is :", coinSide);
}

//Q-06
function randomValue() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    alert("Random Number between 1 and 100: " + randomNum);
    console.log(randomNum);
}

//Q-07
let userWeight = prompt("Enter your weight in kilogram :");
let wieghtOf = parseFloat(userWeight);
document.getElementById("weightOutput").innerText = "Your weight is: " + wieghtOf + " kg";

//Q-08
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userEnter = +prompt("Enter a number between 1 and 10:");

if (userEnter === secretNumber) {
    alert("Congratulations! You Win!!");
} else {
    alert("Sorry! The secret number was " + secretNumber);
}
