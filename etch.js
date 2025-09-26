// const gridContainer = document.querySelector("#gridContainer");
const sizeChange = document.querySelector("#sizeChange");
const body = document.querySelector("body");
let gridSize = 0;

function createGridContainer() {
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "gridContainer");
    body.appendChild(gridContainer);
}

function removeGridContainer() {
    gridContainer.remove();
}


function createGrid (gridSize) {
    createGridContainer();
    for (let i = 1; i <= gridSize; i++) {
        const vgrid = document.createElement("div");
        vgrid.setAttribute("id", "vgrid");
        gridContainer.appendChild(vgrid);
            for (let j = 1; j <= gridSize; j++) {
                const grid = document.createElement("div");
                grid.setAttribute("id", "grid");
                grid.addEventListener('mouseenter',(event) => {
                grid.classList.add("black");
                });
                vgrid.appendChild(grid);
            }
    } 
}

createGrid(16);

sizeChange.addEventListener('click',() => {
    removeGridContainer();
    gridSize = prompt("Please enter a value from 1 to 100 to configure grid size");
    if (gridSize < 1 || gridSize > 100) {
        alert("Invalid grid size");
        gridSize = prompt("Please enter a value from 10 to 100 to configure grid size");
        createGrid(gridSize);
    } else createGrid(gridSize);
})

