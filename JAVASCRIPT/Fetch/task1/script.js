const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

if (email.value.length == 0 && password.value.length == 0) {
  submit.disabled = true;
}

form.onsubmit = async (e) => {
  e.preventDefault();

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

    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formDataJSON
    });

    const result = await response.json();
    alert(`Данные, переданные на сервер: ${result.data}`);
    form.hidden = true;
    document.body.insertAdjacentHTML('afterbegin', '<div class="success">Данные загрузились!</div>');
  } catch {
    email.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>');
    pass.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>');
  };
};