// Create a webpage with 16x16 grid of square divs 
const container = document.querySelector('#container'); 

function createGrid (){
    for (let i = 1; i < 17; i++){
        for(let i = 1; i < 17; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.style.cssText = 'color:blue';
            cell.textContent = i;
            container.appendChild(cell);
        }
    } 
}

createGrid();

