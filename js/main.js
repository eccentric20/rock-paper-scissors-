//Tracks UserScore and Robots Score
let userScore = 0;
let cpuScore = 0;
let closeBtn;
//Creates variables for every element in the html
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

//Function for Cpu's Choice
function getCpuChoice() {
  //Array full of 3 choices
  const choices = ['rock', 'paper', 'scissors'];
  //sets random number and round it down to nearest number 
  const randomNumber = Math.floor(Math.random() * 3);
  //returns random nunber for Cpu choice
  return choices[randomNumber];
}


//Function that checks whether user or cpu wins
function win(userChoice, cpuChoice) {
  //increments user score
  userScore++;
  //changes userscore element text to userScore variable and cpu element to cpuScore
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  //shows the winner in the result span
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">You win!</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'flex';
}
//function to check who loses
function lose(userChoice, cpuChoice){
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-lose">You lost</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`; 
  modal.style.display = 'flex'
}
//checks if there is a draw
function draw(userChoice, cpuChoice){
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1>It's a draw</h1> <p>You both choose <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'flex'
}

//starts with user choice and randomly chooses who wins the round
function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, cpuChoice);
      return cpuChoice;
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, cpuChoice);
      return cpuChoice;
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, cpuChoice);
      return cpuChoice;
      break;
  }

  
}


function main() {
  rock_div.addEventListener('click', function() {
    const getCh = play('rock');
    
    const userChoice = document.getElementById('user-choice');

    const img = document.createElement("img");
    img.src = "./images/rock.png";
    userChoice.appendChild(img);

    const cpuChoice = document.getElementById('cpu-choice');
    
    const img2 = document.createElement("img");
    img2.src = "./images/" + getCh + ".png";
    cpuChoice.appendChild(img2);
    setTimeout(() => {
      userChoice.removeChild(img);
    }, 1000);

    setTimeout(() => {
      cpuChoice.removeChild(img2);
    }, 1000);
    
    

    
  })
  
  paper_div.addEventListener('click', function() {
    const getCh = play('paper');
    
    const userChoice = document.getElementById('user-choice');

    const img = document.createElement("img");
    img.src = "./images/paper.png";
    userChoice.appendChild(img);

    const cpuChoice = document.getElementById('cpu-choice');
    
    const img2 = document.createElement("img");
    img2.src = "./images/" + getCh + ".png";
    cpuChoice.appendChild(img2);
    setTimeout(() => {
      userChoice.removeChild(img);
    }, 1000);

    setTimeout(() => {
      cpuChoice.removeChild(img2);
    }, 1000);
  })
  
  scissors_div.addEventListener('click', function() {
    const getCh = play('scissors');
    
    const userChoice = document.getElementById('user-choice');

    const img = document.createElement("img");
    img.src = "./images/scissors.png";
    userChoice.appendChild(img);

    const cpuChoice = document.getElementById('cpu-choice');
    
    const img2 = document.createElement("img");
    img2.src = "./images/" + getCh + ".png";
    cpuChoice.appendChild(img2);
    setTimeout(() => {
      userChoice.removeChild(img);
    }, 1000);

    setTimeout(() => {
      cpuChoice.removeChild(img2);
    }, 1000);
  })
}


function clearModal(e){
  closeBtn = document.querySelector('.close');

  if(e.target == modal) {
    modal.style.display = "none"
  }
  else if(closeBtn){
    closeBtn.addEventListener('click', function(){
      modal.style.display = "none"
    });
  }
}

//restarts game and sets everything to 0 and sets the elememnts to user and cpu score
function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();
