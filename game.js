let arr = ['Rock','Paper','Scissor']

const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorBtn = document.querySelector(".scissor")

const choiceYou = document.querySelector(".your")
const choiceComp = document.querySelector(".comp")
const win = document.querySelector(".winner")

rockBtn.addEventListener('click', function (){

    let random = arr[Math.floor(Math.random() * arr.length)];

    choiceYou.textContent = 'Your choice: Rock'
    choiceComp.textContent = 'Computer choice: ' + random

    if(random == "Rock"){
        console.log("yes")
        win.textContent = 'YOU WIN 🥳'
    }
    else{
        win.textContent = 'YOU LOSE 👎'
    }
})
paperBtn.addEventListener('click', function (){

    let random = arr[Math.floor(Math.random() * arr.length)];

    choiceYou.textContent = 'Your choice: Paper'
    choiceComp.textContent = 'Computer choice: ' + random

    if(random == "Paper"){
        console.log("yes")
        win.textContent = 'YOU WIN 🥳'
    }
    else{
        win.textContent = 'YOU LOSE 👎'
    }
})
scissorBtn.addEventListener('click', function (){

    let random = arr[Math.floor(Math.random() * arr.length)];

    choiceYou.textContent = 'Your choice: Scissor'
    choiceComp.textContent = 'Computer choice: ' + random

    if(random == "Scissor"){
        console.log("yes")
        win.textContent = 'YOU WIN 🥳'
    }
    else{
        win.textContent = 'YOU LOSE 👎'
    }
})


/*
    choiceYou.textContent = "Your choice: " + userChoice;
    choiceComp.textContent = "Computer choice: " + compChoice;

    if (userChoice === compChoice) {
        win.textContent = "It's a Draw!";
    }
    else if (
        (userChoice === "Rock" && compChoice === "Scissor") ||
        (userChoice === "Paper" && compChoice === "Rock") ||
        (userChoice === "Scissor" && compChoice === "Paper")
    ) {
        win.textContent = "You Win!";
    }
    else {
        win.textContent = "Computer Wins!";
    }*/


