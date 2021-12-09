/* TODO IN JS:

- Generate a user board with 24 randomized (and not repeated) numbers that that highlights as the main board does.
- Add a function for the button to create as a user board
- Add a function to allows creation of as many user boards as selected by the user

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
function randomNumberGenerator(range){ // updated to range so it can be used also for creating user board
    let randomNumber = Math.round(Math.random()*range)
    return randomNumber;
}

// TO-DO Randomized number should not be repeated

// Once the number is generated the cell with the same number should be highlighted on the bingo board
// The highlighted number need to stay highlighted
function generateBingoNumber() {
    let randomNumber = randomNumberGenerator(76)
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

// Generate a user board with 24 randomized (and not repeated) numbers that that highlights as the main board does.

function createUserBoard() {

    let userBoard = document.getElementById("user-board")
   

    for (let userNumber = 0; userNumber<24; userNumber++){
        let userBoardCell = document.createElement("div");
        let randomNumber = randomNumberGenerator(24)
        userBoardCell.innerText = randomNumber;
        userBoardCell.classList.add("number");
        userBoard.appendChild(userBoardCell); //Add the created bingo board to appropriate div in the html
    }
}
