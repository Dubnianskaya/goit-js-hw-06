const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const items = ingredients.map(listItemName => {
  const listItem = document.createElement("li")
  listItem.textContent = listItemName;
  listItem.classList.add("item")
  return listItem;
});
list.append(...items);