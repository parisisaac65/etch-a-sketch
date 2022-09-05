// Create a webpage with 16x16 grid of square divs 
let numOfSquares = 16;
let totalGridSize = 0;
const container = document.querySelector('#container');

// Add a button asking for the number of squares per side for the new grid 
const resizeBtn = document.querySelector('.resize-btn'); 
resizeBtn.addEventListener('click', resizeGrid); 


function createGrid(numOfSquares){
    container.style.cssText=`display:grid; width: 80%; height: 50%; margin-left: 95px; margin-top: 25px; grid-template-columns: repeat(${numOfSquares},1fr); grid-template-rows: repeat(${numOfSquares},1fr); `;
    totalGridSize = numOfSquares ** 2; 
    for (let i = 1; i <= totalGridSize; i++){
        const cell = document.createElement('div');
        cell.classList.toggle('cell'); 
        // cell.textContent = i;
        container.appendChild(cell);
        cell.style.cssText='display:grid';
        cell.addEventListener('mouseover',() => {
            displayHoverEffect(cell); 
        }); 
    
    }
}

function displayHoverEffect(cell){
    cell.style.cssText='background-color:black';
}
    
createGrid(numOfSquares); 


function resizeGrid(){
    numOfSquares = prompt('Please enter the number of squares per side for new grid: ');
    while (numOfSquares > 100){
        numOfSquares = prompt('Please enter a number 100 or lower'); 
    }
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    createGrid(numOfSquares); 
}

