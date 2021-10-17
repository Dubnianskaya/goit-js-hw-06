const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`)
categoriesItem.forEach(function (category) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    const categoriesTypeAmmount = category.lastElementChild.children.length;
    console.log(`Elements: ${categoriesTypeAmmount}`);
})
