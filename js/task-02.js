const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

ingredients.forEach(function(listItemName) {
  const listItem = document.createElement("li")
  listItem.textContent = listItemName;
  listItem.classList.add("item")
  list.append(listItem)
})
