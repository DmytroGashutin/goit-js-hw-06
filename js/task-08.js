const form = document.querySelector('.login-form')
form.addEventListener('submit', onSubmitForm);
function onSubmitForm(event) {
    event.preventDefault()
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    console.dir(event)
    if (!email || !password) {
        return alert('Заполните все  доступные поля');
    }
        const Obj = { email, password };
    console.log(Obj);
    form.reset()
    
};