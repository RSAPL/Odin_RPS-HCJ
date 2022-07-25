let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            return "rock";
        
        case 1:
            return "paper";
    
        case 2:
            return "scissors";
    }
}



const decideWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        switch(userChoice) {
            case "rock":
                setTimeout(() => {document.getElementById('rock').innerHTML = '✊'},  700);
                document.getElementById('rock').innerHTML = '🏳️';
                return 0;

            case "paper":
                setTimeout(() => {document.getElementById('paper').innerHTML = '✋'},  700);
                document.getElementById('paper').innerHTML = '🏳️';
                return 0;

            case "scissors":
                setTimeout(() => {document.getElementById('scissors').innerHTML = '✌️'},  700);
                document.getElementById('scissors').innerHTML = '🏳️';
                return 0;
        }
    } else {
        switch(userChoice) {
            case "rock":
                if(computerChoice === "scissors") {
                    humanScore += 1;
                    document.querySelector("#H.number").innerHTML = humanScore;
                    setTimeout(() => {document.getElementById('rock').innerHTML = '✊'},  700);
                    document.getElementById('rock').innerHTML = '✔️';
                    return 1;

                } else if (computerChoice === "paper") {
                    computerScore += 1;
                    document.querySelector("#M.number").innerHTML = computerScore;
                    setTimeout(() => {document.getElementById('rock').innerHTML = '✊'},  700);
                    document.getElementById('rock').innerHTML = '❌';
                    return 2;
                };
                

            case "paper":
                if(computerChoice === "rock") {
                    humanScore += 1;
                    document.querySelector("#H.number").innerHTML = humanScore;
                    setTimeout(() => {document.getElementById('paper').innerHTML = '✋'},  700);
                    document.getElementById('paper').innerHTML = '✔️';
                    return 1;

                } else if (computerChoice === "scissors") {
                    computerScore += 1;
                    document.querySelector("#M.number").innerHTML = computerScore;
                    setTimeout(() => {document.getElementById('paper').innerHTML = '✋'},  700);
                    document.getElementById('paper').innerHTML = '❌';
                    return 2;
                };


             case "scissors":
                if(computerChoice === "paper") {
                    humanScore += 1;
                    document.querySelector("#H.number").innerHTML = humanScore;
                    setTimeout(() => {document.getElementById('scissors').innerHTML = '✌️'},  700);
                    document.getElementById('scissors').innerHTML = '✔️';
                    return 1;

                } else if (computerChoice === "rock") {
                    computerScore += 1;
                    document.querySelector("#M.number").innerHTML = computerScore;
                    setTimeout(() => {document.getElementById('scissors').innerHTML = '✌️'},  700);
                    document.getElementById('scissors').innerHTML = '❌';
                    return 2;
                };
        }
    }
}

const playGame = (winner) => {
    if (Math.max(humanScore, computerScore) >= 5 && humanScore == 5){
        if(!alert('You won!')){window.location.reload();}
    } else if (Math.max(humanScore, computerScore) >= 5 && computerScore == 5){
        if(!alert('You lost...')){window.location.reload();}
    }
}