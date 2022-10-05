const gridContainer = document.querySelector('.gridContainer');

for (let column = 1; column <= 16; column++) {
    for (let row = 1; row <= 16; row++) {
        const div = document.createElement('div');
        div.classList.add('grid')
        div.textContent = `.`
        gridContainer.appendChild(div);
    }
}

    