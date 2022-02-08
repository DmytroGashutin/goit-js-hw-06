const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(function (ingredient) {
  const itemEl = document.createElement('li');
  itemEl.classList.add = 'item';
  itemEl.textContent = ingredient;
  ingredientsEl.append(itemEl);
  console.log(itemEl);
});
