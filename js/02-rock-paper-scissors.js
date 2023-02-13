//Function to take the choice from User
function userChoice(){
    "use strict";
    var chosenOption = parseInt(window.prompt("Choose an Option: \n1.Rock \n2.Paper \n3.Scissors"));
        if(chosenOption===1) {
            return 'rock';
        }
        else if(chosenOption===2){
            return 'paper';
        }
        else if(chosenOption===3){
            return 'scissors';
        }
        else{
            window.alert("Please Enter a Valid Option!");
            userChoice();
        }
}

// Function to take the choice from Computer
function computerChoice() {
    "use strict";
    var computerChoice = Math.round(Math.random()*10);
    console.log(computerChoice);

    if(computerChoice<=3){
        return 'rock';
    }
    else if (computerChoice>3 && computerChoice<=6){
        return 'paper';
    }
    else if (computerChoice>6 && computerChoice<=10) {
        return 'scissors';
    }
}

//Function to find the winner
function rockPaperScissors(userChosenOption, computerChosenOption) {
    "use strict";
    if(userChosenOption === "rock" && computerChosenOption === "scissors")
        window.alert("User Wins !");
    else if(computerChosenOption === "rock" && userChosenOption === "scissors")
        window.alert("Computer Wins !");
    else if(userChosenOption === "scissors" && computerChosenOption === "paper")
        window.alert("User Wins !");
    else if(computerChosenOption === "scissors" && userChosenOption === "paper")
        window.alert("Computer Wins !");
    else if(userChosenOption === "paper" && computerChosenOption === "rock")
        window.alert("User Wins !");
    else if(computerChosenOption === "paper" && userChosenOption === "rock")
        window.alert("Computer Wins !");
    else if(computerChosenOption === userChosenOption)
        window.alert("It\'s a Tie");
}


function main() {
    "use strict";
    var playAgain = 'y';
   
    while (playAgain === 'y') {
        var userChosenOption = userChoice();
        var computerChosenOption = computerChoice();

        rockPaperScissors(userChosenOption, computerChosenOption);
        playAgain = window.prompt("Do you want to play Again? (y/n): ");
    }
}

main();