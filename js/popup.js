
var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-content");
var shadow = document.querySelector(".modal-shadow");
var close = document.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var user = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storage = localStorage.getItem("name");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  shadow.classList.add("modal-show");

  if (storage) {
    user.value = storage;
    mail.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  shadow.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event){
  if (!user.value || !mail.value || !text.value){
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("user", user.value)
  }
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
      shadow.classList.remove("modal-show");
    }
  }
});
