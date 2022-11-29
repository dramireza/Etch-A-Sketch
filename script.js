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
            if (!grid.classList.contains('active')){
            grid.classList.add('active')
            let rgbColor = randomRGB();
            grid.style.backgroundColor =  `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;
            } else {
                let rgbSet = grid.style.backgroundColor.match(/\d+/g);
                let newRGB = darkenRGB(rgbSet[0],rgbSet[1],rgbSet[2]);
                grid.style.backgroundColor =  `rgb(${newRGB.newR},${newRGB.newG},${newRGB.newB})`;
            }
            
        })
    });

}

function randomRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return {r,g,b} 
}

function darkenRGB(r,g,b){
    newR = r * (1 - 0.5);
    newG = g * (1 - 0.5);
    newB = b * (1 - 0.5);
    return {newR, newB, newG}
}

drawGrid();