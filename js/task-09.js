function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  body: document.querySelector('body'),
  spanColor: document.querySelector('span.color'),
  button: document.querySelector('button.change-color')
};

refs.button.addEventListener('click', onButtonColorChange);
function onButtonColorChange(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor()
  console.log(refs.spanColor.textContent);
};

 