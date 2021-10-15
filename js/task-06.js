const validationInput = document.querySelector("#validation-input");
const validLength = validationInput.getAttribute("data-length");
const onValidInputVerifiation = (event) => {
    event.currentTarget.value.length === Number(validLength) 
    ?
    validationInput.classList.add("valid") &
    validationInput.classList.remove("invalid")
   :
    validationInput.classList.add("invalid")
};
validationInput.addEventListener("blur", onValidInputVerifiation)
