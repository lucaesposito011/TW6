function performsLogin() {
    with(document.forms['login']){
        console.log(email.value, password.value)
    }
}