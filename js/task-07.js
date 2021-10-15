const controler = document.querySelector("#font-size-control");
const textForChanging = document.querySelector("#text");
controler.addEventListener("input", (event) => {
    textForChanging.style.fontSize = `${event.currentTarget.value}px`;
});