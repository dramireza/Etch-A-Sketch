const gridContainer = document.querySelector('.gridContainer');

for (let column = 1; column <= 16; column++) {
    for (let row = 1; row <= 16; row++) {
        const div = document.createElement('div');
        div.classList.add('grid')
        gridContainer.appendChild(div);
    }
}

const grids = document.querySelectorAll('.grid');

grids.forEach(grid => {
    grid.addEventListener('mouseover',(e) =>{
        grid.classList.add('active')
    })
});
    