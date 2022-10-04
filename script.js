const gridContainer = document.querySelector('.gridContainer');

for (let index = 0; index < 16; index++) {
    const div = document.createElement('div');
    div.classList.add('grid')
    gridContainer.appendChild(div);
}