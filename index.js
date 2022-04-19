const loginOpener = document.querySelector(".login-modal-open");
const loginModal = document.querySelector(".login-modal-container");
const loginContainer = document.querySelector(".login-container");
const loginCloser = document.querySelector(".login-modal-close-button");

function loginOpen() {
    loginModal.classList.toggle("on");
    loginContainer.classList.toggle("off");
}

loginOpener.addEventListener("click", loginOpen);
loginCloser.addEventListener("click", loginOpen);
