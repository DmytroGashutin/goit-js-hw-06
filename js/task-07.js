const sizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');



textSize.style.fontSize = sizeControl.value + 'px';
sizeControl.addEventListener('input', (event) => {
    console.log(event.target.value);
    textSize.style.fontSize = `${event.target.value}px`;
});
