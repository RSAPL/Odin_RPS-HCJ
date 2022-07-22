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
                break;

            case "paper":
                setTimeout(() => {document.getElementById('paper').innerHTML = '✋'},  700);
                document.getElementById('paper').innerHTML = '🏳️';
                break;

            case "scissors":
                setTimeout(() => {document.getElementById('scissors').innerHTML = '✌️'},  700);
                document.getElementById('scissors').innerHTML = '🏳️';
                break;
        }
    } else {
        switch(userChoice) {
            case "rock":
                if(computerChoice === "scissors") {
                    setTimeout(() => {document.getElementById('rock').innerHTML = '✊'},  700);
                    document.getElementById('rock').innerHTML = '✔️';
                    break;

                } else if (computerChoice === "paper") {
                    setTimeout(() => {document.getElementById('rock').innerHTML = '✊'},  700);
                    document.getElementById('rock').innerHTML = '❌';
                    break;
                };
                

            case "paper":
                if(computerChoice === "rock") {
                    setTimeout(() => {document.getElementById('paper').innerHTML = '✋'},  700);
                    document.getElementById('paper').innerHTML = '✔️';
                    break;

                } else if (computerChoice === "scissors") {
                    setTimeout(() => {document.getElementById('paper').innerHTML = '✋'},  700);
                    document.getElementById('paper').innerHTML = '❌';
                    break;
                };


             case "scissors":
                if(computerChoice === "paper") {
                    setTimeout(() => {document.getElementById('scissors').innerHTML = '✌️'},  700);
                    document.getElementById('scissors').innerHTML = '✔️';
                    break;

                } else if (computerChoice === "rock") {
                    setTimeout(() => {document.getElementById('scissors').innerHTML = '✌️'},  700);
                    document.getElementById('scissors').innerHTML = '❌';
                    break;
                };
        }
    }
}

const playGame = () => {
    let 
}