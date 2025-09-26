// const gridContainer = document.querySelector("#gridContainer");
const sizeChange = document.querySelector("#sizeChange");
const body = document.querySelector("body");
let gridSize = 0;
let opacity = 0.5;

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
                grid.style.backgroundColor = "rgba(0, 0, 0, 0)";
                grid.dataset.opacity = "0";
                grid.addEventListener('mouseenter',(event) => {
                // grid.style.backgroundColor = `rgba(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;
                let currentOpacity = parseFloat(grid.dataset.opacity);
                if (currentOpacity < 1) {
                    currentOpacity = Math.min(currentOpacity + 0.1, 1); // cap at 1
                    grid.dataset.opacity = currentOpacity.toString();
                    grid.style.backgroundColor = `rgba(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${currentOpacity})`;
                }
                // grid.classList.add("black");
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

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


function incrementOpacity() {
    if (opacity >= 0 && opacity <= 1.0) {
    opacity += 0.1;
    console.log(opacity);
    } else;
}

