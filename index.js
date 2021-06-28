import randomNumber from "./JavaScript/createRandomNumber.js";

const playerNamesArr = [];

// Tracking Points
const playersPoints = {};

const setPlayerNames = (playerAmount) => {
 playerNamesArr = []
 playersPoints = {}
  for (let index = 1; index <= playerAmount; index++) {
    let curName = prompt(`player ${index} name`);
    console.log(curName);
    if (!curName) {
      index -= 1;
      console.log("please fill field");
      continue;
    }
    playerNamesArr.push(curName);
  }
  playerNamesArr.forEach(player => playersPoints[player] = 0)
};

const userInputHowManyPlayers = () => {
    let players = Math.floor(prompt("How many players between 2-7"))
    while(2 > players || players > 8){
        players = Math.floor(prompt("How many players between 2-7"))
    }
    return players
    
}
let currentPlayersPlaying = playerNamesArr;

console.log(
  `Game starting , ${playerNamesArr[0]}(even) against ${playerNamesArr[1]}(odd) `
  );

  playersPoints

const addPoint = (playerName) => {
    if(playersPoints[playerName]){
        playersPoints[playerName] += 1
    }else{
        playersPoints[playerName] = 1
    }

  ;
};

const checkIfPlayerWon = (playerName,pointsNeededToWin,playersPointsObj) => {
    if(playersPointsObj[playerName] >= pointsNeededToWin) {
        console.log(`${playerName} is the winner`);
        return true
    }
}

const getCurrentRoundWinner = (player1,player2,curRandomNum) => {
    if(curRandomNum % 2 === 0){
    addPoint(player1);
    return player1;
    }else{
        addPoint(player2);
        return player2;
    }

}
const getTwoRandomPlayers = (playerNamesArr) => {
    const randPlayer1Index = randomNumber(0,playerNamesArr.length-1)
    let randPlayer2Index = randomNumber(0,playerNamesArr.length-1)
    while(randPlayer2Index === randPlayer1Index) randPlayer2Index = randomNumber(0,playerNamesArr.length-1)
    const twoPlayerArray = [playerNamesArr[randPlayer1Index],playerNamesArr[randPlayer2Index]]
    return twoPlayerArray
}


const FullMatch = (playerNamesArr,playersPoints,minRandom,maxRandom) => {
    setPlayerNames(userInputHowManyPlayers());
    const BestOf  = Math.ceil(prompt("Best of how many?")/2)
    let winnerWasFound = false
    let RoundNumber = 1
    while(winnerWasFound === false){
        let [player1,player2] = getTwoRandomPlayers(playerNamesArr)
        const curRandomNum = randomNumber(minRandom, maxRandom);
        let roundWinner = getCurrentRoundWinner(player1,player2,curRandomNum)
        console.log(`#${RoundNumber}ROUND, random number is ${curRandomNum} ${roundWinner} Scored!`);
        console.log(`Status ${player1}:${playersPoints[player1]},${player2} : ${playersPoints[player2]} `);

        if(checkIfPlayerWon(roundWinner,BestOf,playersPoints)) {
            winnerWasFound = true
        }
        RoundNumber += 1
        if(RoundNumber>1000) return
    }

}

FullMatch(playerNamesArr,playersPoints,-5,13)