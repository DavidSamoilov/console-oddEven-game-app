import randomNumber from "./JavaScript/createRandomNumber.js";

const playerNamesArr = [];

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

const playersPoints = {};

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
        return
    }
}

const Round = (currentPlayersPlaying,NumberOfRoundsToWin) => {
  const curRandomNum = randomNumber(-5, 13);
  curRandomNum % 2 === 0
    ? (addPoint(currentPlayersPlaying[0]),
    checkIfPlayerWon(currentPlayersPlaying[0],2))
    : (addPoint(currentPlayersPlaying[1]),
    checkIfPlayerWon(currentPlayersPlaying[1],2))

};

const FullMatch = (NumberOfRoundsToWin,playerNamesArr) => {
    while(true){
        Round(playerNamesArr,NumberOfRoundsToWin){

        }
    }


}
