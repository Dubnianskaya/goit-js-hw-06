function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesContainer = document.querySelector("#boxes")
const valueOfNumber = document.querySelector("input");
let increasingSize = 20;
function createBoxes() {
  const amount = valueOfNumber.value;
  const items = [];
  for (let i = 0; i < amount; i += 1) {
    const boxes = document.createElement("div");
    increasingSize += 10;
    boxes.style.width = `${increasingSize}px`;
    boxes.style.height = `${increasingSize}px`;
    boxes.style.backgroundColor = getRandomHexColor()
    items.push(boxes);
}
boxesContainer.append(...items)
}
const destroyBtn = document.querySelector('button[data-destroy]')
function destroyBoxes() {
  boxes.remove();
  window.location.reload();
}
destroyBtn.addEventListener("click", destroyBoxes)
const createBtn = document.querySelector('button[data-create]')
createBtn.addEventListener("click", createBoxes)