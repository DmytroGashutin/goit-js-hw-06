const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsEl = document.querySelector('#ingredients');
const newIngredient = [];
ingredients.forEach(function (ingredient) {
  const itemEl = document.createElement('li');
  itemEl.classList.add = 'item';
  itemEl.textContent = ingredient;
  newIngredient.push(itemEl);
  console.log(itemEl);
});
ingredientsEl.append(...newIngredient);