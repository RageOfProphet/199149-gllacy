
  var link = document.querySelector(".feedback-button");
  var popup = document.querySelector(".modal-content");
  var shadow = document.querySelector(".modal-shadow");
  var close = document.querySelector(".modal-content-close");

  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var mail = popup.querySelector("[name=email]");

  link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    shadow.classList.add('modal-show');
    });

  close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    shadow.classList.remove('modal-show');
    });

  form.addEventListener("submit", function(event){
    if (!login.value || !mail.value){
    event.preventDefault();
    console.log("Нужно ввести данные");
      }
    });
