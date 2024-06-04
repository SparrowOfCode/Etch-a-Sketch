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
            // row.style.color = "white";
            column.appendChild(row);
        }
        mainDiv.appendChild(column);
    }
}
createGrid(gridNum);

const elements = document.querySelectorAll('.sketchPadRow');

for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = "black";
        this.style.color = "black";
    })
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
