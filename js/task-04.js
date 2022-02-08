
let counterValue = 0;


const onButtonDecrementClick = event => (
    value.textContent = counterValue -=1
)

const onButtonIncremClick = event => (
    value.textContent = counterValue +=1
)


const counter = document.querySelector('#counter')
const buttonDecrem = document.querySelector('button[data-action="decrement"]');
const buttonIncrem = document.querySelector('button[data-action="increment"]');

buttonDecrem.addEventListener('click', onButtonDecrementClick);
buttonIncrem.addEventListener('click', onButtonIncremClick);

const value = document.querySelector('#value');

console.log(counterValue);

