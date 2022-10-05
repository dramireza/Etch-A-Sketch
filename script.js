function changeSize(prompt = 'Enter a number between 1 and 100, to make a new grid.') {
    let size = window.prompt(prompt);
    if (size===null)return;
    size=parseInt(size);
    if (!(size>0&&size<=100)){
        changeSize('Input invalid, please enter a number between 1 and 100, to make a new grid.');
        return;
    }
    drawGrid(size)
}

function drawGrid(size = 16) {

    const gridContainer = document.querySelector('.gridContainer');
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`);
    
    if(gridContainer.hasChildNodes()){
        let children = Array.from(gridContainer.childNodes);
        children.forEach(child => gridContainer.removeChild(child))
    }
    for (let column = 1; column <= size; column++) {
        for (let row = 1; row <= size; row++) {
            const div = document.createElement('div');
            div.classList.add('grid')
            gridContainer.appendChild(div);
        }
    }

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', (e) => {
            grid.classList.add('active')
        })
    });

}

drawGrid();