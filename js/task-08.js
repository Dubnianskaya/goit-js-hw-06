const form = document.querySelector(".login-form");
const onSubmitForm = (event) => {
event.preventDefault();
const {
    elements: { email, password }
} = event.currentTarget;
if (email.value === "" || password.value === "") {
    alert("Красный свет! Заполните все поля чтобы был зеленый свет 🦑")
}
console.log(`${email.name}: ${email.value},${password.name}: ${password.value}`);
event.currentTarget.reset();
}
form.addEventListener("submit", onSubmitForm);