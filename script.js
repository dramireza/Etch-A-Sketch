function changeSize() {
    let size = window.prompt('Size');
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