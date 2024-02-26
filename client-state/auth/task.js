const btn = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  const formData = new FormData(form);

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  xhr.responseType = "json";

  xhr.send(formData);

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      const response = xhr.response;

      if (!response.success) {
        alert("Неверный логин/пароль");
      } else {
        localStorage.setItem("user_id", response.user_id);
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        userId.textContent = localStorage.getItem("user_id");
      }
    }
  };
});
