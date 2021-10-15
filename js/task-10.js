function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesContainer = document.querySelector("#boxes")
const valueOfNumber = document.querySelector("input");
function createBoxes(amount) {
  let increasingWidth = 20;
  let increasingHeight = 20;
  for (let i = 0; i < amount; i += 1) {
    const boxes = document.createElement("div");
    increasingWidth += 10;
    increasingHeight += 10;
    boxes.style.width = `${increasingWidth}px`;
    boxes.style.height = `${increasingHeight}px`;
    boxes.style.backgroundColor = getRandomHexColor()
    boxesContainer.append(boxes)
  }
}
 const valueResult = () => {
  valueOfNumber.addEventListener("input", (event) => {
  event.currentTarget.value;
  });
  return 3;
  // функция не работает :(
  // return тут для того, чтобы было видно результат других операций
}
const destroyBtn = document.querySelector('button[data-destroy]')
function destroyBoxes() {
  boxes.remove();
}
destroyBtn.addEventListener("click", destroyBoxes)
const createBtn = document.querySelector('button[data-create]')
createBtn.addEventListener("click", createBoxes(valueResult()))