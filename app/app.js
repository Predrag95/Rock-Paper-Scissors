
/*----GAME---- */
function game(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = botImagePick(randomPick());
  results = decideWinner(humanChoice, botChoice);
  message = finalMessage(results);
  gameFrontEnd(yourChoice.id, botChoice, message);
}


//Bot Creation
function randomPick() {
  return Math.floor(Math.random() * 3);
}

function botImagePick(number) {
  return ['rock', 'paper', 'scissors'][number];
}

//Results Creation
function decideWinner(human, computer) {
  let imageDataInfo = {
    'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0}
  }

  let humanScore = imageDataInfo[human][computer];
  let computerScore = imageDataInfo[computer][human];

  return [humanScore, computerScore];
}

//Message Creation
function finalMessage([humanScore, computerScore]) {
  if (humanScore === 0) {
    return {'message': 'You Lost!', 'color': 'red'};
  } else if (humanScore === 0.5) {
    return {'message': 'You Tied!', 'color': 'yellow'};
  } else {
    return {'message': 'You Won!', 'color': 'green'};
  }
};

//Game Front End Creation
function gameFrontEnd(humanImageSelect, botImageSelect, finalMessage) {
  let imageData = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  humanDiv = document.createElement('div');
  botDiv = document.createElement('div');
  messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imageData[humanImageSelect] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  botDiv.innerHTML = "<img src='" + imageData[botImageSelect] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
  messageDiv.innerHTML = "<h1 class='textDance' style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 40px'>" + finalMessage['message'] + "</h1>";
  

  document.getElementById('game').appendChild(humanDiv);
  document.getElementById('game').appendChild(messageDiv);
  document.getElementById('game').appendChild(botDiv);
}

/*----Title----*/
setInterval(function() {
  let text = document.getElementById('title').textContent;
  text = text.split('').pop() + text.slice(0, text.length - 1);
  document.getElementById('title').textContent = text;
}, 500);
