/* TODO IN JS:
- 
- Add a function for the button to create a randomized number from 1 to 76
- Randomized number should not be repeated
- Once the number is generated the cell with the same number should be highlighted on the bingo board
- Generate a user board with 24 randomized (and not repeated) numbers that that highlights as the main board does.
- Add a function for the button to create as a user board
- Add a function to allows creation of as many user boards as selected by the user

*/ 

//Generate 76 cells with cells numbered from 1 to 76 (Bingo Board)
// Add the created bingo board to appropriate div in the html

window.onload = function() {
    createBingoBoard()
}

function createBingoBoard() {

    let bingoBoard = document.getElementById("bingo-board")

    for (let bingoNumber = 1; bingoNumber <=76; bingoNumber++){
        let bingoBoardCell = document.createElement("div");
        bingoBoardCell.innerText = bingoNumber;
        bingoBoardCell.classList.add("number");
        bingoBoard.appendChild(bingoBoardCell);
        
    }
}

