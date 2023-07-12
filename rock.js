
function getComputerChoice(){
    randomNumber=Math.floor(Math.random() * 3);

    switch (randomNumber) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2 :
        return "scissors";
    }
    
}
const container=document.querySelector('.res');
    const divV=document.createElement('div')

function playerSelection(userInput){
    userInput=userInput.toLowerCase();
    return userInput;
}

function playRound(playerChoice,computerChoice){
    if(playerChoice===computerChoice)
    divV.textContent="it's a tie"

if ((playerChoice=="rock"&&computerChoice=="paper")||(computerChoice=="rock"&&playerChoice=="paper"))
    if(playerChoice=="paper"){
        divV.textContent="you win, paper beats rock"
        return "win";}
        else {divV.textContent="you lose, paper beats rock"
        return "lose"}

if ((playerChoice=="scissors"&&computerChoice=="rock")||(computerChoice=="scissors"&&playerChoice=="rock"))
    if(playerChoice=="rock"){
        divV.textContent="you win, rock beats scissors"
        return"win";}
        else  {divV.textContent="you lose, rock beats scissors"
            return "lose"}

if ((playerChoice=="paper"&&computerChoice=="scissors")||(computerChoice=="paper"&&playerChoice=="scissors"))
    if(playerChoice=="scissors"){
        divV.textContent="you win, scissors beats paper"
        return "win";}
        
    else {divV.textContent="you lose, scissors beats paper"
         return "lose";}
         
}
let playerScore=0
let computerScore=0
const btn = document.querySelector('.container')
const result=document.createElement('div')
const computerScoreDiv=document.createElement('div')
    computerScoreDiv.classList.add('computerScore')
const playerScoreDiv=document.createElement('div')
    playerScoreDiv.classList.add('playerScore')
btn.addEventListener('click', function(e){
    choice=e.target.innerText; //innerText method extracts the content of a raw html.
   p=playerSelection(choice)
    c=getComputerChoice()
    something=playRound(p,c)
    container.appendChild(divV)
//here starts the score system

    result.classList.add('result')
    if(something=='win')
        playerScore++
    if(something=='lose')
        computerScore++
    playerScoreDiv.textContent=playerScore  
    computerScoreDiv.textContent=computerScore  
    container.appendChild(playerScoreDiv)
    container.appendChild(computerScoreDiv)
        console.log(playerScore)
        console.log(computerScore)
    if(playerScore==5)
    result.textContent='nice you are the winner'
    if(computerScore==5)
    result.textContent='damn the computer wins'
    container.appendChild(result)
    if(computerScore>=5||playerScore>=5)
        {playerScore=0
        computerScore=0}

})




