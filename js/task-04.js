let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value")
const onDecrementValue = () => {
counterValue -= 1;
return value.textContent = counterValue;
}
decrementBtn.addEventListener("click", onDecrementValue);
const onIncrementValue = () => {
counterValue += 1;
return value.textContent = counterValue;
}
incrementBtn.addEventListener("click", onIncrementValue);
