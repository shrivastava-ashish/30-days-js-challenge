let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("comp-score");
let msg = document.getElementById("msg");
let resetBtn = document.getElementById("reset-btn");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playMove(userChoice);
  });
});

let compChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
};

function playMove(userChoice) {
  let getChoice = compChoice();

  if (userChoice == "rock") {
    if (getChoice == "rock") {
      msg.innerHTML = "tie, both choose rock";
      msg.style.backgroundColor = "yellow";
    } else if (getChoice == "paper") {
      msg.innerHTML = "comp wins, paper beats rock";
      msg.style.backgroundColor = "red";
      compScoreSpan.innerHTML = ++compScore;
    } else {
      msg.innerHTML = "user wins, rock beats scissors";
      msg.style.backgroundColor = "green";
      userScoreSpan.innerHTML = ++userScore;
    }
  } else if (userChoice == "paper") {
    if (getChoice == "rock") {
      msg.innerHTML = "user wins, paper beats rock";
      msg.style.backgroundColor = "green";
      userScoreSpan.innerHTML = ++userScore;
    } else if (getChoice == "paper") {
      msg.innerHTML = "tie, both choose paper";
      msg.style.backgroundColor = "yellow";
    } else {
      msg.innerHTML = "comp wins, scissors beats paper";
      msg.style.backgroundColor = "red";
      compScoreSpan.innerHTML = ++compScore;
    }
  } else {
    if (getChoice == "rock") {
      msg.innerHTML = "comp wins, rock beats scissors";
      msg.style.backgroundColor = "red";
      compScoreSpan.innerHTML = ++compScore;
    } else if (getChoice == "paper") {
      msg.innerHTML = "user wins, scissors beats paper";
      msg.style.backgroundColor = "green";
      userScoreSpan.innerHTML = ++userScore;
    } else {
      msg.innerHTML = "tie, both choose scissors";
      msg.style.backgroundColor = "yellow";
    }
  }
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
  compScore = 0;
  compScoreSpan.innerHTML = compScore;
  msg.innerHTML = "Play your move!";
  msg.style.backgroundColor = "#081B31";
});