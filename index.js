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
  `Game starting , ${playerNamesArr[0]} against ${playerNamesArr[1]} `
);