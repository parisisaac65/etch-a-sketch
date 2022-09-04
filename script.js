// Create a webpage with 16x16 grid of square divs 
let numOfSquares = 16;
const container = document.querySelector('#container');

// Add a button asking for the number of squares per side for the new grid 
const resizeBtn = document.querySelector('.resizeBtn'); 
resizeBtn.addEventListener('click', resizeGrid); 

function createGrid(numOfSquares){
    container.style.cssText=`display:grid; width: 80%; grid-template-columns: repeat(${numOfSquares},1fr); background-color: rgba(149, 149, 149, 0.5)`;
    for (let i = 1; i < numOfSquares + 1; i++){
        for(let i = 1; i < numOfSquares + 1; i++){
            const cell = document.createElement('div');
            cell.classList.toggle('cell'); 
            cell.textContent = i;
            container.appendChild(cell);
            cell.addEventListener('mouseover',() => {
                displayHoverEffect(cell); 
            }); 
        }  
    }
}

function displayHoverEffect(cell){
    cell.style.cssText='background-color:black';
}
    
createGrid(numOfSquares);


function resizeGrid(){
    numOfSquares = prompt('Please enter the number of squares per side for new grid: ');
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    createGrid(numOfSquares); 
}

