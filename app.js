// Load info

const playerLog = document.querySelector('h2')


let gameEnabled = true;

let actifPlayer = "X";

let stateGame = ["", "", "", "", "", "", "", "", ""]

const conditionsWin = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




// Message in game


const win = () => `Le joueur ${actifPlayer} à gagné`
const equality = () => "Egalité"
const tourPlayer = () => `C'est au tour du joueur ${actifPlayer}`

playerLog.innerHTML = tourPlayer()

document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClic))

document.querySelector("#restart").addEventListener("click", restart)


function gestionClic(){

    // Recupere la case cliqué (index)

    const indexCase = parseInt(this.dataset.index)

    if (stateGame[indexCase] !== ""  || !gameEnabled){
        return
    }

    // On met la croix dans le jeu

    stateGame[indexCase] = actifPlayer
    this.innerHTML = actifPlayer


    checkWin()
}


function checkWin() {

    let tourWin = false

    for (const conditionWin of conditionsWin) {
        
    }

}