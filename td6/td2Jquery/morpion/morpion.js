let firstPlayer = "X";
let secondPlayer = "O";
let playerTurn = firstPlayer;
let getPlayerXName = document.getElementById("playerOne");
let getPlayerOName = document.getElementById("playerTwo");
let getSizeOfTable = document.getElementById("sizeOfTable");
let startGameBtn = document.getElementById("startBtn");
let gameMode = document.getElementById("gameMode");
let numberOfWinsX = 0;
let numberOfWinsO = 0;
const createTable = (size) => {
    let body = document.querySelector("body");
    let table = document.createElement("table");
    let StatutOfGame = document.createElement("h1");
    let scoreBoardPlayer1 = document.createElement("div");
    let scoreBoardPlayer2 = document.createElement("div");
    scoreBoardPlayer1.setAttribute('id', 'scoreBoardPlayer1');
    scoreBoardPlayer2.setAttribute('id', 'scoreBoardPlayer2');
    table.setAttribute("id", "table");
    StatutOfGame.setAttribute("id", "StatutOfGame");
    scoreBoardPlayer1.setAttribute('style', 'text-align:center');
    scoreBoardPlayer2.setAttribute('style', 'text-align:center');
    table.setAttribute("style", "margin:auto;");
    StatutOfGame.setAttribute("style", "text-align:center;");
    table.classList.add("table");

    for (let i = 0; i < size; i++) {
        let tr = document.createElement("tr");
        tr.setAttribute("id", "tr");
        table.appendChild(tr);
        for (let j = 0; j < size; j++) {
            let td = document.createElement("td");
            td.setAttribute(
                "style",
                " border: 2px solid black; border-collapse: collapse; width:100px; height:100px; max-width: 100px; max-height: 100px; text-align: center; font-size: 50px; font-weight: bold; "
            );
            td.setAttribute("class", "td");
            tr.appendChild(td);
        }
    }
    body.appendChild(table);
    body.appendChild(StatutOfGame);
    body.appendChild(scoreBoardPlayer1);
    body.appendChild(scoreBoardPlayer2);
};

const clickCell = () => {
    let cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", cellClicked, { once: true });
    }
};

const cellClicked = (event) => {
    event.target.innerHTML = playerTurn;
    updateStatutOfGame(playerTurn);

    if (checkRow() || checkColumn() || checkDiag()) {
        updateStatutOfGame(`win${playerTurn}`);
        if (playerTurn === firstPlayer) {
            numberOfWinsX++;
            let scoreBoardPlayer1 = document.getElementById('scoreBoardPlayer1');
            scoreBoardPlayer1.innerHTML = ` ${getPlayerXName.value} has won ${numberOfWinsX} game`;
        } else if (playerTurn === secondPlayer) {
            numberOfWinsO++;
            let scoreBoardPlayer2 = document.getElementById('scoreBoardPlayer2');
            scoreBoardPlayer2.innerHTML = ` ${getPlayerOName.value} has won ${numberOfWinsO} game `;
        }

    }  
    playerTurn === firstPlayer ? (playerTurn = secondPlayer) : (playerTurn = firstPlayer);

};

const checkRow = () => {
    let cells = document.querySelectorAll("td");
    let size = getSizeOfTable.options[getSizeOfTable.selectedIndex].value;
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(cells[i * size + j]);
        }
        if (row.every((cell) => cell.innerHTML === firstPlayer)) {
            return true;
        } else if (row.every((cell) => cell.innerHTML === secondPlayer)) {
            return true;
        }
    }
    return false;

}
const checkDiag = () => {
    let cells = document.querySelectorAll("td");
    let size = getSizeOfTable.options[getSizeOfTable.selectedIndex].value;
    let diag1 = [];
    let diag2 = [];
    for (let i = 0; i < size; i++) {
        diag1.push(cells[i * size + i]);
        diag2.push(cells[i * size + size - i - 1]);
    }
    if (diag1.every((cell) => cell.innerHTML === firstPlayer)) {
        return true;
    } else if (diag1.every((cell) => cell.innerHTML === secondPlayer)) {
        return true;
    } else if (diag2.every((cell) => cell.innerHTML === firstPlayer)) {
        return true;
    } else if (diag2.every((cell) => cell.innerHTML === secondPlayer)) {
        return true;
    }
    return false;
}
const checkColumn = () => {
    let cells = document.querySelectorAll("td");
    let size = getSizeOfTable.options[getSizeOfTable.selectedIndex].value;
    for (let i = 0; i < size; i++) {
        let column = [];
        for (let j = 0; j < size; j++) {
            column.push(cells[i + j * size]);
        }
        if (column.every((cell) => cell.innerHTML === firstPlayer)) {
            return true;
        } else if (column.every((cell) => cell.innerHTML === secondPlayer)) {
            return true;
        }
    }
    return false;
}


const updateStatutOfGame = (stat) => {
    let statutText;
    switch (stat) {
        case "O":
            statutText = `${getPlayerXName.value} is playing with X`;
            break;
        case "X":
            statutText = `${getPlayerOName.value} is playing with O`;
            break;
        case "winX":
            statutText = `${getPlayerXName.value} has won`;
            break;
        case "winO":
            statutText = `${getPlayerOName.value} has won`;
            break;
        case "draw":
            statutText = "Draw";
            break;
    }
    StatutOfGame.innerHTML = statutText;
};


const startGame = () => {
    let size = getSizeOfTable.options[getSizeOfTable.selectedIndex].value;
    if (getPlayerXName.value.trim() === "" || getPlayerOName.value.trim() === "") {
        alert("Please enter a correct name");
    } else {
        createTable(size);
        clickCell();
        disableButton();
        disableFields();
    }

};
const restartGame = () => {
    let cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].classList.remove(firstPlayer);
        cells[i].classList.remove(secondPlayer);
    }
    playerTurn = firstPlayer;
    updateStatutOfGame(playerTurn);
    clickCell();
};

const disableButton = () => {
    startGameBtn.disabled = true;
    startGameBtn.style.visibility = "hidden";
}
const disableFields = () => {
    getSizeOfTable.style.visibility = "hidden";
    gameMode.style.visibility = "hidden";
    getPlayerXName.style.visibility = "hidden";
    getPlayerOName.style.visibility = "hidden";

}

