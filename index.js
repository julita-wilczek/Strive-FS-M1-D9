/* TODO IN JS:

- Generate a user board with 24 randomized (and not repeated) numbers that that highlights as the main board does.
- Add a function for the button to create as a user board
- Add a function to allows creation of as many user boards as selected by the user
// Randomized number should not be repeated
*/ 



window.onload = function() {
    createBingoBoard()
}


function createBingoBoard() {

    let bingoBoard = document.getElementById("bingo-board")
//Generate 76 cells with cells numbered from 1 to 76 (Bingo Board)
    for (let bingoNumber = 1; bingoNumber <=76; bingoNumber++){
        let bingoBoardCell = document.createElement("div");
        bingoBoardCell.innerText = bingoNumber;
        bingoBoardCell.classList.add("number"); 
        bingoBoard.appendChild(bingoBoardCell); //Add the created bingo board to appropriate div in the html
        
    }
}

// Add a function for the button to create a randomized number from 1 to 76
function randomNumberGenerator(){
    let randomNumber = Math.round(Math.random()*76)
    return randomNumber;
}

// Once the number is generated the cell with the same number should be highlighted on the bingo board
// The highlighted number need to stay highlighted
function generateBingoNumber() {
    let randomNumber = randomNumberGenerator()
    let bingoBoardCells = document.getElementsByClassName("number")
    let showNumberDiv = document.getElementById("show-generated-number")
    showNumberDiv.innerText = ""
    for (let bingoBoardCell of bingoBoardCells){
    if ( randomNumber === parseInt(bingoBoardCell.innerText)) {
        bingoBoardCell.classList.add("selected")
        showNumberDiv.innerText = "Number " + randomNumber;
    }
    }
}
