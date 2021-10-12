const categoriesItemLength = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesItemLength}`)
const categoriesType = document.querySelectorAll("h2");
categoriesType.forEach(function (category){
    console.log(`Category: ${category.textContent}`)
    const categoriesTypeAmmount = category.nextElementSibling.querySelectorAll("li").length
    console.log(`Elements: ${categoriesTypeAmmount}`)
})
