"use strict";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");

const openSubmit = () => {
  if (password.value.length !== 0 && email.value.length !== 0) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

const sendForm = async (e) => {
  e.preventDefault();
  const error = document.querySelectorAll(".error");
  if (error.length) error.forEach((item) => (item.hidden = true));

  try {
    const formData = new FormData(form);
    const formDataObj = Array.from(formData.entries()).reduce(
      (prev, [name, value]) => ({
        ...prev,
        [name]: value,
      }),
      {}
    );
    const formDataJSON = JSON.stringify(formDataObj);
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formDataJSON,
    });
    const result = await response.json();
    alert(`Данные, переданные на сервер: ${result.data}`);
    form.hidden = true;
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div class="success">Данные загрузились!</div>'
    );
  } catch {
    email.insertAdjacentHTML("afterend", '<div class="error">ОШИБКА</div>');
    password.insertAdjacentHTML("afterend", '<div class="error">ОШИБКА</div>');
  }
};

email.addEventListener("input", openSubmit);
password.addEventListener("input", openSubmit);
form.addEventListener("submit", sendForm);