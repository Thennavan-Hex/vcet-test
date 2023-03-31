const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "123456") {
        alert("You have successfully logged in.");
        location.reload();
        document.location.href="./index.html"
    } else {
        document.location="./error.html"
    }
})