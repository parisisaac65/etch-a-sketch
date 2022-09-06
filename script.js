// Create a webpage with 16x16 grid of square divs 
let numOfSquares = 16;
let totalGridSize = 0;
const container = document.querySelector('#container');

// Add a button asking for the number of squares per side for the new grid 
const resizeBtn = document.querySelector('.resize-btn'); 
resizeBtn.addEventListener('click', resizeGrid); 

// Add a button to clear grid
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clear);

// Add a button for eraser
const eraserBtn = document.querySelector('.eraser-btn');

// Add a button for colored pen 
const colorBtn = document.querySelector('.color-btn');

//Add a button for black pen 
const blackBtn = document.querySelector('.black-btn'); 

function createGrid(numOfSquares){
    container.style.cssText=`display:grid; width: 600px; height: 600px; grid-template-columns: repeat(${numOfSquares},1fr); grid-template-rows: repeat(${numOfSquares},1fr); `;
    totalGridSize = numOfSquares ** 2; 
    for (let i = 1; i <= totalGridSize; i++){
        const cell = document.createElement('div');
        cell.classList.toggle('cell'); 
        container.appendChild(cell);
        cell.style.cssText='display:grid';
        blackBtn.addEventListener('click',()=> {
            cell.addEventListener('mouseover',() => {
                displayHoverEffect(cell);
            });
        });
        colorBtn.addEventListener('click',() => {
            cell.addEventListener('mouseover', () => {
                displayColorHoverEffect(cell);
            });
        });
        cell.addEventListener('mouseover',() => {
            displayHoverEffect(cell);
        });
        eraserBtn.addEventListener('click',() => {
            cell.addEventListener('mouseover',() => {
                cell.style.cssText='background-color:white';
            });
        });
    }
}

function randomNum(max){
    return Math.floor(Math.random()*(max+1)); 
}

function displayColorHoverEffect(cell){
    let r = randomNum(255);
    let g = randomNum(255);
    let b = randomNum (255);

    cell.style.cssText=`background-color:rgb(${r},${g},${b})`;
}

function displayHoverEffect(cell){
    cell.style.cssText='background-color:black';
}
    
createGrid(numOfSquares); 

function resizeGrid(){
    numOfSquares = prompt('Please enter the number of squares per side for new grid: ');
    while (numOfSquares > 64){
        numOfSquares = prompt('Please enter a number 64 or lower'); 
    }
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    createGrid(numOfSquares); 
}

function clear(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    createGrid(numOfSquares); 
}
