
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

function playerSelection(userInput){
    userInput=userInput.toLowerCase();
    return userInput;
}

function playRound(playerChoice,computerChoice){
    if(playerChoice===computerChoice)
    console.log("it's a tie")

if ((playerChoice=="rock"&&computerChoice=="paper")||(computerChoice=="rock"&&playerChoice=="paper"))
    if(playerChoice=="paper"){
        console.log("you win, paper beats rock")
        return "win";}
    else console.log("you lose, paper beats rock")

if ((playerChoice=="scissors"&&computerChoice=="rock")||(computerChoice=="scissors"&&playerChoice=="rock"))
    if(playerChoice=="rock"){
        console.log("you win, rock beats scissors")
        return"win";}
    else  console.log("you lose, rock beats scissors")

if ((playerChoice=="paper"&&computerChoice=="scissors")||(computerChoice=="paper"&&playerChoice=="scissors"))
    if(playerChoice=="scissors"){
        console.log("you win, scissors beats paper")
        return "win";}
        
    else console.log("you lose, scissors beats paper")
}

const btn = document.querySelector('.container')
//console.log(btn)
btn.addEventListener('click', function(e){
    choice=e.target.innerText; //innerText method extracts the content of a raw html.
    console.log(choice)
   p=playerSelection(choice)
    console.log(p)
    //playRound(p,c)
   

})
/*function game(){
    score=0
    for(let i=0;i<5;i++){
        p=playerSelection()
        c=getComputerChoice()
        console.log(c)
        console.log(p)
    if(playRound(p,c)=="win")  
        score++}
    return score}
        console.log(game())*/
        
    