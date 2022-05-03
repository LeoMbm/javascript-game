// Load info

const playerLog = document.querySelector("h2");

let gameEnabled = true;

let actifPlayer = "X";

let stateGame = ["", "", "", "", "", "", "", "", ""];

const conditionsWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Message in game

const win = () => `The player ${actifPlayer} is the winner`;
const egality = () => "Egality";
const tourPlayer = () => `It's Player ${actifPlayer} turn`;

playerLog.innerHTML = tourPlayer();

document
  .querySelectorAll(".case")
  .forEach((cell) => cell.addEventListener("click", gestionClic));

document.querySelector("#restart").addEventListener("click", restart);

function gestionClic() {
  // Recupere la case cliqué (index)

  const indexCase = parseInt(this.dataset.index);

  if (stateGame[indexCase] !== "" || !gameEnabled) {
    return;
  }

  // On met la croix dans le jeu

  stateGame[indexCase] = actifPlayer;
  this.innerHTML = actifPlayer;

  checkWin();
}

// Fonction qui va vérifier la victoire/défaite/egalité

function checkWin() {
  let tourWin = false;

  for (const conditionWin of conditionsWin) {
    let value1 = stateGame[conditionWin[0]];
    let value2 = stateGame[conditionWin[1]];
    let value3 = stateGame[conditionWin[2]];

    if (value1 == "" || value2 == "" || value3 == "") {
      continue;
    }
    if (value1 == value2 && value2 == value3) {
      tourWin = true;
      break;
    }
  }

  if (tourWin) {
    playerLog.innerHTML = win();
    gameEnabled = false;
    return;
  }

  if (!stateGame.includes("")) {
    playerLog.innerHTML = egality();
    gameEnabled = false;
    return;
  }

  actifPlayer = actifPlayer == "X" ? "O" : "X";
  playerLog.innerHTML = tourPlayer();
}

// Fonction qui remet tout à zéro lorsqu'on appuie sur le bouton
function restart() {
  actifPlayer = "X" ? "O" : "X";
  gameEnabled = true;
  stateGame = ["", "", "", "", "", "", "", "", ""];
  playerLog.innerHTML = tourPlayer();
  document.querySelectorAll(".case").forEach((cell) => (cell.innerHTML = ""));
}
