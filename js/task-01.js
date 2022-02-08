const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categoties', categoriesEl.length);
categoriesEl.forEach(function (category) {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Element:', category.lastElementChild.children.length);
});
