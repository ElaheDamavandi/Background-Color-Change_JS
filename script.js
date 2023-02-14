
const backgroundArray = ['palevioletred', 'blueviolet', 'grey', 'orange', 'darkslategray'];
const mainElement = document.querySelector('body');

mainElement.style.backgroundColor = 'grey';

const  changeBackground = () => {
    let color = backgroundArray[parseInt(Math.random()*backgroundArray.length)];
    mainElement.style.backgroundColor = color;
    // mainElement.classList.add(color);
}

document.getElementById("button").addEventListener("click", changeBackground);