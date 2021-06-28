import randomNumber from "./JavaScript/createRandomNumber.js";

const playerNamesArr = [];

// Tracking Points
const playersPoints = {};

const setPlayerNames = (playerAmount) => {
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
};

setPlayerNames(2);
let currentPlayersPlaying = playerNamesArr;

console.log(
  `Game starting , ${playerNamesArr[0]}(even) against ${playerNamesArr[1]}(odd) `
  );

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


const FullMatch = (NumberOfRoundsToWin,playerNamesArr,playersPoints,minRandom,maxRandom) => {
    let [player1,player2] = playerNamesArr
    let winnerWasFound = false
    let RoundNumber = 1
    while(winnerWasFound === false){
        const curRandomNum = randomNumber(minRandom, maxRandom);
        let roundWinner = getCurrentRoundWinner(player1,player2,curRandomNum)
        console.log(`#${RoundNumber}ROUND, random number is ${curRandomNum}`);
        if(checkIfPlayerWon(roundWinner,NumberOfRoundsToWin,playersPoints)) {
            winnerWasFound = true
        }
        RoundNumber += 1
        if(RoundNumber>1000) return
    }

}

FullMatch(3,playerNamesArr,playersPoints,-5,13)