function getComputerChoice(){
    randomnumber=Math.floor(Math.random() * 3);

    switch (randomnumber) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2 :
        return "scissors";
    }
    
}
console.log(getComputerChoice())