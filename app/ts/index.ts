let firstPlayerButton = document.querySelector('#firstPlayerButton') as HTMLButtonElement;
let secondPlayerButton = document.querySelector('#secondPlayerButton') as HTMLButtonElement;


interface PlayersDetails {
  scores: number[];
  playerName: number
}

let player1: PlayersDetails = {
  scores: [],
  playerName: 1
};

let player2: PlayersDetails = {
  scores: [],
  playerName: 2
};
secondPlayerButton.disabled = true
function player1Start() {
    firstPlayerButton.disabled = true;
  let randomNumber = Math.floor(Math.random() * 10);
  let showScoreP1 = document.querySelector("#showScoreP1");
  let totalScore = document.querySelector('#totalScore')
  if (showScoreP1) {
    showScoreP1.textContent = String(randomNumber);
    player1.scores.push(randomNumber);
    if(totalScore){
        totalScore.textContent = String(player1.scores.reduce((acc, curr) => acc + curr, 0));
    }
  }
  checkTotalScore(player1.scores.reduce((a:number, b:number) => a + b, 0), player2.scores.reduce((a:number, b:number) => a + b, 0))
  secondPlayerButton.disabled = false
}
function player2Start() {
    firstPlayerButton.disabled = false;
    let randomNumber = Math.floor(Math.random() * 10);
    let showScoreP2 = document.querySelector("#showScoreP2");
    let totalScoreP2 = document.querySelector('#totalScoreP2');
    if (showScoreP2) {
        showScoreP2.textContent = String(randomNumber);
        player2.scores.push(randomNumber);
    }
    if (totalScoreP2) {
        totalScoreP2.textContent = String(player2.scores.reduce((acc, curr) => acc + curr, 0));
    }
    checkTotalScore(player1.scores.reduce((a:number, b:number) => a + b, 0), player2.scores.reduce((a:number, b:number) => a + b, 0))
    secondPlayerButton.disabled = true
}

function checkTotalScore(p1Score:number, p2Score:number){
  if(p1Score >= 100){
    document.querySelector('#modal')?.classList.add('!scale-100')
    firstPlayerButton.disabled = true;
    let playerWin = document.querySelector('#playerWin')
    if(playerWin){
      playerWin.textContent = `Player ${player1.playerName} wins! 🥳`
    }
  }
  if(p2Score >= 100){
    document.querySelector('#modal')?.classList.add('!scale-100')
    secondPlayerButton.disabled = true;
    let playerWin = document.querySelector('#playerWin')
    if(playerWin){
      playerWin.textContent = `Player ${player2.playerName} wins! 🥳`
    }
    }
}

function restartGame(){
  document.querySelector('#modal')!.classList.remove('!scale-100')
  player1.scores = [];
  player2.scores = [];
  
  document.querySelector('#showScoreP1')!.textContent = '';
  document.querySelector('#showScoreP2')!.textContent = '';
  document.querySelector('#totalScore')!.textContent = '0';
  document.querySelector('#totalScoreP2')!.textContent = '0';
  firstPlayerButton.disabled = false;
  secondPlayerButton.disabled = true;
}