var humanScore=0;
var compScore=0;

const buttons=document.querySelectorAll('button');
const resultDiv=document.getElementById('result');
const scoreDiv=document.getElementById('score');

function getComputerChoice() {
    let value=Math.floor(Math.random()*3);
    
    switch(value){
        case 0: return "rock";

        case 1:return "Paper";

        case 2: return "Scissor";

    }
}

function playRound(humanChoice,computerChoice){
   let humanChoices= humanChoice.trim().toLowerCase();
   let computerChoices=computerChoice.toLowerCase();

   if(humanChoices === computerChoices){
    return 'Draw';
   }
   else if (
    (humanChoices === 'rock' && computerChoices === 'scissors') ||
    (humanChoices === 'paper' && computerChoices === 'rock') ||
    (humanChoices === 'scissors' && computerChoices === 'paper')
) {
    return "You Win";
} else {
    return "Comp Wins";
}
}

buttons.forEach(button => {
    button.addEventListener('click',() =>{
        const playerSelection =button.id;
        const computerSelection =getComputerChoice();
        const result=playRound(playerSelection,computerSelection);
        updateScore(result);
        checkWinner();
    })
   
})

function updateScore(winner){
    if(winner ==="You Win"){
        humanScore++;
    }
    else if(winner ==="Comp Wins"){
        compScore++;
    }

}
function checkWinner() {
    if (humanScore === 5) {
      scoreDiv.textContent = 'Congratulations! You win the game!';
      disableButtons();
    } else if (compScore === 5) {
      scoreDiv.textContent = 'Sorry, you lose the game!';
      disableButtons();
    } else {
      scoreDiv.textContent = `Score: Player ${humanScore} - ${compScore} Computer`;
    }
  }
  function disableButtons() {
    buttons.forEach(button => {
      button.disabled = true;
    });
  }
