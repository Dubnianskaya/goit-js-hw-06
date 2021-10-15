function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorChangerBtn = document.querySelector(".change-color");
const body = document.querySelector("body")
const colorCode = document.querySelector(".color")
const onGetColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorCode.textContent = getRandomHexColor();
}
colorChangerBtn.addEventListener("click", onGetColor)