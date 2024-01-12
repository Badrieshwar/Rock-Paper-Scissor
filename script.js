let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('.msg');
const userScorePara=document.querySelector(".user-score");
const computerScorePara=document.querySelector(".computer-score");

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`user won. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`user lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genComputerChoice=()=>{
    const option=["rock","paper","scissor"];
    const randId=Math.floor(Math.random()*3);
    return option[randId];
}

const drawGame=()=>{
    msg.innerText="Game Was Draw.";
    msg.style.backgroundColor="#1D2B53";
}

const playGame=(userChoice)=>{
    const computerChoice=genComputerChoice();
    console.log('userChoice ',userChoice);
    console.log('computerChoice ',computerChoice);
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="rock"?true:false;
        }
        else{
            userWin=computerChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    }
    )
})