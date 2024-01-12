let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genComputerChoice =()=>{
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame= ()=>{
    console.log("Game was Draw")
    msg.innerText ="Game Was Draw.Play again."
    msg.style.backgroundColor = "#081b31";
   
}

const showWinner = (userWin, userChoice , compChoice)=> {
    if(userWin){
        console.log(msg)
        userScore++
        userScorePara.innerText=userScore
        msg.innerText=`you Won! Your ${userChoice} beats ${compChoice}`
        console.log(msg)
        msg.style.backgroundColor = "green";
        console.log("you Win!")
    } else {
        compScore++
        compScorePara.innerText=compScore;
        console.log("You Lose")
        msg.innerText=`You Lost ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
    }

}

const playGame =(userChoice)=>{
    console.log("user choice =",userChoice );
    const compChoice = genComputerChoice();
    console.log("comp choice =",compChoice)
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true; 
        }else if( userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;

        }else{
            //rock ,
            userWin = compChoice === "rock"?false :true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice was clicked")
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
})

