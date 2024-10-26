let uScore = 0;
let cScore = 0;

let choices = document.querySelectorAll(".img1");

 let drawGmae = ()=>{
    console.log("Game was drawn");
    message.innerHTML = "DRAW";
    message.style.backgroundColor ="rgb(8, 24, 41)"
 }


let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let message = document.querySelector(".msg")
 
let ShowWinner = (userWin,userChoice,compChoice)=>{
  if(userWin==true){
    console.log("you win");
    uScore++;
    userScore.innerHTML =uScore.toString();
    message.innerHTML = `You win ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";

  }else{
    console.log("Comp Win");
    cScore++;
    compScore.innerHTML = cScore.toString();
    message.innerHTML = `Alas you lost ${compChoice} beats ${userChoice}`
    message.style.backgroundColor = "red";
  }

}

let genCompChoice = ()=>{
    let compChoice =["rock","paper","scissor"];
     let random =Math.floor(Math.random()*3);
    return compChoice[random];
}
let playGame = (userChoice)=>{
      let compChoice = genCompChoice();
      if(userChoice===compChoice){
        console.log("your choice was ",userChoice, "  Compter choice was  ",compChoice )
        drawGmae();
        
} else{
    let userWin = true;
    if (userChoice==="rock"){
        console.log("your choice was ",userChoice, "  Compter choice was  ",compChoice )

      userWin =  compChoice === "paper" ? false :true;
    }
   else if(userChoice==="paper"){
    console.log("your choice was ",userChoice, "  Compter choice was  ",compChoice )

      userWin=  compChoice === "scissor" ? false :true;
    }
   else if(userChoice==="scissor"){
    console.log("your choice was ",userChoice, "  Compter choice was  ",compChoice )

     userWin =   compChoice === "rock" ? false :true;
    }
    ShowWinner(userWin,userChoice,compChoice);
}
 
}
  choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        
        playGame(userChoice);  
    })
  })