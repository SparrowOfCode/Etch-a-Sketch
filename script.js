const mainDiv = document.querySelector('.innerContainer');
const gridNum = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');
        column.className = "sketchPadColumn";
        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement('div');
            row.className = "sketchPadRow";
            row.innerText = (i * gridSize) + j;
            row.style.color = "white";
            column.appendChild(row);
        }
        mainDiv.appendChild(column);
    }
    hoverEvt();
}
createGrid(gridNum);

function hoverEvt() {
    const elements = document.querySelectorAll('.sketchPadRow');

    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = colorChange();
            this.style.color = this.style.backgroundColor;
            if (this.style.opacity <= 0.9) {
                this.style.opacity = +this.style.opacity + 0.1;
            }
        })
    }
}

function colorChange() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

const gridSizeBtn = document.createElement('button');
gridSizeBtn.className = "gridButton";
gridSizeBtn.innerText = "Set Grid Size"

mainDiv.prepend(gridSizeBtn);

function deleteGrid() {
    const elementRow = document.querySelectorAll('.sketchPadRow')
    const elementColumn = document.querySelectorAll('.sketchPadColumn');
    for (const element of elementRow) {
        element.remove();
    };
    for (const element of elementColumn) {
        element.remove();
    };
}
gridSizeBtn.addEventListener('click', function () {
    const btnPrompt = prompt("Enter a number for the grid size.");
    const newGridSize = parseInt(btnPrompt);
    if (isNaN(newGridSize)) {
        alert("Please enter a number!");
    } else if (newGridSize > 100) {
        alert("Please enter a smaller number! Numbers over 100 cause lag.");
    } else {
        deleteGrid();
        createGrid(newGridSize);
    }
});
