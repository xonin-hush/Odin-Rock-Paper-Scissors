
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

function playerSelection(a){
a=prompt("What's your play")
a=a.toLowerCase()
return a;
}

function playRound(p,c){
    if(p===c)
    console.log("it's a tie")

if ((p=="rock"&&c=="paper")||(c=="rock"&&p=="paper"))
    if(p=="paper"){
        console.log("you win, paper beats rock")
        return "win";}
    else console.log("you lose, paper beats rock")

if ((p=="scissors"&&c=="rock")||(c=="scissors"&&p=="rock"))
    if(p=="rock"){
        console.log("you win, rock beats scissors")
        return"win";}
    else  console.log("you lose, rock beats scissors")

if ((p=="paper"&&c=="scissors")||(c=="paper"&&p=="scissors"))
    if(p=="scissors"){
        console.log("you win, scissors beats paper")
        return "win";}
        
    else console.log("you lose, scissors beats paper")
}

function game(){
    score=0
    for(let i=0;i<5;i++){
        p=playerSelection()
        c=getComputerChoice()
        console.log(c)
        console.log(p)
    if(playRound(p,c)=="win")  
        score++}
    return score}
        console.log(game())
        
    